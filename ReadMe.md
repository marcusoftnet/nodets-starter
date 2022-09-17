# Template for Node TS projects

This is a starting point for doing TypeScript development for Node projects, and to write tests for the implementation.

It contains some useful configurations and starting points making writing TypeScript as smooth as if it was Bun ... hopefully.

## How to use this template

You can absolutely clone this repo and get all history and my ugly commits from this, but a much better approach is to use [degit](https://github.com/Rich-Harris/degit) and just go

```bash
npx degit marcusoftnet/nodets-starter my-folder
```

If you use this command I will remove some stuff that you don't want in your new shiny application, and all git.

## TypeScript Build Configuration

I've keep the `tsconfig.json` to a minimum while still doing something useful. A few things worth noting are:

- the output of the transpilation/build will be `dist`. I **have** included the `dist`-folder in git, since it's run by `npm run start`
- `node_modules` as well as `src/**.spec.ts` will be excluded from the build
- I've extended the config for Node16, which probably should be updated when Node is updates

## Scripts

There are 3 basic scripts that I found useful:

- `build` - will clear the `dist` folder (in a platform agnostic way) and transpile all TypeScript in `src` into JavaScript, according to the [configuration](#typescript-build-configuration)
- `start` - will run the `dist/index.js` file, after running a `build`
- `dev` - will run the `src/index.ts` file, using `ts-node`
- `test` - will run the tests (all `src/**/*.spec.ts`)
- `test:watch` - will run the tests after each change of any file in `src`

## Starting point

I've included some very simple starting points for `index.ts` and `index.spec.ts` that will verify that the setup works. It also shows you how to get started writing tests using [Mocha]() and [Chai]() using TypeScript.

## References

I have not done this myself. I borrowed from the internet

- [How to Set Up a Node.js Project with TypeScript](https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html) by [Ayooluwa Isaiah](https://blog.appsignal.com/authors/ayooluwa-isaiah)
- [Unit testing node applications with TypeScript — using mocha and chai](https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2) by [Sudarsan Balaji](https://artfuldev.medium.com/)
- [Mocha, TypeScript and watching](https://stackoverflow.com/a/64654238/314670)
