/**========================================================================
 *                           CHOIX LANGUE
 *========================================================================**/
const translations = {
  fr: {
    translation: {
      "Ap-π-cations": "Ap-π-cations",
      "placeholder": "Écrivez pour trouver votre bonheur - Pear",
      "search-choice": "Choix du navigateur",
      "contribution": "Contribuer",
    }
  },
  en: {
    translation: {
      "Ap-π-cations": "Ap-π-cations",
      "placeholder": "Write to find your happiness - Pear",
      "search-choice": "Choice of browser",
      "contribution": "Contribution",
    }
  },
  es: {
    translation: {
      "Ap-π-cations": "Aπ-licaciones",
      "placeholder": "Escribe para encontrar tu felicidad - Pear",
      "search-choice": "Elección del navegador",
      "contribution": "Contribuir",
    }
  },
  it: {
    translation: {
      "Ap-π-cations": "Aπ-plicazioni",
      "placeholder": "Scrivi per trovare la tua felicità - Pear",
      "search-choice": "Scelta del navigatore",
      "contribution": "Contribuire",
    }
  },
  ru: {
    translation: {
      "Ap-π-cations": "Приложе-π-ии",
      "placeholder": "Пишите, чтобы найти свое счастье - Pear",
      "search-choice": "Выбор браузера",
      "contribution": "Сотрудничать",
    }
  },
  zh: {
    translation: {
      "Ap-π-cations": "应用π",
      "placeholder": "写信寻找你的幸福 - Pear",
      "search-choice": "浏览器的选择",
      "contribution": "贡献",
    }
  },
  ko: {
    translation: {
      "Ap-π-cations": "응용프로-π-램",
      "placeholder": "당신의 행복을 찾기 위해 글을 쓰세요 - Pear",
      "search-choice": "브라우저 선택",
      "contribution": "기여하다",
    }
  },
  π: {
    translation: {
      "Ap-π-cations": "1 16 - π - 3 1 20 9 15 14 19",
      "placeholder": "23 18 9 20 5   20 15   6 9 14 4   25 15 21 18   8 1 16 16 9 14 5 19 19 - Pear",
      "search-choice": "3 8 15 9 3 5   15 6   2 18 15 23 19 5 18",
      "contribution": "3 15 14 20 18 15 20 21 2 9 15 14",
    }
  },
};

i18next.init({
  lng: 'fr',
  resources: translations,
}, function(err, t) {
  updateContent();
});

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    var key = element.getAttribute('data-i18n');
    if (key === 'placeholder') {
      element.setAttribute('placeholder', i18next.t(key));
    } else {
      element.textContent = i18next.t(key);
    }
  });
}

function changeLanguage(event) {
  var selectedLanguage = event.target.value;
  i18next.changeLanguage(selectedLanguage, function(err, t) {
    if (err) {
      console.log('Erreur lors du changement de langue :', err);
      return;
    }
    localStorage.setItem('language', selectedLanguage);
    updateContent();
  });
}

window.addEventListener('load', function() {
  var language = localStorage.getItem('language');
  if (!language) {
    var userLanguage = navigator.language.split('-')[0];
    if (['fr', 'en', 'es', 'it', 'ru', 'zh', 'ko', 'π'].includes(userLanguage)) {
      language = userLanguage;
    } else {
      language = 'en';
    }
    localStorage.setItem('language', language);
  }
  document.querySelector('#language select').value = language;
  i18next.changeLanguage(language, function(err, t) {
    if (err) {
      console.log('Erreur lors du changement de langue :', err);
      return;
    }
    updateContent();
  });
});
/*============================ END OF CHOIX LANGUE ============================*/


/**============================================
 *               SWITCH NIGHT/DAY
 *=============================================**/
const checkbox = document.getElementById('day-light');
const root = document.documentElement;
const theme = localStorage.getItem('theme');

root.classList.toggle('Day-mode', theme === 'Day-mode');
checkbox.checked = theme !== 'Day-mode';

checkbox.addEventListener('change', function() {
  if (this.checked) {
    root.classList.remove('Day-mode');
    localStorage.removeItem('theme');
  } else {
    root.classList.add('Day-mode');
    localStorage.setItem('theme', 'Day-mode');
  }
});
/*=============== END OF SWITCH NIGHT/DAY ==============*/


/**========================================================================
 *                           APPS PANEL
 *========================================================================**/
const appLinks = [
  { href: "https://discord.com/", imgSrc: "img/Apps/π-Scord.png", alt: "π-Scord", text: "π-Scord" },
  { href: "https://github.com/", imgSrc: "img/Apps/π-Hub.png", alt: "π-Hub", text: "π-Hub" },
  { href: "https://www.paypal.com/", imgSrc: "img/Apps/π-Pal.png", alt: "π-Pal", text: "π-Pal" },
  { href: "https://www.youtube.com/", imgSrc: "img/Apps/π-Tube.png", alt: "π-Tube", text: "π-Tube" },
  { href: "https://translate.google.com/", imgSrc: "img/Apps/π-Translate.png", alt: "π-Translate", text: "π-Translate" },
  { href: "https://www.google.com/maps/", imgSrc: "img/Apps/π-Maps.png", alt: "π-Maps", text: "π-Maps" },
  { href: "https://play.google.com/", imgSrc: "img/Apps/π-Play.png", alt: "π-Play", text: "π-Play" },
  { href: "https://docs.google.com/", imgSrc: "img/Apps/π-Docx.png", alt: "π-Docx", text: "π-Docx" },
  { href: "https://sheets.google.com/", imgSrc: "img/Apps/π-Sheets.png", alt: "π-Sheets", text: "π-Sheets" },
  { href: "https://slides.google.com/", imgSrc: "img/Apps/π-Slides.png", alt: "π-Slides", text: "π-Slides" },
  { href: "https://forms.google.com/", imgSrc: "img/Apps/π-Forms.png", alt: "π-Forms", text: "π-Forms" },
  { href: "https://earth.google.com/", imgSrc: "img/Apps/π-Earth.png", alt: "π-Earth", text: "π-Earth" },
  { href: "https://meet.google.com/", imgSrc: "img/Apps/π-Meet.png", alt: "π-Meet", text: "π-Meet" },
  { href: "https://news.google.com/", imgSrc: "img/Apps/π-News.png", alt: "π-News", text: "π-News" },
  { href: "https://shopping.google.com/", imgSrc: "img/Apps/Shopp-π-G.png", alt: "Shopp-π-G", text: "Shopp-π-G" },
];

