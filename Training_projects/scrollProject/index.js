const links = document.querySelectorAll(".links a[href^='#']")
links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); 
        let element = event.target;
        let id = element.getAttribute("href");
        let to = document.querySelector(id).offsetTop
        //window.scroll({
            //top: to,
            //behavior: "smooth",
        //})
        let interval = setInterval(() => (() => {
        let position = window.scrollY;
            if(position < to){
                window.scroll({
                    top: position + 1
                })
            }
            if(position == to){
                console.log("azsdad") 
                clearInterval(interval)
            }
        })(to), 1);
    })
})