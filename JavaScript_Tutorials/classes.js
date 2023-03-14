class Animal{
    static planet = "earth";

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.speed = 0;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with a speed of ${this.speed}`);
    }
    stop(){
        this.speed = 0;
    }
    static compare(Velo1, Velo2){
        return Velo1 - Velo2;
    }
}
class rabbit extends Animal{
    hide(){
        console.log(`${this.name} is hiding`)
    }
    stop(){
        super.stop();
        this.hide();
    }
}
let Lion = new Animal("Lion", 10)
let Rabbit = new rabbit("Cueio", 5)
animal.run(15)
Rabbit.hide()
/*Os métodos estáticos são métodos que são da classe em si e não de uma instância,
nesse caso o método compare pode seer usado apenas com Animal.compare ou rabbit.compare,
mas não pode ser usado com Lion.compare, pois Lion é uma instância
*/