let menu = document.getElementById('menu')
let dropdown = document.querySelector('div.menu-fechado')
let overlay = document.querySelector('.overlay')
// Abre e fecha o menu
menu.addEventListener('click', (e) =>{

    if (menuEstaAberto()){

        fecharMenu()
    }else{

        abrirMenu()
    }

})
//Fecha o menu pela teclha "ESC"
document.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape' && dropdown.classList.contains('menu-aberto')) {
        fecharMenu()
        menu.focus()
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