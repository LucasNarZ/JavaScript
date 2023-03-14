let display = "";
function addToDisplay(num){
    let number = num.innerText;
    display += number;
    document.getElementById("display").innerText = display;
}
function result(){
    try{
        document.getElementById("display").innerText = eval(display);
        display = "";
    }
    catch(err){
        display = "Syntax Error"
        document.getElementById("display").innerText = display;
        display = ""
    }
}
function clean(){
    display = 0;
    document.getElementById("display").innerText = display;
}