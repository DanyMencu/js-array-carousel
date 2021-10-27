/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//Ref
const imgRef = document.querySelector('.images');
const thumbsRef = document.querySelector('.thumbs');

//Image active attribute
let activeImage = 1;

for (let i = 0; i < imageCollection.length; i++) {
    //Img
    imgRef.innerHTML += `
    <div class="image-container">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        <div class="text">
            <h3>${titleCollection[i]}</h3>
            <p>${textCollection[i]}</p>
        </div>
    </div>`;
    //Thumbs
    thumbsRef.innerHTML +=`
    <div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
    </div>`;
}

//Set active img and thumbnail default
document.getElementsByClassName('image-container')[activeImage].classList.add('active');
document.getElementsByClassName('thumb')[activeImage].classList.add('active');

//Next img section
//Ref
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    //Next loop navigation
    if (activeImage === imageCollection.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }
    //Img
    //Reset active class
    document.querySelector('.image-container.active').classList.remove('active');
    //Add active class
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    //Thumbnail
    //Reset active class
    document.querySelector('.thumb.active').classList.remove('active');
    //Add active class
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
})
//Previus img section
//Ref
const prev = document.querySelector('.prev');

prev.addEventListener('click', function(){

    //Previus loop navigation
    if (activeImage === 0) {
        activeImage = imageCollection.length - 1;
    } else {
        activeImage--;
    }
    //Img
    //Reset active class
    document.querySelector('.image-container.active').classList.remove('active');
    //Add active class
    document.getElementsByClassName('image-container')[activeImage].classList.add('active');
    //Thumbnail
    //Reset active class
    document.querySelector('.thumb.active').classList.remove('active');
    //Add active class
    document.getElementsByClassName('thumb')[activeImage].classList.add('active');
})