# pre_commit

[![tag](https://img.shields.io/github/release/lion-man44/pre_commit)](https://github.com/lion-man44/pre_commit/releases)
[![license](https://img.shields.io/github/license/lion-man44/pre_commit)](https://github.com/lion-man44/pre_commit/blob/master/LICENSE)

This is meaningless tool :)

I wanted to try the `deno bundle`.

## Usage

```sh
# Please move your project root
deno bundle --unstable https://deno.land/x/pre_commit/mod.ts pre-commit.js
deno run -A pre-commit.js
rm pre-commit.js
```

If you get this error, you should create `*.test.ts` file on your project.

```sh
error: No test modules found
```
