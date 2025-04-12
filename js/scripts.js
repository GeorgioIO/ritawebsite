const navigationLinks = document.querySelectorAll(".navigation-container ul li");
const burgerMenu = document.querySelector(".burger-menu");
const sideBar = document.querySelector(".sidebar")
const closeSideBarButton = document.querySelector(".close-sidebar-button")

navigationLinks.forEach(link => {
    link.addEventListener("mouseover" , (event) => {
        let icon = event.currentTarget.querySelector("img");
        icon.classList.remove("hideIcon");
        icon.classList.add("showIcon");


        link.classList.add("hovered");

    })

    link.addEventListener("mouseleave" , (event) => {
        let icon = event.currentTarget.querySelector("img");
        icon.classList.remove("showIcon");
        icon.classList.add("hideIcon");


    })
})


closeSideBarButton.addEventListener("click" , () => {
    sideBar.classList.remove("showSidebar");
    sideBar.classList.add("hideSidebar");

    setTimeout(() => {
        sideBar.style.display = "none";
    }, 300)
}) 

burgerMenu.addEventListener("click" , () => {
    sideBar.style.display = "flex";
    
    sideBar.classList.remove("hideSidebar");
    sideBar.classList.add("showSidebar");
})