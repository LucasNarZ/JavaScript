let tasks = new Array();
let body = document.body;
let inputBar = document.querySelector("input");
let main = document.querySelector("#tasks");


let addTask = () => {
    inputBar.focus()
    if(inputBar.value.length === 0){
        return null;
    }
    let checkBox = document.createElement("input");
    let deleteButton = document.createElement("button");
    let taskText = document.createElement("div");
    let task = document.createElement("div");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("checkbox");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => removeTask(task))
    taskText.innerText = inputBar.value;
    task.style.display = "flex";
    task.style.justifyContent = "space-between";
    task.classList.add("task");
    task.append(checkBox);
    task.append(taskText);
    task.append(deleteButton);
    main.append(task);
    tasks.push(taskText.innerText);
    inputBar.value = "";
};

let removeTask = (task) => {
    task.remove();
};

let modifyTask = () => {

};

let clear = () => {
    main.innerHTML = "";

};

let selectAll = () => {
    let checkboxes = document.querySelectorAll(".checkbox");
    for(let index = 0;index < checkboxes.length;index++){
        checkboxes[index].checked = true;
    }
}

document.querySelector("#clearButton").addEventListener("click", clear);