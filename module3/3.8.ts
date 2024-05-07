{
    //------->polymorphism

    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours per day`);
        }

    };

    class sleepingPeople extends Person {
        getSleep() {
            console.log(`I am sleep for 7 hours for per day`);
        }
    };

    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours for per day`);
        }
    };

    const getSleepHours = (param: Person) => {
        param.getSleep();
    }

    const Person1 = new Person();
    const Person2 = new sleepingPeople();
    const Person3 = new Developer();

    getSleepHours(Person2);


    // reptengle

    class Shape {
        getArea() {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        };
        getArea(): number {
            return Math.PI * this.radius * this.radius
        };
    };

    //-------reactangle

    class Reactangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height
            this.width = width;
        };
        getArea(): number {
            return this.height * this.width;
        }
    }
    const getSleepArea = (param: Shape) => {
        console.log(param.getArea());
    }

    const Shape1 = new Shape();
    const Shape2 = new Circle(10);
    const Shape3 = new Reactangle(10, 20);

    getSleepArea(Shape1);
    getSleepArea(Shape2);
    getSleepArea(Shape3);







    //
}