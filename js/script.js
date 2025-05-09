/**============================================
 *               SWITCH NIGHT/DAY
 *=============================================**/
const checkbox = document.getElementById("day-light");
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "Day-mode") {
  root.classList.add("Day-mode");
  checkbox.checked = false;
} else {
  root.classList.remove("Day-mode");
  checkbox.checked = true;
}

checkbox.addEventListener("change", function () {
  if (this.checked) {
    root.classList.remove("Day-mode");
    localStorage.removeItem("theme");
  } else {
    root.classList.add("Day-mode");
    localStorage.setItem("theme", "Day-mode");
  }
});
/*=============== END OF SWITCH NIGHT/DAY ==============*/

/**========================================================================
 *                           CHOIX LANGUE
 *========================================================================**/
const translations = {
  en: {
    translation: {
      Placeholder: "Write to find your happiness - Pear",
    },
  },
  fr: {
    translation: {
      "π-Translate": "π-Traduction",
      Projects: "Projets",
      Placeholder: "Écrivez pour trouver votre bonheur - Pear",
      "Choice of browser": "Choix du navigateur",
      Contribute: "Contribuer",
    },
  },
  es: {
    translation: {
      "Ap-π-cations": "Ap-π-licaciones",
      "π-Translate": "π-Traducir",
      Projects: "Proyectos",
      Placeholder: "Escribe para encontrar tu felicidad - Pear",
      "Choice of browser": "Elección del navegador",
      Contribute: "Contribuir",
    },
  },
  it: {
    translation: {
      "Ap-π-cations": "Ap-π-plicazioni",
      "π-Translate": "π-Traduttore",
      Projects: "Progetti",
      Placeholder: "Scrivi per trovare la tua felicità - Pear",
      "Choice of browser": "Scelta del navigatore",
      Contribute: "Contribuire",
    },
  },
  ru: {
    translation: {
      "Ap-π-cations": "Приложе-π-ии",
      "π-Translate": "π-Переводчик",
      Projects: "Проекты",
      Placeholder: "Пишите, чтобы найти свое счастье - Pear",
      "Choice of browser": "Выбор браузера",
      Contribute: "Сотрудничать",
    },
  },
  zh: {
    translation: {
      "Ap-π-cations": "应用-π",
      "π-Translate": "π-翻譯",
      Projects: "項目",
      Placeholder: "写信寻找你的幸福 - Pear",
      "Choice of browser": "浏览器的选择",
      Contribute: "贡献",
    },
  },
  ja: {
    translation: {
      "Ap-π-cations": "ア-π-リケーション",
      "π-Translate": "π-翻訳",
      Projects: "プロジェクト",
      Placeholder: "幸せを見つけるために書く - Pear",
      "Choice of browser": "ブラウザの選択",
      Contribute: "貢献",
    },
  },
  ko: {
    translation: {
      "Ap-π-cations": "애플-π-케이션",
      "π-Translate": "π-변환",
      Projects: "프로젝트",
      Placeholder: "당신의 행복을 찾기 위해 글을 쓰세요 - Pear",
      "Choice of browser": "브라우저 선택",
      Contribute: "기여하다",
    },
  },
  π: {
    translation: {
      "Ap-π-cations": "1-16 - π - 3-1-20-9-15-14-19",
      "π-Translate": "π - 20-18-1-14-19-12-1-20-5",
      Projects: "16-18-15-10-5-3-20-19",
      Placeholder:
        "23-18-9-20-5  20-15  6-9-14-4  25-15-21-18  8-1-16-16-9-14-5-19-19 - Pear",
      "Choice of browser": "3-8-15-9-3-5  15-6  2-18-15-23-19-5-18",
      Google: "7-15-15-7-12-5",
      "Brave Search": "2-18-1-22-5  19-5-1-18-3-8",
      DuckDuckGo: "4-21-3-11-4-21-3-11-7-15",
      Bing: "2-9-14-7",
      Contribute: "3-15-14-20-18-15-20-21-2-9-15-14",
    },
  },
};

i18next.init(
  {
    lng: "en",
    resources: translations,
  },
  function (err, t) {
    if (err) {
      console.error("i18next initialization error:", err);
      return;
    }
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    if (key === "Placeholder") {
      element.setAttribute("placeholder", i18next.t(key));
    } else {
      element.textContent = i18next.t(key);
    }
  });
}

function changeLanguage(event) {
  const selectedLanguage = event.target.value;
  i18next.changeLanguage(selectedLanguage, function (err, t) {
    if (err) {
      console.error("Erreur lors du changement de langue :", err);
      return;
    }
    localStorage.setItem("language", selectedLanguage);
    updateContent();
    updateFlag(selectedLanguage);
  });
}

