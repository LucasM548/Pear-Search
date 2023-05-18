/**========================================================================
 *                           APPS PANEL
 *========================================================================**/
const appLinks = [
  { href: "https://discord.com/", imgSrc: "img/Apps/π-Scord.png", alt: "π-Scord", text: "π-Scord" },
  { href: "https://github.com/", imgSrc: "img/Apps/π-Hub.png", alt: "π-Hub", text: "π-Hub" },
  { href: "https://www.youtube.com/", imgSrc: "img/Apps/π-Tube.png", alt: "π-Tube", text: "π-Tube" },
  { href: "https://www.google.com/maps", imgSrc: "img/Apps/π-Maps.png", alt: "π-Maps", text: "π-Maps" },
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
  applicationsLabel.classList.toggle("hovered");
}

// Ajoutez cet écouteur d'événements pour gérer le retrait de la classe 'active' et 'hovered' lorsque l'utilisateur clique en dehors du panneau
document.addEventListener("click", function (event) {
  const applicationsLabel = document.querySelector('label[for="Applications"]');
  if (!appPanel.contains(event.target) && event.target.id !== "Applications" && event.target.tagName !== "LABEL") {
      appPanel.classList.remove("visible");
      applicationsLabel.classList.remove("active");
      if (applicationsLabel.classList.contains("hovered")) {
          applicationsLabel.classList.remove("hovered");
      }
  }
});

// Ajoutez cet écouteur d'événements pour gérer l'ajout de la classe 'hovered' lorsque l'utilisateur survole le bouton "Ap-pi-cations"
const applicationsLabel = document.querySelector('label[for="Applications"]');
applicationsLabel.addEventListener("mouseenter", function (event) {
  if (appPanel.classList.contains("visible")) {
      applicationsLabel.classList.add("hovered");
  }
});

// Ajoutez cet écouteur d'événements pour gérer le retrait de la classe 'hovered' lorsque l'utilisateur ne survole plus le bouton "Ap-pi-cations"
applicationsLabel.addEventListener("mouseleave", function (event) {
  applicationsLabel.classList.remove("hovered");
});

document.addEventListener("click", function (event) {
  if (!appPanel.contains(event.target) && event.target.id !== "Applications" && event.target.tagName !== "LABEL") {
      appPanel.classList.remove("visible");
  }
});
/*============================ END OF APPS PANEL ============================*/


/**============================================
 *               CHOIX MOTEUR
 *=============================================**/
function getEngineURL(engine) {
  switch (engine) {
    case 'Google':
      return 'https://www.google.com/search?q=';
    case 'Brave_search':
      return 'https://search.brave.com/search?q=';
    case 'DuckDuckGo':
      return 'https://duckduckgo.com/?q=';
    default:
      return '';
  }
}

function getSelectedEngine() {
  const storedEngine = localStorage.getItem('selectedEngine');
  if (storedEngine) {
    return storedEngine;
  } else {
    return 'Brave_search';
  }
}

$('input[name="search_engine"]').on('change', function() {
  const newSelectedEngine = $('input[name="search_engine"]:checked').val();
  localStorage.setItem('selectedEngine', newSelectedEngine);
});
/*=============== FIN DU CHOIX MOTEUR ==============*/


/**========================================================================
 *                           BOUTON RECHERCHE
 *========================================================================**/
function searchToggle(obj, evt) {
  const container = $(obj).closest('.search-wrapper');
  const selectedEngine = getSelectedEngine();

  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
  } else if (
    container.find('.search-input').val().trim() !== '' &&
    (evt.target.classList.contains('search-icon') ||
      evt.target.classList.contains('span') ||
      (evt.type === 'keypress' && (evt.key === 'Enter' || evt.key === 'Return')))
  ) {
    const searchText = container.find('.search-input').val();
    const webUrl = getEngineURL(selectedEngine);
    if (webUrl) {
      const finalURL = webUrl + encodeURIComponent(searchText);
      window.location.href = finalURL;
    }
  } else if (container.hasClass('active') && !$(obj).closest('.input-holder').length) {
    container.removeClass('active');
    container.find('.search-input').val('');
  }
}

$('.search-input').on('keypress', function(evt) {
  if (evt.key === 'Enter' || evt.key === 'Return') {
    searchToggle(this, evt);
  }
});
/*============================ END OF BOUTON RECHERCHE ============================*/