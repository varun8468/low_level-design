import { Hihi } from "./behaviors/Quack.ts";
import { Duck, MallardDuck, ModelDuck } from "./Duck.ts";

// const mallard: Duck = new MallardDuck();


// mallard.performQuack();


const model: Duck = new ModelDuck();

model.performQuack()

model.setQuackBehavior(new Hihi())

model.performQuack()