const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const PORT = 8787;
const URL  = `http://localhost:${PORT}/index.html`;
const OUT  = '/tmp/index-review';
fs.mkdirSync(OUT, { recursive: true });

const SECTIONS = [
  { name: '01-hero',        selector: '.hero' },
  { name: '02-solutions',   selector: '.solutions' },
  { name: '03-cifras',      selector: '.cifras' },
  { name: '04-aliados',     selector: '.aliados' },
  { name: '05-before-after',selector: '.before-after' },
  { name: '06-projects',    selector: '.projects' },
  { name: '07-marquee',     selector: '.marquee-band' },
  { name: '08-footer',      selector: '.footer' },
];

const VIEWPORTS = [
  { name: 'desktop', w: 1440, h: 900 },
  { name: 'mobile',  w: 375,  h: 812 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    const ctx  = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await ctx.newPage();
    page.on('console', () => {});
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1800); // i18n settle

    for (const sec of SECTIONS) {
      const el = page.locator(sec.selector).first();
      const exists = await el.count();
      if (!exists) { console.log(`  SKIP ${sec.name} — not found`); continue; }

      // scroll element into view (top-aligned)
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      const file = path.join(OUT, `${vp.name}-${sec.name}.png`);
      await page.screenshot({ path: file });
      process.stdout.write(`  ${vp.name} ${sec.name} → saved\n`);
    }

    await ctx.close();
  }

  await browser.close();
  console.log('\nAll screenshots saved to /tmp/index-review/');
})();
