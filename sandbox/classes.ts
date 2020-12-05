interface CanTalk {
    talk(): string;
    test(): any;
}


class Person implements CanTalk {
    //protected name: string;
    //private age: number;

    constructor(protected name: string, public age: number) {
        //this.name = name;
        //this.age = age;
    }

    talk(): string {
        return 'bla bla bla';
    }
    test() {
        console.log("Run method test");
    }

    welcome () {
        console.log(`Welcome ${this.name}`);
    }

    isAdult() {
        if(this.age >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

class Vendor extends Person {
    advisor: string;

    constructor(name: string, age: number, advisor: string) {
        super(name, age);
        this.advisor = advisor;
    }

    welcome () {
        return `Good morning ${this.name}`;
    }
}

module.exports = {Vendor, Person};
