import QuackBehavior from "../interfaces/QuackBehavior.ts";

export class Quack implements QuackBehavior{
    quack(): void {
      console.log("quackingggg....")
    }
}

export class MuteQuack implements QuackBehavior{
    quack(): void {
      console.log("No sound at all..")
    }
}

export class Hihi implements QuackBehavior{
  quack(): void {
    console.log("HIHIIHIHIHIH....")
  }
}