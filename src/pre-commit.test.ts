import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

import { PreCommit } from "./pre-commit.ts";
Deno.test({
  name: "#run",
  fn: () => {
    const hook = new PreCommit();
    hook.rm();
    hook.run();
    assertEquals(hook.isFileCheck(), true);
  },
});
