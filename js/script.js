/**============================================
 *               SWITCH NIGHT/DAY
 *=============================================**/
// Récupération du bouton et du curseur
const themeToggle = document.getElementById("theme-toggle");
const themeToggleCursor = document.getElementById("theme-toggle-cursor");

// Récupération du thème actif dans le stockage local
const activeTheme = localStorage.getItem("activeTheme");

// Si le thème actif est "White-mode", on ajoute la classe correspondante à la balise <html>
if (activeTheme === "White-mode") {
  document.querySelector("html").classList.add("White-mode");
  // On déplace le curseur à droite pour représenter le mode nuit
  themeToggleCursor.style.transform = "translateX(30px)";
}

// Ajout d'un écouteur d'événement sur le clic du bouton
themeToggle.addEventListener("click", () => {
  // Récupération de la balise <html>
  const html = document.querySelector("html");

  // Si la classe "White-mode" est présente, on la supprime et on ajoute la classe par défaut
  if (html.classList.contains("White-mode")) {
    html.classList.remove("White-mode");
    // On déplace le curseur à gauche pour représenter le mode jour
    themeToggleCursor.style.transform = "translateX(0)";
    // On enregistre le thème actif dans le stockage local
    localStorage.setItem("activeTheme", "");
  } else {
    // Sinon, on ajoute la classe "White-mode"
    html.classList.add("White-mode");
    // On déplace le curseur à droite pour représenter le mode nuit
    themeToggleCursor.style.transform = "translateX(30px)";
    // On enregistre le thème actif dans le stockage local
    localStorage.setItem("activeTheme", "White-mode");
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
  const applicationsLabel = document.querySelector('label[for="Applications"]');
  appPanel.classList.toggle("visible");
  applicationsLabel.classList.toggle("active");
  if (appPanel.classList.contains("visible")) {
    applicationsLabel.classList.add("hovered");
  } else {
    applicationsLabel.classList.remove("hovered");
  }
}

function hideAppPanel() {
  const applicationsLabel = document.querySelector('label[for="Applications"]');
  appPanel.classList.remove("visible");
  applicationsLabel.classList.remove("active");
  applicationsLabel.classList.remove("hovered");
}

document.addEventListener("click", function (event) {
  const applicationsLabel = document.querySelector('label[for="Applications"]');
  if (
    !appPanel.contains(event.target) &&
    event.target.id !== "Applications" &&
    event.target.tagName !== "LABEL"
  ) {
    hideAppPanel();
  }
});

const applicationsLabel = document.querySelector('label[for="Applications"]');
applicationsLabel.addEventListener("mouseenter", function (event) {
  if (appPanel.classList.contains("visible")) {
    applicationsLabel.classList.add("hovered");
  }
});

applicationsLabel.addEventListener("mouseleave", function (event) {
  applicationsLabel.classList.remove("hovered");
});

document.addEventListener("click", function (event) {
  if (
    !appPanel.contains(event.target) &&
    event.target.id !== "Applications" &&
    event.target.tagName !== "LABEL"
  ) {
    hideAppPanel();
  }
});
/*============================ END OF APPS PANEL ============================*/


/**============================================
 *               CHOIX MOTEUR
 *=============================================**/
function getEngineURL(engine) {
  switch (engine) {
    case "Google":
      return "https://www.google.com/search?q=";
    case "Brave_search":
      return "https://search.brave.com/search?q=";
    case "DuckDuckGo":
      return "https://duckduckgo.com/?q=";
    default:
      return "";
  }
}

function getSelectedEngine() {
  const storedEngine = localStorage.getItem("selectedEngine");
  if (storedEngine) {
    return storedEngine;
  } else {
    return "Brave_search";
  }
}

function setSelectedEngine(engine) {
  localStorage.setItem("selectedEngine", engine);
  $('input[name="search_engine"][value="' + engine + '"]').prop(
    "checked",
    true
  );
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

  if (!container.hasClass("active")) {
    container.addClass("active");
    evt.preventDefault();
  } else if (
    container.find(".search-input").val().trim() !== "" &&
    (evt.target.classList.contains("search-icon") ||
      evt.target.classList.contains("span") ||
      (evt.type === "keypress" &&
        (evt.key === "Enter" || evt.key === "Return")))
  ) {
    const searchText = container.find(".search-input").val();
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
    container.find(".search-input").val("");
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
 *    GOOGLE ANALYTICS
 *========================**/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://raw.githubusercontent.com/LucasM548/G-A/main/An-s.js','ga');

ga('create', 'G-6MV2RQWCTV', 'auto');
ga('send', 'pageview');

/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6MV2RQWCTV');
*/
/*==== END OF GOOGLE ANALYTICS ====*/