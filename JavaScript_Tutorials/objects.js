let indent = {
    "Maria": 10,
    "João": 20,
    "Pedro": 30
}
//console.log(indent["Pedro"]);
indent["Duda"] = 11;
//console.log(indent["Duda"])
//console.log("Maria" in indent)
for(let person in indent){
    //console.log(person);
    //console.log(indent[person])
}
delete indent["Duda"];

function Person(name, age){
    this.name = name;
    this.age = age;
} ;
let pessoa = new Person("Mateus", 20)
console.log(pessoa)

alert(indent?.Nah)