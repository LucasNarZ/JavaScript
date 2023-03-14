let plus = document.querySelectorAll(".plus-btn");
let minus = document.querySelectorAll(".minus-btn"); 
plus.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let question = e.currentTarget.parentElement;
        question.classList.toggle("question-open")
        question.classList.toggle("question-close")
    });
});
minus.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let questio = e.currentTarget.parentElement;
        questio.classList.toggle("question-open")
        questio.classList.toggle("question-close")
    });
});
