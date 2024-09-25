document.addEventListener("DOMContentLoaded", function() {
  // Animation sur le titre principal
  const title = document.querySelector('header h1');
  title.style.opacity = '0';
  setTimeout(() => {
    title.style.transition = 'opacity 2s ease-in-out';
    title.style.opacity = '1';
  }, 500);

  // Effet de type "Matrix" pour les headers de section
  const headers = document.querySelectorAll('h2');
  headers.forEach((header, index) => {
    header.style.opacity = '0';
    setTimeout(() => {
      header.style.transition = 'opacity 1s ease-in-out';
      header.style.opacity = '1';
    }, 1000 + (index * 200));
  });

  // Animation sur les "pre" blocs de code
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach((block, index) => {
    block.style.transform = 'scale(0.9)';
    block.style.opacity = '0';
    setTimeout(() => {
      block.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      block.style.transform = 'scale(1)';
      block.style.opacity = '1';
    }, 1200 + (index * 150));
  });
});
