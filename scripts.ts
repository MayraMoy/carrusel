// Selecciona la imagen principal que se muestra y la barra de miniaturas
const displayedImage = document.querySelector<HTMLImageElement>('.displayed-img');
const thumbBar = document.querySelector<HTMLDivElement>('.thumb-bar');

// Selecciona el botón de oscurecer/aclarar y el overlay
const btn = document.querySelector<HTMLButtonElement>('button');
const overlay = document.querySelector<HTMLDivElement>('.overlay');

/* Declaración de la matriz de nombres de archivos de imágenes */
const images: string[] = [
  'img/pic1.jpg',
  'img/pic2.jpg',
  'img/pic3.jpg',
  'img/pic4.jpg',
  'img/pic5.jpg'
];

const alts: Record<string, string> = {
  'img/pic1.jpg': 'Primer plano de un ojo humano',
  'img/pic2.jpg': 'Roca que parece una ola',
  'img/pic3.jpg': 'Pensamientos morados y blancos',
  'img/pic4.jpg': 'Sección de la pared de la tumba de un faraón',
  'img/pic5.jpg': 'Polilla grande en una hoja'
};

/* Verifica que los elementos existen antes de usarlos */
if (displayedImage && thumbBar && btn && overlay) {
  /* Recorre el arreglo de imágenes y crea las miniaturas */
  for (const image of images) {
    const newImage = document.createElement('img'); // Crea un nuevo <img>
    newImage.src = image; // Asigna la ruta
    newImage.alt = alts[image]; // Asigna el alt

    thumbBar.appendChild(newImage); // Añade la miniatura a la barra

    // Al hacer clic en una miniatura, cambia la imagen principal
    newImage.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLImageElement;
      displayedImage.src = target.src;
      displayedImage.alt = target.alt;
    });
  }

  /* Botón para oscurecer/aclarar */
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
}
