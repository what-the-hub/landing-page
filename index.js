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
    console.log(elem)
    console.log(elem.parentNode.id)
    let parentId = elem.parentNode.id
    document.getElementById(parentId).remove()
    let temp = document.querySelector(".cards-wrapper")
    let item = document.querySelector(".item")
    let itemsCount = temp.childElementCount
    if (itemsCount % 2){
        //item.style.width = '49.5%'
    }



}
//other variant example
document.getElementById('openSidebar').onclick = openSidebar