const appPanel = document.getElementById("appPanel");
const applicationsLabel = document.querySelector('label[for="Applications"]');

appLinks.forEach((app) => {
  const appElement = document.createElement("a");
  appElement.href = app.href;
  appElement.target = "_blank";
  appElement.classList.add("app");

  const imgElement = document.createElement("img");
  imgElement.src = app.imgSrc;
  imgElement.alt = app.alt;

  const textElement = document.createElement("p");
  textElement.textContent = app.text;

  appElement.appendChild(imgElement);
  appElement.appendChild(textElement);
  appPanel.appendChild(appElement);
});

function toggleAppPanel(event) {
  event.stopPropagation();
  appPanel.classList.toggle("visible");
  applicationsLabel.classList.toggle("active");
  applicationsLabel.classList.toggle("hovered", appPanel.classList.contains("visible"));
}

function hideAppPanel() {
  appPanel.classList.remove("visible");
  applicationsLabel.classList.remove("active", "hovered");
}

document.addEventListener("click", function (event) {
  if (!appPanel.contains(event.target) && event.target.id !== "Applications" && event.target.tagName !== "LABEL") {
    hideAppPanel();
  }
});

applicationsLabel.addEventListener("mouseenter", function (event) {
  if (appPanel.classList.contains("visible")) {
    applicationsLabel.classList.add("hovered");
  }
});

applicationsLabel.addEventListener("mouseleave", function (event) {
  applicationsLabel.classList.remove("hovered");
});
/*============================ END OF APPS PANEL ============================*/


/**============================================
 *               CHOIX MOTEUR
 *=============================================**/
function getEngineURL(engine) {
  const engineURLs = {
    Google: "https://www.google.com/search?q=",
    Brave_search: "https://search.brave.com/search?q=",
    DuckDuckGo: "https://duckduckgo.com/?q="
  };

  return engineURLs[engine] || "";
}

function getSelectedEngine() {
  const storedEngine = localStorage.getItem("selectedEngine");
  return storedEngine || "Brave_search";
}

function setSelectedEngine(engine) {
  localStorage.setItem("selectedEngine", engine);
  $('input[name="search_engine"]').filter('[value="' + engine + '"]').prop("checked", true);
}

$(document).ready(function () {
  const selectedEngine = getSelectedEngine();
  setSelectedEngine(selectedEngine);
});

$('input[name="search_engine"]').on("change", function () {
  const newSelectedEngine = $('input[name="search_engine"]:checked').val();
  setSelectedEngine(newSelectedEngine);
});
/*=============== END OF CHOIX MOTEUR ==============*/


/**========================================================================
 *                           BOUTON RECHERCHE
 *========================================================================**/
function searchToggle(obj, evt) {
  const container = $(obj).closest(".search-wrapper");
  const selectedEngine = getSelectedEngine();
  const searchInput = container.find(".search-input");

  if (!container.hasClass("active")) {
    container.addClass("active");
    evt.preventDefault();
    searchInput.focus();
  } else if (
    searchInput.val().trim() !== "" &&
    (evt.target.classList.contains("search-icon") ||
      evt.target.classList.contains("span") ||
      (evt.type === "keypress" &&
        (evt.key === "Enter" || evt.key === "Return")))
  ) {
    const searchText = searchInput.val();
    const webUrl = getEngineURL(selectedEngine);
    if (webUrl) {
      const finalURL = webUrl + encodeURIComponent(searchText);
      window.location.href = finalURL;
    }
  } else if (
    container.hasClass("active") &&
    !$(obj).closest(".input-holder").length
  ) {
    container.removeClass("active");
    searchInput.val("");
  }
}

$(".search-input").on("keypress", function (evt) {
  if (evt.key === "Enter" || evt.key === "Return") {
    searchToggle(this, evt);
  }
});
/*============================ END OF BOUTON RECHERCHE ============================*/


/**======================
 *    BOUTON CONTRIBUTION
 *========================**/
const links = [
  "https://www.paypal.com/paypalme/LucasM54",
  "https://www.paypal.com/paypalme/biquidouLIV"
];

function openRandomLink() {
  const randomLink = links[Math.floor(Math.random() * links.length)];
  window.open(randomLink, "_blank");
}
/*==== END OF BOUTON CONTRIBUTION ====*/


/**======================
 *    ANALYTICS
 *========================**/
window.dataLayer = window.dataLayer || []
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6MV2RQWCTV');

(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hdfskdqo11");
/*==== END OF ANALYTICS ====*/