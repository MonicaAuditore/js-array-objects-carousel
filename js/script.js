/*
Esercizio di oggi: Carosello Array di Oggetti
nome repo: js-array-objects-carousel
Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra, l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

/*
1. creo un array di oggetti contenenti 4 immagini;
2. creo il carosello statico in html e css;
3. creo due classi in css, "nascosta" e "visibile"; tolgo le immagini in html e inserisco le img da js;
4. animo le frecce;
5. inserisco titolo e descrizione;

*/

const slider = [
  (imgUno = {
    titolo: "immagine Uno",
    url: `<img src="img/01_verde_img_640x360.png"`,
    descrizione: "desc img Uno",
  }),
  (imgDue = {
    titolo: "immagine Due",
    url: `<img src="img/02_carmine_img_640x360.png"`,
    descrizione: "desc img Due",
  }),
  (imgTre = {
    titolo: "immagine Tre",
    url: `<img src="img/03_magenta_img_640x360.png">`,
    descrizione: "desc img Tre",
  }),
  (imgQuattro = {
    titolo: "immagine Quattro",
    url: `<img src="img/04_viola_img_640x360.png">`,
    descrizione: "desc img Quattro",
  }),
];

const contenitoreSlide = document.querySelector(".slide");
const frecciaDestra = document.querySelector(".frecciaDestra");
const frecciaSinistra = document.querySelector(".frecciaSinistra");

for (let i = 0; i < slider.length; i++) {
  contenitoreSlide.innerHTML += `<div class="immagini nascosta">${slider[i].url}</div>`;
}

const allSlide = document.querySelectorAll(".immagini");
console.log("allSlide", allSlide);

allSlide[0].classList.add("visibile");

let slideCorrente = 0;

frecciaDestra.addEventListener("click", function () {
  console.log("cliccato destra");
  allSlide[slideCorrente].classList.remove("visibile");
  slideCorrente = slideCorrente + 1;
  allSlide[slideCorrente].classList.add("visibile");
});

frecciaSinistra.addEventListener("click", function () {
  console.log("cliccato sinistra");
  allSlide[slideCorrente].classList.remove("visibile");
  slideCorrente = slideCorrente - 1;
  allSlide[slideCorrente].classList.add("visibile");
});
