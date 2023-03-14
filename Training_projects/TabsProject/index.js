let btns = document.querySelectorAll(".btn-container");
let content = document.querySelectorAll(".content")
let buttons = document.querySelectorAll(".tab-btn")
btns.forEach(btn => {
    btn.addEventListener("click" , (e) => {
        let id = e.target.dataset.id
        buttons.forEach(a => {
            a.classList.remove("active")
        })
        e.target.classList.add("active")
        

        content.forEach(container => {
            if(container.id == id){
                container.classList.add("active")
            }else{
                container.classList.remove("active")
            }
        })
    })
})