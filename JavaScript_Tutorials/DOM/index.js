const body = document.body;
let div = document.createElement("div");
let strong = document.createElement("strong")
div.innerText = "Bah";// coloca texto na div
div.innerHTML += "<strong>Banana</strong>";//coloca html na div
strong.innerText = "nie";
body.append(div);
body.append(strong);
let a = document.querySelector("#helloWorld1")
let b = document.querySelector("#helloWorld2")
let c = document.querySelector("#helloWorld3")
a.innerText = "newText";
b.innerText = "dasda";
c.innerText = "asdada";
let div2 = document.querySelector("p");
let div3 = document.querySelector("#container");
let div4 = div3.querySelector("p");
console.log(div2);//Hello World1
console.log(div4);//Hello World2
div2.remove();
console.log(div3.id)
div3.id = "nah";
console.log(div3.id)
div3.setAttribute("id", "banana");
console.log(div3.id)
div3.removeAttribute("id")
console.log(div3.id)
div3.style.backgroundColor = "blue";
div3.classList.add("banana")
div.classList.remove("banana")
let button = document.createElement("button");
button.innerText = "click Me!";
body.append(button);
let ShowMessage = (e) => {
    console.log("NIE")
}
button.addEventListener("click", ShowMessage)
