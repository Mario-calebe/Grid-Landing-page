let menu = document.getElementById('menu')
let dropdown = document.querySelector('div.menu-fechado')
let overlay = document.querySelector('.overlay')
let linksFocaveis = dropdown.querySelectorAll('a')
let primeiroElemento = linksFocaveis[0]
let ultimoElemento = linksFocaveis[linksFocaveis.length - 1]
let valores = document.querySelectorAll('.stat-value')

// Abre e fecha o menu
menu.addEventListener('click', (e) =>{

    if (menuEstaAberto()){

        fecharMenu()
    }else{

        abrirMenu()
    }

})
//Contagem das estatisticas apartir do zeroa
let twoMilion = 0
let oneThousand = 0
let thirtyThousand = 0
let threeTimes = 0

let firstValue = setInterval(() => {
    twoMilion += 0.1
    valores[0].textContent = `${twoMilion.toFixed(1)}M`

    if (twoMilion >= 2.4) {
        clearInterval(firstValue)
    }
}, 70);

let secondValue = setInterval(() => {
    oneThousand += 2
    valores[1].textContent = `${oneThousand.toLocaleString('en-US')}`
    
    if (oneThousand >= 1284) {
        clearInterval(secondValue)
    }
}, 3.5);

let thirdValue = setInterval(() => {
    thirtyThousand += 0.2
    valores[2].textContent = `${thirtyThousand.toFixed(0)}K`

    if (thirtyThousand >= 38) {
        clearInterval(thirdValue)
    }
}, 14);

let fourthValue = setInterval(() => {
    threeTimes += 0.12
    valores[3].textContent = `${threeTimes.toFixed(1)}x`

    if (threeTimes >= 3.1) {
        clearInterval(fourthValue)
    }
}, 97);

//Fecha o menu pela teclha "ESC"
document.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape' && dropdown.classList.contains('menu-aberto')) {
        fecharMenu()
        menu.focus()
    }
    
    if (e.key === 'Tab' && !e.shiftKey ) {
        if (document.activeElement === ultimoElemento) {
            e.preventDefault()
            primeiroElemento.focus()
        }        
    }

    if(e.key === 'Tab' && e.shiftKey){
        if (document.activeElement === primeiroElemento) {
            e.preventDefault()
            ultimoElemento.focus()
        }
    } 
})

function abrirMenu() {
    dropdown.classList.add('menu-aberto')
    
    menu.setAttribute('src', 'icons/icon-close.svg')
    overlay.classList.add('over-ativo')
    menu.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-label', 'opened menu')
}

function fecharMenu() {
    dropdown.classList.remove('menu-aberto')
    
    menu.setAttribute('src', 'icons/icon-menu.svg')
    overlay.classList.remove('over-ativo')
    menu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-label', 'closed menu')
}

function menuEstaAberto() {
    return dropdown.classList.contains('menu-aberto')
}

[...linksFocaveis].forEach((link, indice) => {
  console.log(indice, link.textContent.trim(), link)
})