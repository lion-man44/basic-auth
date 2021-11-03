import { existsSync } from "https://deno.land/std/fs/mod.ts";

interface PreCommitConstructor {
  filename?: string
}

export class PreCommit {
  #filename: string;
  #defaultCommand: string;
  #hookFile: string;

  constructor(self: PreCommitConstructor = {}) {
    this.#filename = self.filename || '.pre-commit';
    this.#defaultCommand = `
    #! /bin/sh

    deno fmt --check &&
    deno lint &&
    deno test
    `
    this.#hookFile = '.git/hooks/pre-commit'
    if (!this.isFileCheck()) this.createHookFile();
  }

  private isFileCheck() {
    if (existsSync(this.#hookFile)) return true;
    if (existsSync(this.#filename)) return true;
    return false;
  }

  private createHookFile() {
    Deno.writeTextFileSync(this.#filename, this.#defaultCommand)
  }

  run() {
    Deno.symlinkSync(`${Deno.env.get('PWD')}/${this.#filename}`, this.#hookFile)
  }
}