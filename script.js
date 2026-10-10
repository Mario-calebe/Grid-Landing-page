const menu = document.getElementById('menu')
const dropdown = document.querySelector('div.menu-fechado')
const overlay = document.querySelector('.overlay')
const linksFocaveis = dropdown.querySelectorAll('a')
const primeiroElemento = linksFocaveis[0]
const ultimoElemento = linksFocaveis[linksFocaveis.length - 1]
const icon = document.getElementById('icon')

const valores = document.querySelectorAll('.stat-value')

if (!matchMedia('(prefers-reduced-motion: reduce)').matches
) {
    
    fetch('stats.json').then((response) => {
        if (response.ok) {
            return response.json()
        }else{
            throw new Error("Erro na resposta");
        } 
    })
    .then((infoStats) =>{
        //Contagem das estatisticas apartir do zero
        valores.forEach((metric,indice) =>{
            let baseValue = 0
            const {target,step,sufixo,interval} = infoStats[indice]
            const contador = setInterval(() => {
                baseValue += step
                if (baseValue >= target) {
                    baseValue = target
                    clearInterval(contador)
                }
                if (Number.isInteger(baseValue)) {
                    metric.textContent = `${baseValue.toLocaleString('en-US')}${sufixo}`
                    
                }else{
                    metric.textContent = `${baseValue.toFixed(1)}${sufixo}`
                }
            }, interval);
        })
        
    }) 
    .catch((erro) => {
            console.log(erro);
        });
}


// Abre e fecha o menu

menu.addEventListener('click', () =>{
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
    
    icon.setAttribute('src', 'icons/icon-close.svg')
    overlay.classList.add('over-ativo')
    menu.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-label', 'opened menu')
}

function fecharMenu() {
    dropdown.classList.remove('menu-aberto')
    
    icon.setAttribute('src', 'icons/icon-menu.svg')
    overlay.classList.remove('over-ativo')
    menu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-label', 'closed menu')
}

function menuEstaAberto() {
    return dropdown.classList.contains('menu-aberto')
}