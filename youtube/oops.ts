abstract class Car {
  protected brand: string;
  protected isEngineOn: boolean;
  protected speed: number;

  constructor(brand: string) {
    this.brand = brand;
    this.isEngineOn = false;
    this.speed = 0;
  }

  startEngine() {
    this.isEngineOn = true;
    console.log(this.brand, "has started");
  }

  abstract accelerate(): void;
  abstract accelerate(speed: number): void;
  abstract brake(): void;
}

class ManualCar extends Car {
  private currGear: number;
  constructor(brand: string) {
    super(brand);
    this.currGear = 0;
  }

  shiftGear(gear: number) {
    this.currGear = gear;
    console.log("gear has shifted to", this.currGear);
  }

  override accelerate(): void;
  override accelerate(speed: number): void;
  override accelerate(speed?: number): void {
    const delta = speed ?? 20;
    this.speed += delta;
    console.log(`Accelerated by ${delta} and the speed is ${this.speed}`);
  }
  override brake(): void {
    this.speed -= 20;
    console.log(`Speed is reduced by 20 and now the speed is ${this.speed}`);
  }
}

class ElectricCar extends Car {
  private battery: number;

  constructor(brand: string) {
    super(brand);
    this.battery = 100;
  }

  chargeBattery(){
    this.battery = 100;
    console.log(`${this.brand} battery has fully charged`)
  }

  override accelerate(): void;
  override accelerate(speed: number): void;
  override accelerate(speed?: number): void {
    const delta = speed ?? 30
    this.battery-= 10
    this.speed+=delta
    console.log(`${this.brand} has been accelerated to ${delta} and the current speed is ${this.speed}`)
  }
  override brake(): void {
    this.speed -= 30
    console.log(`braking ${this.speed}`)
  }
}


const manualCar: Car = new ManualCar("Ford");
manualCar.startEngine()
manualCar.accelerate()
manualCar.accelerate(50)
manualCar.brake()

const electricCar: Car = new ElectricCar("Tesla")
electricCar.startEngine()
electricCar.accelerate()
electricCar.accelerate(60)
electricCar.brake()