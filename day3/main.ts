// the code interacts with objects as Shape, but the runtime behavious depends on the actual
//  type(Circle or Rectangle). This is  called runtime polymorphism

class Shape {
  calculateArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  override calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  override calculateArea(): number {
    return this.width * this.height;
  }
}

const shape: Shape = new Circle(5);
console.log(shape.calculateArea());

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach((shape) => {
  console.log(`Area: ${shape.calculateArea()}`);
});


// Insight: The introduce method in Animal calls makeSound, which is overridden in subclasses.
// This shows how polymorphism allows base class methods to delegate to subclass-specific behavior.

class Animal {
  makeSound(): void {
    console.log('default sound')
  }

  introduce(): void {
    console.log("I am an animal, and I say:");
    this.makeSound()
  }
}

class Dog extends Animal {
  override makeSound(): void {
    console.log("bhow bhow")
  }
}

const dog = new Dog()
dog.introduce()


