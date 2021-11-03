import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";

import { PreCommit } from "./pre-commit.ts";
Deno.test({
  name: "#run",
  fn: () => {
    const hook = new PreCommit();
    if (!hook.isFileCheck) hook.run();
    assertEquals(hook.isFileCheck(), true);
  },
});
