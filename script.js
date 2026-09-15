let menu = document.getElementById('menu')
let dropdown = document.querySelector('div.menu-fechado')
let overlay = document.querySelector('.overlay')

menu.addEventListener('click', (e) =>{
    dropdown.classList.toggle('menu-aberto')
    if (dropdown.classList.contains('menu-aberto')) {
        menu.setAttribute('src', 'icons/icon-close.svg')
        overlay.classList.add('over-ativo')
    }else{
        menu.setAttribute('src', 'icons/icon-menu.svg')
        overlay.classList.remove('over-ativo')
        
    }
})

