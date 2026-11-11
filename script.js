const menu = document.getElementById('menu')
const dropdown = document.querySelector('div.menu-fechado')
const overlay = document.querySelector('.overlay')
const linksFocaveis = dropdown.querySelectorAll('a')
const primeiroElemento = menu
const ultimoElemento = linksFocaveis[linksFocaveis.length - 1]
const icon = document.getElementById('icon')

const valores = document.querySelectorAll('.stat-value')

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    iniciarContagem(buscarDados())
}

// Abre e fecha o menu
menu.addEventListener('click', () => {
    if (menuEstaAberto()) {

        fecharMenu()
    } else {

        abrirMenu()
    }
})

//Fecha o menu pela teclha "ESC"
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuEstaAberto()) {
        fecharMenu()
        menu.focus()
    }
    if (menuEstaAberto()) {

        if (e.key === 'Tab' && !e.shiftKey) {
            if (document.activeElement === ultimoElemento) {
                e.preventDefault()
                primeiroElemento.focus()
            }
        }

        if (e.key === 'Tab' && e.shiftKey) {
            if (document.activeElement === primeiroElemento) {
                e.preventDefault()
                ultimoElemento.focus()
            }
        }
    }
})

function abrirMenu() {
    dropdown.classList.add('menu-aberto')

    icon.setAttribute('src', 'icons/icon-close.svg')
    overlay.classList.add('over-ativo')
    menu.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-label', 'close the menu')

    document.body.classList.add('no-scroll')
}

function fecharMenu() {
    dropdown.classList.remove('menu-aberto')

    icon.setAttribute('src', 'icons/icon-menu.svg')
    overlay.classList.remove('over-ativo')
    menu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-label', 'open the menu')

    document.body.classList.remove('no-scroll')
}

function menuEstaAberto() {
    return dropdown.classList.contains('menu-aberto')
}

async function buscarDados() {
    const response = await fetch('stats.json')
    if (!response.ok) throw new Error("Erro na resposta: " + response.status);

    const infoStats = await response.json()
    return infoStats
}
async function iniciarContagem(dados) {
    try {
        const infoStats = await dados

        valores.forEach((metric, indice) => {
            let baseValue = 0
            const { target, step, sufixo, interval } = infoStats[indice]
            const contador = setInterval(() => {
                baseValue += step
                if (baseValue >= target) {
                    baseValue = target
                    clearInterval(contador)
                }
                if (Number.isInteger(baseValue)) {
                    metric.textContent = `${baseValue.toLocaleString('en-US')}${sufixo}`
                } else {
                    metric.textContent = `${baseValue.toFixed(1)}${sufixo}`
                }
            }, interval);
        })

    } catch (error) {
        console.error(error);
        
    }
}
