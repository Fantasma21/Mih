let currentImageIndex = 0;
const images = [
    'img/pc1png.png',
    'img/mm3.png',
    'img/mm4.png',
    'img/mm5.png',
    'img/mm6.png',
    'img/mm7.png',
    'img/mm9.png',
    'img/mm10.png',
    'img/mm11.png',
    'img/mm12.png',
    'img/mm13.png',
    'img/mm14.png',
    'img/mm15.png',
    'img/mm16.png',
    'img/mm17.png',
    'img/mm18.png',
    // Adicione o caminho das suas outras imagens aqui
];

function mostrarImagem(index) {
    const imageElement = document.getElementById('image');
    imageElement.src = images[index];
}

function avancar() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Volta para a primeira imagem
    }
    mostrarImagem(currentImageIndex);
}

function voltar() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Vai para a última imagem
    }
    mostrarImagem(currentImageIndex);
}