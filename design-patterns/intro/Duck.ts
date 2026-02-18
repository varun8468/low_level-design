import { MuteQuack, Quack } from "./behaviors/Quack.ts";
import QuackBehavior from "./interfaces/QuackBehavior.ts";

export abstract class Duck{
    quackBehavior: QuackBehavior;

    performQuack(){
        this.quackBehavior.quack();
    }

    setQuackBehavior(qb: QuackBehavior):void{
      this.quackBehavior = qb
    }

    abstract display():void
    swim(): void {
      console.log("All ducks swim...")
    }
}

export class MallardDuck extends Duck {
    constructor(){
        super()
        this.quackBehavior = new MuteQuack()
    }

    override display(): void {
      console.log("Looks like Mallard ducks")
    }
 
}

export class ModelDuck extends Duck{
  constructor(){
    super()
    this.quackBehavior = new Quack()
  }

  override display(): void {
    console.log("I am a model duck")
  }
}