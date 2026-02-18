import { assertStringIncludes } from "@std/assert";
import { King } from "./Character.ts";
import { BowAndArrowBehavior, SwordBehavior } from "./behaviors/weaponBehviours.ts";

Deno.test("King delegates to current WeaponBehavior", () => {
  const logs: string[] = [];
  const original = console.log;
  console.log = (...args: unknown[]) => logs.push(args.map(String).join(" "));

  try {
    const king = new King();
    king.setWeapon(new SwordBehavior());
    king.fight();
  } finally {
    console.log = original;
  }

  assertStringIncludes(logs.join("\n"), "Slashing with a sword");
});

Deno.test("Strategy can be swapped at runtime", () => {
  const logs: string[] = [];
  const original = console.log;
  console.log = (...args: unknown[]) => logs.push(args.map(String).join(" "));

  try {
    const king = new King();
    king.setWeapon(new BowAndArrowBehavior());
    king.fight();
    king.setWeapon(new SwordBehavior());
    king.fight();
  } finally {
    console.log = original;
  }

  const output = logs.join("\n");
  assertStringIncludes(output, "Shooting an arrow with a bow");
  assertStringIncludes(output, "Slashing with a sword");
});
