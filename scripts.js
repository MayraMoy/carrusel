const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

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


/* Recorriendo imágenes en bucle */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', alts[image]);

  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Cableado del botón Oscurecer/Aclarar */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Aclarar';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Oscurecer';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});