window.addEventListener("load", function () {
  let language =
    localStorage.getItem("language") || navigator.language.split("-")[0];
  if (
    !["en", "fr", "es", "it", "ru", "zh", "ja", "ko", "π"].includes(language)
  ) {
    language = "en";
  }
  localStorage.setItem("language", language);
  document.querySelector("#language select").value = language;
  i18next.changeLanguage(language, function (err, t) {
    if (err) {
      console.error("Erreur lors du changement de langue initial :", err);
      return;
    }
    updateContent();
    updateFlag(language);
  });
});

let animationInProgress = false;

function updateFlag(language) {
  if (animationInProgress) {
    setTimeout(function () {
      updateFlag(language);
    }, 100);
    return;
  }

  animationInProgress = true;
  const flagImg = document.getElementById("flag");
  let flagSrc = "";

  switch (language) {
    case "en":
      flagSrc = "img/Country Flags/united-kingdom.png";
      break;
    case "fr":
      flagSrc = "img/Country Flags/france.png";
      break;
    case "es":
      flagSrc = "img/Country Flags/spain.png";
      break;
    case "it":
      flagSrc = "img/Country Flags/italy.png";
      break;
    case "ru":
      flagSrc = "img/Country Flags/russia.png";
      break;
    case "zh":
      flagSrc = "img/Country Flags/china.png";
      break;
    case "ja":
      flagSrc = "img/Country Flags/japan.png";
      break;
    case "ko":
      flagSrc = "img/Country Flags/south-korea.png";
      break;
    case "π":
      flagSrc = "img/Pear.png";
      break;
    default:
      flagSrc = "";
  }

  if (flagSrc) {
    flagImg.src = flagSrc;
    flagImg.style.display = "block";
    flagImg.classList.add("flag-animate-class");

    flagImg.addEventListener(
      "animationend",
      function handleAnimationEnd() {
        flagImg.style.display = "none";
        flagImg.classList.remove("flag-animate-class");
        animationInProgress = false;
        flagImg.removeEventListener("animationend", handleAnimationEnd);
      },
      { once: true }
    );
  } else {
    flagImg.style.display = "none";
    animationInProgress = false;
  }
}
/*============================ END OF CHOIX LANGUE ============================*/

/**========================================================================
 *                           APPS PANEL
 *========================================================================**/
const appLinks = [
  {
    href: "https://discord.com/",
    imgSrc: "img/Apps/π-Scord.png",
    alt: "π-Scord",
    text: "π-Scord",
  },
  {
    href: "https://github.com/",
    imgSrc: "img/Apps/π-Hub.png",
    alt: "π-Hub",
    text: "π-Hub",
  },
  {
    href: "https://www.paypal.com/",
    imgSrc: "img/Apps/π-Pal.png",
    alt: "π-Pal",
    text: "π-Pal",
  },
  {
    href: "https://www.youtube.com/",
    imgSrc: "img/Apps/π-Tube.png",
    alt: "π-Tube",
    text: "π-Tube",
  },
  {
    href: "https://translate.google.com/",
    imgSrc: "img/Apps/π-Translate.png",
    alt: "π-Translate",
    dataI18n: "π-Translate",
  },
  {
    href: "https://www.google.com/maps/",
    imgSrc: "img/Apps/π-Maps.png",
    alt: "π-Maps",
    text: "π-Maps",
  },
  {
    href: "https://play.google.com/",
    imgSrc: "img/Apps/π-Play.png",
    alt: "π-Play",
    text: "π-Play",
  },
  {
    href: "https://docs.google.com/",
    imgSrc: "img/Apps/π-Docx.png",
    alt: "π-Docx",
    text: "π-Docx",
  },
  {
    href: "https://sheets.google.com/",
    imgSrc: "img/Apps/π-Sheets.png",
    alt: "π-Sheets",
    text: "π-Sheets",
  },
  {
    href: "https://slides.google.com/",
    imgSrc: "img/Apps/π-Slides.png",
    alt: "π-Slides",
    text: "π-Slides",
  },
  {
    href: "https://forms.google.com/",
    imgSrc: "img/Apps/π-Forms.png",
    alt: "π-Forms",
    text: "π-Forms",
  },
  {
    href: "https://earth.google.com/",
    imgSrc: "img/Apps/π-Earth.png",
    alt: "π-Earth",
    text: "π-Earth",
  },
  {
    href: "https://meet.google.com/",
    imgSrc: "img/Apps/π-Meet.png",
    alt: "π-Meet",
    text: "π-Meet",
  },
  {
    href: "https://news.google.com/",
    imgSrc: "img/Apps/π-News.png",
    alt: "π-News",
    text: "π-News",
  },
  {
    href: "https://shopping.google.com/",
    imgSrc: "img/Apps/Shopp-π-G.png",
    alt: "Shopp-π-G",
    text: "Shopp-π-G",
  },
  {
    href: "https://lucasm548.github.io/Projets-Lucas/",
    imgSrc: "img/Logo Axolotl.png",
    alt: "Logo Axolotl",
    dataI18n: "Projects",
  },
];

const appPanel = document.getElementById("appPanel");
const applicationsToggler = document.getElementById("applicationsToggler");

