#!/usr/bin/env node
/**
 * DreamGIS Layout Validator
 * Usage: node scripts/validate-layout.js [url] [--port=8787]
 *
 * Checks:
 *  1. No horizontal overflow at any breakpoint
 *  2. .container elements are centered (equal left/right margins ±4px)
 *  3. No element bleeds past right edge of viewport
 *  4. Section headings/intro text aligns with pad-x, not flush to 0
 *  5. Images have alt attributes
 *  6. data-i18n keys resolve (no untranslated keys shown)
 *  7. Nav links visible and not clipped
 *  8. Responsive: content readable at 375 / 768 / 1440
 */

const { chromium } = require('playwright');
const path = require('path');
const fs   = require('fs');

const PORT       = parseInt(process.argv.find(a => a.startsWith('--port='))?.split('=')[1] ?? '8787');
const PAGE_PATHS = process.argv.filter(a => !a.startsWith('--') && a !== process.argv[0] && a !== process.argv[1])
  .filter(Boolean);

const PAGES = PAGE_PATHS.length
  ? PAGE_PATHS.map(p => `http://localhost:${PORT}/${p}`)
  : [`http://localhost:${PORT}/index.html`];

const VIEWPORTS = [
  { name: 'mobile',  width: 375,  height: 812 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'desktop', width: 1440, height: 900  },
];

// Expected DreamGIS design tokens (computed px values at 1440 wide)
const DESIGN_RULES = {
  maxContainerWidth: 1280,
  expectedPrimary:   'rgb(0, 106, 255)',   // --primary: #006aff
  expectedTeal:      'rgb(0, 196, 180)',   // --teal:    #00c4b4
  minPadX:           20,                  // --pad-x min (clamp floor)
};

const SCREENSHOT_DIR = path.join(__dirname, '../.validate-screenshots');
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

// ─── helpers ─────────────────────────────────────────────────────────────────

function red(s)    { return `\x1b[31m${s}\x1b[0m`; }
function yellow(s) { return `\x1b[33m${s}\x1b[0m`; }
function green(s)  { return `\x1b[32m${s}\x1b[0m`; }
function bold(s)   { return `\x1b[1m${s}\x1b[0m`; }

class Report {
  constructor() { this.findings = []; }
  error(page, vp, msg, el)   { this.findings.push({ level: 'ERROR',   page, vp, msg, el }); }
  warn(page, vp, msg, el)    { this.findings.push({ level: 'WARN',    page, vp, msg, el }); }
  info(page, vp, msg, el)    { this.findings.push({ level: 'INFO',    page, vp, msg, el }); }
  print() {
    const errors = this.findings.filter(f => f.level === 'ERROR');
    const warns  = this.findings.filter(f => f.level === 'WARN');

    if (!this.findings.length) {
      console.log(green('✓ No issues found.'));
      return 0;
    }

    for (const f of this.findings) {
      const icon  = f.level === 'ERROR' ? red('✖') : f.level === 'WARN' ? yellow('⚠') : '·';
      const color = f.level === 'ERROR' ? red    : f.level === 'WARN'  ? yellow : s => s;
      console.log(`${icon} ${bold(f.page)} [${f.vp}]  ${color(f.msg)}${f.el ? `\n    element: ${f.el}` : ''}`);
    }

    console.log('');
    console.log(`${red(errors.length + ' error(s)')}   ${yellow(warns.length + ' warning(s)')}`);
    return errors.length > 0 ? 1 : 0;
  }
}

// ─── checks ──────────────────────────────────────────────────────────────────

async function checkHorizontalOverflow(page, vp, url, report) {
  const overflow = await page.evaluate(() => {
    const body = document.body;
    return {
      bodyScrollWidth: body.scrollWidth,
      windowWidth: window.innerWidth,
      overflow: body.scrollWidth > window.innerWidth + 2,
    };
  });
  if (overflow.overflow) {
    report.error(url, vp, `Horizontal overflow: body.scrollWidth=${overflow.bodyScrollWidth}px > viewport=${overflow.windowWidth}px`);
  }
}

async function checkContainerCentering(page, vp, url, report) {
  const issues = await page.evaluate((maxW) => {
    const containers = document.querySelectorAll('.container');
    const results = [];
    for (const el of containers) {
      const rect   = el.getBoundingClientRect();
      const leftM  = rect.left;
      const rightM = window.innerWidth - rect.right;
      const diff   = Math.abs(leftM - rightM);
      if (rect.width > maxW + 8) {
        results.push({ issue: 'width', w: Math.round(rect.width), selector: el.className.slice(0, 80) });
      }
      // only check centering when container doesn't touch edges (viewport > container)
      if (rect.width < window.innerWidth - 40 && diff > 6) {
        results.push({
          issue: 'centering',
          leftM: Math.round(leftM),
          rightM: Math.round(rightM),
          diff: Math.round(diff),
          selector: el.className.slice(0, 80),
        });
      }
    }
    return results;
  }, DESIGN_RULES.maxContainerWidth);

  for (const i of issues) {
    if (i.issue === 'width') {
      report.warn(url, vp, `Container wider than max (${i.w}px > ${DESIGN_RULES.maxContainerWidth}px)`, i.selector);
    } else {
      report.error(url, vp, `Container not centered: left=${i.leftM}px  right=${i.rightM}px  diff=${i.diff}px`, i.selector);
    }
  }
}

