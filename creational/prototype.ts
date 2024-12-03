abstract class Shape {
  abstract print(): void;
  abstract clone(): Shape;
}

class Circle extends Shape {
  color: string;
  constructor(color: string) {
    super();
    this.color = color;
  }
  print(): void {
    console.log(`Circle with color ${this.color}`);
  }
  clone(): Shape {
    console.log(`cloning ${this.color} circle`);
    return new Circle(this.color);
  }
}

function circleClient() {
  const greenCircle = new Circle("green");
  const blueCircle = new Circle("green");

  const greenClone = greenCircle.clone();
  const blueClone = blueCircle.clone();

  greenCircle.print();
  blueCircle.print();
  greenClone.print();
  blueClone.print();
}

circleClient()