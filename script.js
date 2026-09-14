let menu = document.getElementById('menu')
let dropdown = document.querySelector('div.menu-fechado')
menu.addEventListener('click', (e) =>{
    dropdown.classList.toggle('menu-aberto')
    if (dropdown.classList.contains('menu-aberto')) {
        menu.setAttribute('src', 'icons/icon-close.svg')
    }else{
        menu.setAttribute('src', 'icons/icon-menu.svg')
        
    }
})

