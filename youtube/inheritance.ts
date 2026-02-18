class Parent{
    startEngine(){
        console.log("Engine started")
    }
}

class Child extends Parent{
    shiftGear(){
        console.log("Gear shifted")
    }
}

const child = new Child();
child.startEngine()