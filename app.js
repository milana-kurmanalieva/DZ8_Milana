const color = document.querySelector('#square')
function newColor (){
    let newBackground = '#'
    let colorText = '0123456789ABCDEF'

    for (let i = 0; i < 6; i++){
        newBackground = newBackground + colorText[Math.floor(Math.random() * 16)]
        color.style.background = newBackground
        document.querySelector('#text').innerHTML = newBackground
    }
}
color.onclick = () => newColor()