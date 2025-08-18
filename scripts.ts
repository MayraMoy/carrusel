(() => {
  const displayedImage = document.querySelector<HTMLImageElement>('.displayed-img');
  const thumbBar = document.querySelector<HTMLDivElement>('.thumb-bar');
  const btn = document.querySelector<HTMLButtonElement>('button');
  const overlay = document.querySelector<HTMLDivElement>('.overlay');

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

  if (displayedImage && thumbBar && btn && overlay) {
    for (const image of images) {
      const newImage = document.createElement('img');
      newImage.src = image;
      newImage.alt = alts[image];
      thumbBar.appendChild(newImage);

      newImage.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLImageElement;
        displayedImage.src = target.src;
        displayedImage.alt = target.alt;
      });
    }

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
})();

