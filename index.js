const sidebarStyle = document.getElementById("mySidebar").style
const blurScreenStyle = document.querySelector(".blur-screen").style
const modal = document.getElementById('myModal')
const closeModalBut = document.getElementById('close-modal')
const infoButtons = document.querySelectorAll('.info')


const openSidebar = () => {
    sidebarStyle.display = 'block'
    sidebarStyle.position = 'fixed'
    sidebarStyle.boxShadow = 'rgb(0 0 0 / 20%) 5px 0px 10px'
    blurScreenStyle.display = 'block'
    document.getElementById('close-btn').style.display = 'block'
}

const closeSidebar = () => {
    sidebarStyle.display = 'none'
    blurScreenStyle.display = 'none'
}


const deleteItem = (elem) => {
    document.getElementById(elem.parentNode.id).remove()

    const items = document.querySelectorAll('.item')
    const itemsCount = items.length

    const removeClasses = (element) => {
        return element.classList.remove('two-items', 'three-items')
    }

    if (!itemsCount) {
        document.getElementById("portfolio").style.display = 'none'
        return 0
    } else {
        let myMap = new Map()
        myMap.set(2, 'two-items')
            .set(3, 'three-items')

        myMap.forEach((value, key) => {
            if (itemsCount % key === 0) {
                items.forEach(item => {
                    removeClasses(item)
                    item.classList.add(value)
                })
            }
        })
    }
}

document.getElementById('openSidebar').onclick = openSidebar


function showInfo(event) {
    const par = document.createElement('p')
    const text = event.target.parentNode.lastElementChild.textContent
    par.innerText = text
    modal.firstElementChild.appendChild(par)
    modal.style.display = 'block'

}

function modalClear() {
    modal.style.display = 'none'
    modal.firstElementChild.lastElementChild.remove()
}

infoButtons.forEach(function (el) {
    el.addEventListener('click', showInfo)
})

closeModalBut.onclick = modalClear
window.onclick = (event) => {
    if (event.target === modal) {
        modalClear()
    }
}