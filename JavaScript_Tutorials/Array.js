const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myBoys = ["Emil", "Tobias", "Linus"];
const points = [40, 100, 1, 5, 25, 10];

fruitsStr = fruits.join(" * ");//transforma o array em uma string que contem todos os itens e
//são separadas por " * "

fruits.pop();//Remove o último elemento da array

fruits.push("Mongo");//Adiciona um elemento a array

let fruit = fruits.shift();//remove o primeiro item de uma array

let length = fruits.unshift("Banana");//adiciona nos elementos no começo da array

const newArray = fruits.concat(myBoys);//Junta 2 arrays em uma só

fruits.splice(2, 0, "Lemon", "Kiwi");// na posição 2 adiciona 2 elementos
fruits.splice(2, 1);// na posição 2 remove 1 elemento 

const citrus = fruits.slice(1);

fruits.sort().reverse();// coloca em ordem decresente ou analfabeta

points.sort(function(a, b){return a - b});

const numbers = [45, 4, 9, 16, 9, 25];
const ewNumbers = new Array();
const newNumbers = numbers.map(function (num){
    return num * 2;
})
//Pega uma array e aplica uma função nessa array fazendo uma nova array

numbers.forEach(function (num){
    ewNumbers.push(num * 2);
})
//chama uma função para cada elemento da array, sendo o priemiro argumento esse elemento

const num = numbers.filter(function (num){
    if (num > 10){
        return num;
    }
})
//filtra os valores para que apenas valores que passem de uma condição entrem na nova array

const sum = numbers.reduce(function(total, num){
    return total + num;
})
//"total é o valor inicial ou o valor retornado anteriormente e "num é o elemento atual"

const allOdds = numbers.every(function (num){
    return num % 2 != 0;
})
// passa por todos os elemtos e se todos retornarem true então, allOdds será true

const someOdd = numbers.some(function (num){
    return num % 2 != 0;
})
//passa por todos os valores e se um retornar true então, someOdd será true

const index = numbers.indexOf(9);
const lastIndex = numbers.lastIndexOf(9);

const find  = numbers.find(function (num){
    return num < 10;
})

find  = numbers.findIndex(function (num){
    return num < 10;
})

const veri = numbers.include(45)
