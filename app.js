const colors = ['green', 'red', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black', 'white', 'cyan', 'magenta', 'lime', 'maroon', 'navy', 'olive', 'teal', 'violet', 'indigo', 'gold', 'silver', 'bronze', 'coral', 'crimson', 'fuchsia', 'khaki', 'lavender', 'salmon', 'tan', 'turquoise']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber()
    const mainColor = document.querySelector('#main-color')

    mainColor.style.backgroundColor = colors[randomNumber]
    
    let texto = colors[randomNumber]
    color.textContent = texto.charAt(0).toUpperCase() + texto.slice(1)
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}