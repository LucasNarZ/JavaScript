const person = {
    fullName: function (city, country){
        return this.nome + " " + this.lastName + " " + city  + " " + country
    }
}
const person1 = {
    nome:"Lukas",
    lastName: "Arthur"
}
const person2 = {
    nome: "Lucas",
    lastName: "Narloch",
}
console.log(person.fullName.call(person1))
console.log(person.fullName.apply(person2, ["Curitiba", "Brazil"]))
/*In an object method, this refers to the object.

Alone, this refers to the global object.

In a function, this refers to the global object.

In a function, in strict mode, this is undefined.

In an event, this refers to the element that received the event.

Methods like call(), apply(), and bind() can refer this to any object.*/
