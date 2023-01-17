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
5. inserisco titolo e descrizione: creo un nuovo array di soli titoli uno di descrizione;
6. li inserisco nello stesso modo di come ho inserito le immagini; 

*/

const slider = [
  (imgUno = {
    titolo: `<h3>Titolo immagine Uno</h3>`,
    url: `<img src="img/01_verde_img_640x360.png"`,
    descrizione: "Descrizione img Uno",
  }),
  (imgDue = {
    titolo: `<h3>Titolo immagine Due</h3>`,
    url: `<img src="img/02_carmine_img_640x360.png"`,
    descrizione: "Descrizione img Due",
  }),
  (imgTre = {
    titolo: `<h3>Titolo immagine Tre</h3>`,
    url: `<img src="img/03_magenta_img_640x360.png">`,
    descrizione: "Descrizione img Tre",
  }),
  (imgQuattro = {
    titolo: `<h3>Titolo immagine Quattro</h3>`,
    url: `<img src="img/04_viola_img_640x360.png">`,
    descrizione: "Descrizione img Quattro",
  }),
];

const contenitoreSlide = document.querySelector(".slide");
const frecciaDestra = document.querySelector(".frecciaDestra");
const frecciaSinistra = document.querySelector(".frecciaSinistra");

//-----------------------------------------------------------------------

for (let i = 0; i < slider.length; i++) {
  contenitoreSlide.innerHTML += `<div class="title nascosta">${slider[i].titolo}</div>`;
  contenitoreSlide.innerHTML += `<div class="desc nascosta">${slider[i].descrizione}</div>`;
  contenitoreSlide.innerHTML += `<div class="immagini nascosta">${slider[i].url}</div>`;
}

const allSlide = document.querySelectorAll(".immagini");
const allTitoli = document.querySelectorAll(".title");
const allDesc = document.querySelectorAll(".desc");
console.log("allSlide", allSlide);
console.log("allTitoli", allTitoli);

allSlide[0].classList.add("visibile");
allTitoli[0].classList.add("visible");
allDesc[0].classList.add("visibile");

let descCorrente = 0;
let titoloCorrente = 0;
let slideCorrente = 0;

frecciaDestra.addEventListener("click", function () {
  console.log("cliccato destra");

  if (slideCorrente < allSlide.length - 1) {
    console.log("vado avanti");

    allSlide[slideCorrente].classList.remove("visibile");
    allTitoli[titoloCorrente].classList.remove("visibile");
    allDesc[descCorrente].classList.remove("visibile");

    slideCorrente = slideCorrente + 1;
    titoloCorrente = titoloCorrente + 1;
    descCorrente = descCorrente + 1;

    allSlide[slideCorrente].classList.add("visibile");
    allTitoli[titoloCorrente].classList.add("visibile");
    allDesc[descCorrente].classList.add("visibile");
  } else if (
    slideCorrente == allSlide.length - 1 &&
    titoloCorrente == allTitoli.length - 1 &&
    descCorrente == allDesc.length - 1
  ) {
    console.log("torno indietro");

    allSlide[slideCorrente].classList.remove("visibile");
    allTitoli[titoloCorrente].classList.remove("visibile");
    allDesc[descCorrente].classList.remove("visibile");

    titoloCorrente = 0;
    descCorrente = 0;
    slideCorrente = 0;
    allSlide[slideCorrente].classList.add("visibile");
    allTitoli[titoloCorrente].classList.add("visibile");
    allDesc[descCorrente].classList.add("visibile");
  }
});

frecciaSinistra.addEventListener("click", function () {
  console.log("cliccato sinistra");

  if (slideCorrente <= allSlide.length - 1 && slideCorrente > 0) {
    console.log("ccccccccccc");

    allSlide[slideCorrente].classList.remove("visibile");
    allTitoli[titoloCorrente].classList.remove("visibile");
    allDesc[descCorrente].classList.remove("visibile");

    slideCorrente = slideCorrente - 1;
    titoloCorrente = titoloCorrente - 1;
    descCorrente = descCorrente - 1;

    allSlide[slideCorrente].classList.add("visibile");
    allTitoli[titoloCorrente].classList.add("visibile");
    allDesc[descCorrente].classList.add("visibile");
  } else if (slideCorrente == 0) {
    console.log("stop");

    allSlide[slideCorrente].classList.remove("visibile");
    allTitoli[titoloCorrente].classList.remove("visibile");
    allDesc[descCorrente].classList.remove("visibile");

    slideCorrente = 3;
    titoloCorrente = 3;
    descCorrente = 3;

    allSlide[slideCorrente].classList.add("visibile");
    allTitoli[titoloCorrente].classList.add("visibile");
    allDesc[descCorrente].classList.add("visibile");
  }
});

// -------------------------------------------

nextArrow.addEventListener(
  "click",

  function () {
    if (currentSlide < allSlides.length - 1) {
      console.log("ho cliccato su .next");
      allSlides[currentSlide].classList.remove("current");
      currentSlide = currentSlide + 1;

      allSlides[currentSlide].classList.add("current");
    } else if (currentSlide == allSlides.length - 1) {
      console.log("torno indietro");
      allSlides[currentSlide].classList.remove("current");
      currentSlide = 0;
      allSlides[currentSlide].classList.add("current");
    }
  }
);

previousArrow.addEventListener(
  "click",

  function () {
    if (currentSlide <= allSlides.length - 1 && currentSlide > 0) {
      console.log("ho cliccato su .previous");
      allSlides[currentSlide].classList.remove("current");
      currentSlide = currentSlide - 1;

      allSlides[currentSlide].classList.add("current");
    } else if (currentSlide == 0) {
      console.log("torno indietro");

      allSlides[currentSlide].classList.remove("current");
      currentSlide = 4;
      allSlides[currentSlide].classList.add("current");
    }
  }
);
