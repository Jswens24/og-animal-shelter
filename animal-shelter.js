const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger;
    }
    greet() {
        console.log(`Hi, i'm ${this.name} the ${this.species}`);
    }
    feed() {
        this.hunger -= 20;
        console.log('Yum, I love food');
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger);
        this.food = 'fish';
    }
    greet() {
        console.log(`Meow, i'm ${this.name} the ${this.species}`);
    }
    feed() {
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}`);
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger);
        this.food = 'kibble';
    }
    greet() {
        console.log(`Woof, i'm ${this.name} the ${this.species}`);
    }
    feed() {
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}`);
    }
}

class AnimalShelter {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal)
    }
    adopt(animal) {
        this.animals.map((el, index) => {
            if (animal.name === el.name) {
                animals.splice(index, 1)
            }
        })
    }
    getAnimalsBySpecies(species) {
        return this.animals.filter((el, index) => el.species === species)
    }
}

const shelter = new AnimalShelter()

animalData.map((el, index) => {
    const hunger = el.hunger ? el.hunger : 50;
    if (el.species === 'cat') {
        const cat = new Cat(el.name, el.species, el.color, hunger)
        shelter.addAnimal(cat)
    } else if (el.species === 'dog') {
        const dog = new Dog(el.name, el.species, el.color, hunger)
        shelter.addAnimal(dog)
    } else {
        const animal = new Animal(el.name, el.species, el.color, hunger)
        shelter.addAnimal(animal)
    }

})


const betty = new Dog('Betty', 'Black')
const kobuk = new Cat('Kobuk', 'Black')



shelter.animals.forEach(el => {
    el.greet()
    el.feed()
})