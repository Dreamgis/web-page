// js/i18n.js
function initializeI18n() {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      fallbackLng: "en",
      debug: true,
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    });

  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = i18next.t(key);
    });
  }

  function updateLanguageSelector() {
    const currentLang = i18next.language;
    document.querySelectorAll(".language-selector a").forEach((link) => {
      const isActive =
        link.querySelector("img").alt.toLowerCase() === currentLang;
      link.classList.toggle("active", isActive);
    });
  }

  i18next.on("languageChanged", () => {
    updateContent();
    updateLanguageSelector();
  });

  document.addEventListener("DOMContentLoaded", () => {
    updateContent();
  });
}
