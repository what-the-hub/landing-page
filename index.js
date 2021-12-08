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

    if (!(itemsCount % 2)){
        items.forEach(element => element.classList.add('two-items'))
    }
    if (!(itemsCount % 3)){
        items.forEach(element => element.classList.add('three-items'))
    }
    if (!itemsCount){
        document.getElementById("portfolio").style.display = 'none'
    }

}
//other variant example
document.getElementById('openSidebar').onclick = openSidebar