appPanel.setAttribute("aria-hidden", "true");

appLinks.forEach((app) => {
  const appElement = document.createElement("a");
  appElement.href = app.href;
  appElement.target = "_blank";
  appElement.rel = "noopener noreferrer";
  appElement.classList.add("app");

  const imgElement = document.createElement("img");
  imgElement.src = app.imgSrc;
  imgElement.alt = app.alt;

  const textElement = document.createElement("p");
  if (app.dataI18n) {
    textElement.setAttribute("data-i18n", app.dataI18n);
  } else {
    textElement.textContent = app.text;
  }

  appElement.appendChild(imgElement);
  appElement.appendChild(textElement);
  appPanel.appendChild(appElement);
});
updateContent();

function toggleAppPanel(event) {
  if (event) event.stopPropagation();

  const isVisible = appPanel.classList.toggle("visible");
  appPanel.setAttribute("aria-hidden", !isVisible);
  applicationsToggler.setAttribute("aria-expanded", isVisible);
  applicationsToggler.classList.toggle("active", isVisible);
}

function hideAppPanel() {
  appPanel.classList.remove("visible");
  appPanel.setAttribute("aria-hidden", "true");
  applicationsToggler.setAttribute("aria-expanded", "false");
  applicationsToggler.classList.remove("active");
}

applicationsToggler.addEventListener("click", toggleAppPanel);

document.addEventListener("click", function (event) {
  if (
    !appPanel.contains(event.target) &&
    !applicationsToggler.contains(event.target)
  ) {
    hideAppPanel();
  }
});
/*============================ END OF APPS PANEL ============================*/

/**========================================================================
 *                           BOUTON RECHERCHE
 *========================================================================**/
document.addEventListener("DOMContentLoaded", function () {
  searchToggle();
});

function searchToggle(evt) {
  const container = document.querySelector(".search-wrapper");
  const searchInput = container.querySelector(".search-input");
  const isActive = container.classList.contains("active");

  if (!isActive) {
    container.classList.add("active");
    setTimeout(() => searchInput.focus(), 200);
  } else if (isActive && evt && evt.target.classList.contains("close")) {
    container.classList.remove("active");
    searchInput.value = "";
  } else if (
    searchInput.value.trim() !== "" &&
    evt &&
    (evt.key === "Enter" ||
      (evt.type === "click" && evt.target.classList.contains("search-icon")))
  ) {
    const searchText = searchInput.value;
    const webUrl = getEngineURL(getSelectedEngine());
    if (webUrl) {
      const finalURL = webUrl + encodeURIComponent(searchText);
      window.open(finalURL, "_blank", "noopener noreferrer");
    }
  }
}

document.querySelector(".search-icon").addEventListener("click", searchToggle);
document
  .querySelector(".search-input")
  .addEventListener("keypress", function (evt) {
    if (evt.key === "Enter" || evt.key === "Return") {
      searchToggle(evt);
    }
  });
document.querySelector(".close").addEventListener("click", searchToggle);
/*============================ END OF BOUTON RECHERCHE ============================*/

/**============================================
 *               CHOIX MOTEUR
 *=============================================**/
function getEngineURL(engine) {
  const engineURLs = {
    Google: "https://www.google.com/search?q=",
    Brave_search: "https://search.brave.com/search?q=",
    DuckDuckGo: "https://duckduckgo.com/?q=",
    Bing: "https://www.bing.com/search?q=",
  };
  return engineURLs[engine] || "";
}

function getSelectedEngine() {
  const storedEngine = localStorage.getItem("selectedEngine");
  return storedEngine || "Brave_search";
}

function setSelectedEngine(engine) {
  localStorage.setItem("selectedEngine", engine);
  const radioButtons = document.querySelectorAll('input[name="search_engine"]');
  radioButtons.forEach((radio) => {
    radio.checked = radio.value === engine;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const selectedEngine = getSelectedEngine();
  setSelectedEngine(selectedEngine);

  const searchEngineRadios = document.querySelectorAll(
    'input[name="search_engine"]'
  );
  searchEngineRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        setSelectedEngine(this.value);
      }
    });
  });
});
/*=============== END OF CHOIX MOTEUR ==============*/

/**======================
 *    BOUTON CONTRIBUTION
 *========================**/
const piPalLinks = [
  "https://www.paypal.com/paypalme/LucasM54",
  "https://www.paypal.com/paypalme/biquidouLIV",
];

function openRandomLink() {
  const randomLink = piPalLinks[Math.floor(Math.random() * piPalLinks.length)];
  window.open(randomLink, "_blank", "noopener noreferrer");
}
/*==== END OF BOUTON CONTRIBUTION ====*/

/**======================
 *    ANALYTICS
 *========================**/
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-6MV2RQWCTV");

(function (c, l, a, r, i, t, y) {
  c[a] =
    c[a] ||
    function () {
      (c[a].q = c[a].q || []).push(arguments);
    };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "hdfskdqo11");