async function checkElementsInViewport(page, vp, url, report) {
  const overflows = await page.evaluate(() => {
    const vpW   = window.innerWidth;
    const all   = document.querySelectorAll('section, header, footer, nav, .hero, .solutions, .cifras, .aliados, .projects, .marquee-band, .before-after');
    const bad   = [];
    for (const el of all) {
      const rect = el.getBoundingClientRect();
      if (rect.right > vpW + 2) {
        const tag = el.tagName.toLowerCase();
        const cls = el.className.slice(0, 60);
        bad.push({ tag, cls, right: Math.round(rect.right), vpW });
      }
    }
    return bad;
  });

  for (const o of overflows) {
    report.error(url, vp, `Element bleeds right: right=${o.right}px viewport=${o.vpW}px`, `<${o.tag} class="${o.cls}">`);
  }
}

async function checkSectionPadding(page, vp, url, report) {
  // Sections should not have text/content flush to x=0 or x=viewport
  const issues = await page.evaluate((minPad) => {
    const selectors = ['h1', 'h2', 'p', '.eyebrow'];
    const bad = [];
    for (const sel of selectors) {
      for (const el of document.querySelectorAll(sel)) {
        const rect = el.getBoundingClientRect();
        if (rect.width < 10) continue; // invisible/empty
        if (rect.left < minPad - 2) {
          bad.push({ sel, left: Math.round(rect.left), text: el.textContent.slice(0, 40) });
        }
      }
    }
    return bad;
  }, DESIGN_RULES.minPadX);

  for (const i of issues) {
    report.warn(url, vp, `"${i.sel}" too close to left edge (left=${i.left}px, min=${DESIGN_RULES.minPadX}px): "${i.text}"`);
  }
}

async function checkImages(page, vp, url, report) {
  // Only check at desktop (same DOM)
  if (vp !== 'desktop') return;
  const issues = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    const bad  = [];
    for (const img of imgs) {
      if (!img.alt && img.alt !== '') bad.push({ src: img.src.slice(-50) });
      if (!img.complete || img.naturalWidth === 0) bad.push({ src: img.src.slice(-50), broken: true });
    }
    return bad;
  });
  for (const i of issues) {
    if (i.broken) report.error(url, vp, `Broken/missing image: ${i.src}`);
    else          report.warn(url,  vp, `Image missing alt: ${i.src}`);
  }
}

async function checkI18nKeys(page, vp, url, report) {
  if (vp !== 'desktop') return;
  const issues = await page.evaluate(() => {
    const els = document.querySelectorAll('[data-i18n]');
    const bad = [];
    for (const el of els) {
      const key  = el.getAttribute('data-i18n');
      const text = el.textContent.trim();
      // if text equals the key exactly, translation didn't fire
      if (text === key && key.includes('.')) {
        bad.push({ key, text });
      }
    }
    return bad;
  });
  for (const i of issues) {
    report.warn(url, vp, `Untranslated key: "${i.key}" — text still shows key`);
  }
}

async function checkNavVisibility(page, vp, url, report) {
  if (vp !== 'desktop') return;
  const navLinks = await page.evaluate(() => {
    const links = document.querySelectorAll('.nav__links .nav__link');
    const vpW = window.innerWidth;
    const bad = [];
    for (const a of links) {
      const rect = a.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      if (rect.right > vpW || rect.left < 0) {
        bad.push({ text: a.textContent.slice(0, 30) });
      }
    }
    return bad;
  });
  for (const n of navLinks) {
    report.error(url, vp, `Nav link clipped/outside viewport: "${n.text}"`);
  }
}

// ─── main ─────────────────────────────────────────────────────────────────────

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report  = new Report();

  for (const url of PAGES) {
    console.log(bold(`\n▸ ${url}`));

    for (const vp of VIEWPORTS) {
      process.stdout.write(`  ${vp.name.padEnd(8)}`);

      const ctx  = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await ctx.newPage();

      // suppress console noise
      page.on('console', () => {});

      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        // wait for i18n to render
        await page.waitForTimeout(1500);
      } catch (e) {
        report.error(url, vp.name, `Page failed to load: ${e.message}`);
        await ctx.close();
        console.log(red('LOAD ERROR'));
        continue;
      }

      await checkHorizontalOverflow(page, vp.name, url, report);
      await checkContainerCentering(page, vp.name, url, report);
      await checkElementsInViewport(page, vp.name, url, report);
      await checkSectionPadding(page, vp.name, url, report);
      await checkImages(page, vp.name, url, report);
      await checkI18nKeys(page, vp.name, url, report);
      await checkNavVisibility(page, vp.name, url, report);

      // Screenshot always — useful for diff
      const pageName = url.replace(/.*\//, '').replace('.html', '') || 'index';
      const shot     = path.join(SCREENSHOT_DIR, `${pageName}-${vp.name}.png`);
      await page.screenshot({ path: shot, fullPage: false });

      const vpFindings = report.findings.filter(f => f.vp === vp.name && f.page === url);
      const errs = vpFindings.filter(f => f.level === 'ERROR').length;
      const wrns = vpFindings.filter(f => f.level === 'WARN').length;
      if (!errs && !wrns) console.log(green(' OK'));
      else console.log(`  ${errs ? red(errs + 'E') : ''}  ${wrns ? yellow(wrns + 'W') : ''}`);

      await ctx.close();
    }
  }

  await browser.close();

  console.log('\n──────────────────────────────────────────');
  const code = report.print();
  console.log(`\nScreenshots saved to .validate-screenshots/`);
  process.exit(code);
})();
