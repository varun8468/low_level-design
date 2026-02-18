import { WeaponBehavior } from "./interfaces/WeaponBehavior.ts";

export abstract class  Character {
  weaponBehavior!: WeaponBehavior
    constructor() {

    }

    abstract fight(): void

    setWeapon(weaponBehavior: WeaponBehavior){
        this.weaponBehavior = weaponBehavior
    }
}

export class King extends Character{
    override fight(): void {
      console.log("King is fighting using", this.weaponBehavior.useWeapon())
    }
}

export class Queen extends Character{
    override fight(): void {
      console.log("Queen is fighting using", this.weaponBehavior.useWeapon())
    }
}

export class Troll extends Character{
    override fight(): void {
      console.log("Troll is fighting using", this.weaponBehavior.useWeapon())
    }
}

export class Knight extends Character{
    override fight(): void {
      console.log("Knight is fighting using", this.weaponBehavior.useWeapon())
    }  
}