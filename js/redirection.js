document.addEventListener("DOMContentLoaded" , () => {
    let timer = 10;
    setInterval(() => {
        let redirectionTimer = document.querySelector(".redirection-timer");

        if(redirectionTimer.innerHTML == "0")
        {
            location.href = "index.html";
        }
        else
        {            
            redirectionTimer.innerHTML = timer;
            timer--;
        }

    }, 1000)
})