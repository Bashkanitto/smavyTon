const langMenu = document.querySelector('.lang-menu');
const selectedLang = document.querySelector('.selected-lang');
const contentElements = document.querySelectorAll('.content-kz, .content-ru, .content-en');
const filmLink = document.getElementById('film');
const ticketLink = document.getElementById('ticket');

const translations = {
  kz: { film: "Фильм беті", ticket: "Билет беті" },
  ru: { film: "Страница фильма", ticket: "Страница билетов" },
  en: { film: "Film Page", ticket: "Ticket Page" }
};

function updateContent(lang) {
  selectedLang.textContent = document.querySelector(`.lang-menu a.${lang}`).textContent;
  contentElements.forEach(element => {
    element.style.display = element.classList.contains(`content-${lang}`) ? 'block' : 'none';
  });
  filmLink.textContent = translations[lang].film;
  ticketLink.textContent = translations[lang].ticket;
}

langMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const lang = event.target.classList[0];
    updateContent(lang);
  }
});

updateContent('kz');