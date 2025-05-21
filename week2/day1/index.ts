// Abstract Classes and Static Methods

abstract class Shape {
  abstract calculateArea(): number;

  static validateDimension(value: number): number {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error("Dimension must be positive number");
    }
    return value;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = Shape.validateDimension(radius);
  }

  override calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  length: number;
  private width: number;

  constructor(length: number, width: number) {
    super();
    this.length = Shape.validateDimension(length);
    this.width = Shape.validateDimension(width);
  }

  override calculateArea(): number {
    return this.length * this.width;
  }
}

try {
  const circle = new Circle(5);
  const rectangle = new Rectangle(5, 5);

  console.log(rectangle.length);
  console.log(circle.calculateArea().toFixed(2));

  const invalidCircle = new Circle(-5);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
