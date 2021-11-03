This is meaningless tool :)

I wanted to try the `deno bundle`.

## Usage

```sh
# Please move your project root
# When using github content
deno bundle --unstable https://raw.githubusercontent.com/lion-man44/pre-commit/main/mod.ts pre-commit.js
deno run -A pre-commit.js
rm pre-commit.js
```

If you get this error, you should create `*.test.ts` file on your project.

```sh
error: No test modules found
```
