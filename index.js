let sidebarStyle = document.getElementById("mySidebar").style
let blurScreenStyle = document.querySelector(".blur-screen").style

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

    let myMap = new Map()
    myMap.set(0, 'two-items')
        .set(1, 'three-items')

    for (let item of items) {
        if (!itemsCount) {
            document.getElementById("portfolio").style.display = 'none'
            break
        } else if (myMap.has(itemsCount % 2)) {
            item.classList.remove('two-items', 'three-items')
            item.classList.add(`${myMap.get(itemsCount % 2)}`)
        }
    }
}

//other variant example
document.getElementById('openSidebar').onclick = openSidebar


function showInfo() {
    alert(this.parentNode.lastElementChild.textContent)
}

const infoButtons = document.querySelectorAll('.info')
infoButtons.forEach(function (el) {
    el.addEventListener('click', showInfo)
})