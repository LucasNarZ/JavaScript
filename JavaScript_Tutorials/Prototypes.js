const customPrototype = {
    greet(){
        return this.greeting + 'guys';
    }
}
//constructor function
function Greeting(term){
    this.greeting = term;
}

Greeting.prototype = customPrototype;
const hiGreet = new Greeting("Hi!")
console.log(hiGreet.__proto__)

const helloGreet = Object.create(customPrototype);
helloGreet.greeting = "Hello";
console.log(helloGreet.greet());

const heyGreet = {
    greeting: "hey"
}
Object.setPrototypeOf(heyGreet, customPrototype)
console.log(heyGreet.greet())
console.log(customPrototype.isPrototypeOf(heyGreet))