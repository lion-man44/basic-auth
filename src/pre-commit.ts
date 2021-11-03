import { existsSync } from "https://deno.land/std/fs/mod.ts";

interface PreCommitConstructor {
  filename?: string;
}

export class PreCommit {
  #filename: string;
  #defaultCommand: string;
  #hookFile: string;

  constructor(self: PreCommitConstructor = {}) {
    this.#filename = self.filename || ".pre-commit";
    this.#defaultCommand = `#! /bin/sh

deno lint && deno test
`;

    this.#hookFile = ".git/hooks/pre-commit";
  }

  private isHookFile() {
    return existsSync(this.#hookFile);
  }

  private isProjectFile() {
    return existsSync(this.#filename);
  }

  isFileCheck() {
    return this.isHookFile() || this.isProjectFile();
  }

  createHookFile() {
    Deno.writeTextFileSync(this.#filename, this.#defaultCommand, {
      mode: 0o755,
    });
  }

  rm() {
    if (existsSync(this.#filename)) Deno.removeSync(this.#filename);
    if (existsSync(this.#hookFile)) Deno.removeSync(this.#hookFile);
  }

  run() {
    Deno.symlinkSync(
      `${Deno.env.get("PWD")}/${this.#filename}`,
      this.#hookFile,
    );
  }
}
