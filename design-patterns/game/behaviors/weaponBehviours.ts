import { WeaponBehavior } from "../interfaces/WeaponBehavior.ts";

export class KniefBehavior implements WeaponBehavior{
    useWeapon(): string {
        return "Cutting with a knife"
    }
}

export class BowAndArrowBehavior implements WeaponBehavior{
    useWeapon(): string {
        return "Shooting an arrow with a bow"
    }
}
export class AxeBehavior implements WeaponBehavior{
    useWeapon(): string {
        return "Chopping with an axe"
    }
}

export class SwordBehavior implements WeaponBehavior{
    useWeapon(): string {
        return "Slashing with a sword"
    }
}