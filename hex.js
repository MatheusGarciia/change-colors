const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){

    let hexColor = '#'

    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = hexColor
    color.textContent = hexColor
    
    if (corEscura(hexColor)) {
        mainColor.style.color = 'white'
    } else {
        mainColor.style.color = 'black'
    }

})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

function corEscura(hex){

    hex = hex.replace('#', '')

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 128
}