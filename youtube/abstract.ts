// interface PaymentGateway {
//     processPayment(amount: number): Promise<boolean>;
// }

// class PayPalGateway implements PaymentGateway {
//     async processPayment(amount: number): Promise<boolean> {
//         console.log(`Processing PayPal payment of $${amount}`);
//         return true;
//     }
// }

// class StripeGateway implements PaymentGateway {
//     async processPayment(amount: number): Promise<boolean> {
//         console.log(`Processing Stripe payment of $${amount}`);
//         return true;
//     }
// }

// class PaymentProcessor {
//     private gateway: PaymentGateway;
//     constructor(gateway: PaymentGateway) {
//         this.gateway = gateway;
//     }

//     async makePayment(amount: number): Promise<void> {
//         const success = await this.gateway.processPayment(amount);
//         if (success) {
//             console.log("Payment successful");
//         } else {
//             console.log("Payment failed");
//         }
//     }
// }

// const paypalProcessor = new PaymentProcessor(new StripeGateway());

// paypalProcessor.makePayment(60)

interface Car {
  startEngine(): boolean;
  brake(speed: number): void;
  accelerate(speed: number): void;
}

class SportCar implements Car {
  private speed: number;
  private isEngineOn: boolean;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.isEngineOn = false;
    this.speed = 0;
  }

  startEngine(): boolean {
    this.isEngineOn = true;
    console.log(`${this.name} has started`);
    return true;
  }

  accelerate(speed: number): void {
    if (this.isEngineOn) {
      this.speed += speed;
      console.log("Speed has been increased..", this.speed);
    } else throw new Error("Engine is not started yet");
  }

  brake(speed: number): void {
    this.speed -= speed;
    console.log("Speed has been reduced..", this.speed);
  }
}

const car: Car = new SportCar("freestyle");

car.startEngine();
car.accelerate(20);
car.accelerate(20);
car.accelerate(20);
car.brake(60)
