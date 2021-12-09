let sidebar = document.getElementById("mySidebar").style
let blurScreen = document.querySelector(".blur-screen").style

const openSidebar = () => {
    sidebar.display = 'block'
    sidebar.position = 'fixed'
    sidebar.boxShadow = 'rgb(0 0 0 / 20%) 5px 0px 10px'
    blurScreen.display = 'block'
    document.getElementById('close-btn').style.display = 'block'
}

const closeSidebar = () => {
    sidebar.display = 'none'
    blurScreen.display = 'none'
}