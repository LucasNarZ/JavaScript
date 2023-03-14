let showContent = () => {
    content.classList.toggle("modalContentOff");
    overlay.classList.toggle("overlayOff");
    content.classList.add("modalContentOn");
    overlay.classList.add("overlayOn");
}

let Close = () => {
    content.classList.remove("modalContentOn");
    overlay.classList.remove("overlayOn");
    content.classList.add("modalContentOff");
    overlay.classList.add("overlayOff");
}

let content = document.querySelector(".modalContent");
let overlay = document.querySelector(".overlay");

let buttonOpen = document.querySelector(".buttonOpen");
buttonOpen.addEventListener("click", showContent);

let closeButton = document.querySelector(".close");
closeButton.addEventListener("click", Close)

