import { Element } from "./createElementHTML.js"

const fortuneCookiephrases = [
    "fortune cookie phrases",
    "I didn't come this far. to only come this far. ...",
    "Vulnerability sounds like faith. and looks like courage. ...",
    "And into the forest I go, to lose my mind and find my soul. ...",
    "Do it scared. ...",
    "Look how far you've come.",
    "Each time you break your own. ...",
    "Sitting in silence with you."
]

function startScreen () {

    const h1 = new Element(main, 'h1')
    h1.textContent = 'Qual é a sua sorte de hoje?'
    
    const p = new Element(main, 'p')
    p.textContent = 'Abra o biscoito e descubra!'
    
    const img =  new Element(main, 'img', 'imgCooking')
    img.src = './img/cooking.png'  
    
    screenChange()
}
function endScreen () {
    let randomIndex = Math.floor(Math.random() * fortuneCookiephrases.length)

    const h1 = new Element(main, 'h1')
    h1.textContent = 'Aqui está a sua sorte de hoje:'

    const div = new Element(main,'div','luckyPhrase')
    const p = new Element(div, 'p')
    p.textContent = fortuneCookiephrases[randomIndex]

    const img = new Element(main, 'img', 'imgOpenedCookie')
    img.src = './img/opened-cookie.png'

    //button reset 
    new Element(main, 'div','buttonReset')
}
function screenChange(){
    
        const imgCooking = document.querySelector('.imgCooking')

    imgCooking.addEventListener('click', () => {
        main.innerHTML = ''
        endScreen()
        const buttonReset = document.querySelector('.buttonReset')
        buttonReset.addEventListener('click', () => {
            main.innerHTML = ''
            startScreen()
        })
    })  
}
const body = document.body
const main = new Element(body, 'main')
startScreen()
