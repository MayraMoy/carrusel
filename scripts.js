// Selecciona la imagen principal que se muestra y la barra de miniaturas
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
// Selecciona el botón de oscurecer/aclarar y el overlay
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
/* Declaración de la matriz de nombres de archivos de imágenes */
var images = [
    'img/pic1.jpg',
    'img/pic2.jpg',
    'img/pic3.jpg',
    'img/pic4.jpg',
    'img/pic5.jpg'
];
var alts = {
    'img/pic1.jpg': 'Primer plano de un ojo humano',
    'img/pic2.jpg': 'Roca que parece una ola',
    'img/pic3.jpg': 'Pensamientos morados y blancos',
    'img/pic4.jpg': 'Sección de la pared de la tumba de un faraón',
    'img/pic5.jpg': 'Polilla grande en una hoja'
};
console.log("MAYRA MOYANO")
/* Verifica que los elementos existen antes de usarlos */
if (displayedImage && thumbBar && btn && overlay) {
    /* Recorre el arreglo de imágenes y crea las miniaturas */
    for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
        var image = images_1[_i];
        var newImage = document.createElement('img'); // Crea un nuevo <img>
        newImage.src = image; // Asigna la ruta
        newImage.alt = alts[image]; // Asigna el alt
        thumbBar.appendChild(newImage); // Añade la miniatura a la barra
        // Al hacer clic en una miniatura, cambia la imagen principal
        newImage.addEventListener('click', function (e) {
            var target = e.target;
            displayedImage.src = target.src;
            displayedImage.alt = target.alt;
        });
    }
    /* Botón para oscurecer/aclarar */
    btn.addEventListener('click', function () {
        var btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
            btn.setAttribute('class', 'light');
            btn.textContent = 'Aclarar';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        }
        else {
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Oscurecer';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
    });
}
