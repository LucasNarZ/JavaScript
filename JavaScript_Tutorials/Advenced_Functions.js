let func = () =>{
    console.log("this is a normal function")
}
function sum(a, b){
    //obs:doesn't work with arrow functions
    return arguments[0] + arguments[1];
} 
console.log(sum(4, 6))

;(() => {
    console.log("Hello")
})();

