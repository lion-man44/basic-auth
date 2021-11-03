import { PreCommit } from "./src/pre-commit.ts";

const hook = new PreCommit();
// hook.rm();

if (!hook.isFileCheck()) hook.createHookFile();

hook.run();
