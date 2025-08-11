// Selecciona la imagen principal que se muestra y la barra de miniaturas
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

// Selecciona el botón de oscurecer/aclarar y el overlay
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaración de la matriz de nombres de archivos de imágenes */
const images = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg', 'img/pic5.jpg'];
const alts = {
    'img/pic1.jpg': 'Primer plano de un ojo humano',
    'img/pic2.jpg': 'Roca que parece una ola',
    'img/pic3.jpg': 'Pensamientos morados y blancos',
    'img/pic4.jpg': 'Sección de la pared de la tumba de un faraón',
    'img/pic5.jpg': 'Polilla grande en una hoja'
};

/* Recorre el arreglo de imágenes y crea las miniaturas */
for (const image of images) {
  const newImage = document.createElement('img'); // Crea un nuevo elemento <img> para la miniatura
  newImage.setAttribute('src', image); // Asigna la ruta de la imagen
  newImage.setAttribute('alt', alts[image]); // Asigna el texto alternativo

  thumbBar.appendChild(newImage); // Añade la miniatura a la barra de miniaturas

  // Al hacer clic en una miniatura, cambia la imagen principal y su alt
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Añade funcionalidad al botón para oscurecer/aclarar la imagen principal */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class'); // Obtiene la clase actual del botón
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light'); // Cambia la clase a 'light'
        btn.textContent = 'Aclarar'; // Cambia el texto del botón
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; // Oscurece la imagen principal
    } else {
        btn.setAttribute('class', 'dark'); // Cambia la clase a 'dark'
        btn.textContent = 'Oscurecer'; // Cambia el texto del botón
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // Aclara la imagen principal
    }
});