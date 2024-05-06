{
//
// OOP class

class Animal {
//    public name: string;
//    public species: string;
//    public sound: string;


    //parameter properties

    constructor(public name: string,public species: string, public sound: string){
        //inesial 
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("German Shepard Bhai", "Dog", "Ghow Ghew")
const cat = new Animal("Shepard Bhai", "cat", "meaw meaw");
cat.makeSound();





//
}