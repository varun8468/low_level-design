import { assertEquals } from "@std/assert";
import { add } from "./document-editor-client.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
