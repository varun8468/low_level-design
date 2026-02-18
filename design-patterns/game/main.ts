import {
	AxeBehavior,
	BowAndArrowBehavior,
	KniefBehavior,
	SwordBehavior,
} from "./behaviors/weaponBehviours.ts";
import { King, Troll, type Character } from "./Character.ts";

type Distance = "far" | "near";

function chooseWeaponFor(character: Character, distance: Distance) {
	// The whole point: we can change behavior at runtime
	// without changing the Character classes.
	if (character instanceof Troll) {
		character.setWeapon(distance === "far" ? new AxeBehavior() : new KniefBehavior());
		return;
	}

	// Default: king-like melee/ranged swap
	character.setWeapon(distance === "far" ? new BowAndArrowBehavior() : new SwordBehavior());
}

const king: Character = new King();
const troll: Character = new Troll();

const turns: Distance[] = ["far", "far", "near", "near"];

for (let i = 0; i < turns.length; i++) {
	const distance = turns[i];
	console.log(`\nTurn ${i + 1} (distance: ${distance})`);

	chooseWeaponFor(king, distance);
	chooseWeaponFor(troll, distance);

	king.fight();
	troll.fight();
}