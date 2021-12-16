# Typescript SOLID

Typescript SOLID is an exercise that I had to do during my Becode training consisting of 5️⃣ small, basic code examples, one for each SOLID principle. The code for each exercise had to be refactored in order to not violate the principle that was refereed.

While the code needed refactoring, more important was of course understanding the principles at hand.

It was also required to use `Typescript` (which I totally love now) and [Parcel](https://parceljs.org/) to bundle everything up.

## Exercise type and duration

We had an entire week (13/12/2021 - 17/12/2021), basically 1️⃣ day/principle and it was a solo exercise.

## How can you check/use the code?

Inside the repo, you'll see 5️⃣ folders, each one containing (among others) an `old.ts` file and a `new.ts` file.  
The `old.ts` file has the original code that was given to us and required refactoring. It's all commented out so the editor doesn't complain about this and that.🙂  
The `new.ts` file has my refactored version of it that (should) apply the principle in question.

Inside you'll also see a `dist` folder; this is generated by Parcel. If you want to start fresh you can just delete it.

Depending on what code you want to use (old or new.ts), you'll have to make sure you reference the correct JS file in `index.html`. If you go for `new.ts`, leave it as `new.js`, if not change it to `old.js`.

If you make any changes to typescript files use the following command to generate a new javascript file (unless your editor will do it for you):

`tsc -t es5 new.ts`

after that you can use Parcel to bundle everything up:

`npx parcel index.html`

## Folder naming explanation

| Folder name |       Principle targeted        |
| :---------: | :-----------------------------: |
|     0.S     | Single Responsibility Principle |
|     1.O     |      Open/Closed Principle      |
|     2.L     |  Liskov Substitution Principle  |
|     3.I     | Interface Segregation Principle |
|     4.D     | Dependency Inversion principle  |

### Why I left the .dist folder and old.ts/js files

Just so anyone (including me) can quickly see the end results or for a quick look at the differences between the initial code and the refactored one.
