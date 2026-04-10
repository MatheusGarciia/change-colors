function corRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b, rgb: `rgb(${r}, ${g}, ${b})` };
}

function corEscura({ r, g, b }) {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
}

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.span-color');
const mainColor = document.querySelector('#main-color');

btn.addEventListener('click', () => {
    const cor = corRGB();

    mainColor.style.backgroundColor = cor.rgb;
    colorSpan.textContent = cor.rgb;

    mainColor.style.color = corEscura(cor) ? 'white' : 'black';
});