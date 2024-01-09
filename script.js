function rotateImages() {
    // Obtenha as imagens
    const images = document.querySelector('aside').querySelectorAll('.image');
  
    // Obtenha a imagem ativa
    let activeImage = images[0];
  
    // Alterne a classe 'active'
    for (const image of images) {
      image.classList.toggle('active');
    }
  
    // Ative a próxima imagem
    activeImage = images[(activeImage.index + 1) % images.length];
  
    // Altere a posição da imagem ativa
    activeImage.style.zIndex = 1;
  
    // Defina um temporizador para chamar a função novamente
    setTimeout(rotateImages, 3000);
  }
  