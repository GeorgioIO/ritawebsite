const navigationLinks = document.querySelectorAll(".navigation-container ul li");
const burgerMenu = document.querySelector(".burger-menu");
const sideBar = document.querySelector(".sidebar")
const closeSideBarButton = document.querySelector(".close-sidebar-button")
const servicesCard = document.querySelectorAll(".services-cards-container .card");
const locationSwitchers = document.querySelectorAll(".location-switcher");
const sidebarLinks = document.querySelectorAll(".sidebar > .navigation-container > ul > li > a")
const upButton = document.querySelector(".up-button");


window.addEventListener("scroll" , () => {
    if(window.scrollY > 150)
    {
        upButton.style.display = "flex";
    }

    if(window.scrollY == 0)
    {
        upButton.style.display = "none";

    }
})

upButton.addEventListener("click" , () => {
    window.scroll({
        top : 0,
        behavior : 'smooth'
    });
})

sidebarLinks.forEach(link => [
    link.addEventListener("click" , () => {
        setTimeout(() => {
            sideBar.classList.remove("showSidebar");
            sideBar.classList.add("hideSidebar");
        } , 600)
    
        setTimeout(() => {
            sideBar.style.display = "none";
        }, 800)
    })
])

locationSwitchers.forEach(switcher => {
    switcher.addEventListener("click" , (event) => {
        let location = event.target.id;
        if(location === "ehdenRadio")
        {
            document.querySelector("#ehdenFrame").style.display = "block";
            document.querySelector("#mejdlayaFrame").style.display = "none";
        }
        else if(location === "mejdlayaRadio")
        {
            document.querySelector("#mejdlayaFrame").style.display = "block";
            document.querySelector("#ehdenFrame").style.display = "none";
        }
    })
})


servicesCard.forEach(card => {
    card.addEventListener("mouseover" , (event) => {
        let bgIcon = event.currentTarget.querySelector(".card-bgphoto");
        bgIcon.classList.remove("hideCardBg");
        bgIcon.classList.add("showCardBg");
    })

    card.addEventListener("mouseleave" , (event) => {
        let bgIcon = event.currentTarget.querySelector(".card-bgphoto");
        bgIcon.classList.remove("showCardBg");
        bgIcon.classList.add("hideCardBg");
    })
})

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