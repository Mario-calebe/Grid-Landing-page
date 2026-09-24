const menu = document.getElementById('menu')
const dropdown = document.querySelector('div.menu-fechado')
const overlay = document.querySelector('.overlay')
const linksFocaveis = dropdown.querySelectorAll('a')
const primeiroElemento = linksFocaveis[0]
const ultimoElemento = linksFocaveis[linksFocaveis.length - 1]

const valores = document.querySelectorAll('.stat-value')
const infoStats = [
    {
        target: 2.4,
        step: 0.1,
        sufixo: 'M',
        interval: 70,
    },
    {
        target: 1284,
        step: 2,
        sufixo: '',
        interval: 1,
    },
    {
        target: 38,
        step: 0.2,
        sufixo: 'K',
        interval: 10,
    },
    {
        target: 3.1,
        step: 0.12,
        sufixo: 'x',
        interval:97,
    },
]
// Abre e fecha o menu
menu.addEventListener('click', (e) =>{
    
    if (menuEstaAberto()){
        
        fecharMenu()
    }else{
        
        abrirMenu()
    }
    
})

//Contagem das estatisticas apartir do zeroa

valores.forEach((metric,indice) =>{
    // infoStats[indice].target
    let baseValue = 0
    let contador = setInterval(() => {
        baseValue += infoStats[indice].step
        if (Number.isInteger(baseValue)) {
            metric.textContent = `${baseValue.toLocaleString('en-US')}${infoStats[indice].sufixo}`

        }else{
            metric.textContent = `${baseValue.toFixed(1)}${infoStats[indice].sufixo}`
        }

        if (baseValue >= infoStats[indice].target) {
            clearInterval(contador)
        }
    }, infoStats[indice].interval);
})

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