## Advent of Code: TS bootstrap

### Initial Setup

Clone this repo to your machine:
```shell
git clone git@github.com:mr-black-8/advent-2020-ts.git
```

Enter the project directoy & install npm modules
```shell
cd advent-2020-ts
npm install
```

### Running solutions
In one terminal run tsdx in watch mode:
```
npm start
```

You can now run your solutions in a second window, passing the day parameter:

(check below for daily challenge setup)
```
npm run day 01
```


### Daily Challenge setup
For maximum points, the solutions need to be submitted ASAP once challenge is available. If you're going for the high score, make sure yor complete the daily setup before the challenge is released!

#### TLDR;
- paste input data into new input file eg `01.input`
- copy `x_day.ts` to eg `01_day.ts` and implement solutions
- add required import/export to `bundle_solutions.ts`

#### Input data set
Each day on advent of code, two challenges are posted which are base on one set of input data.

Create a copy of the `input/x.input` file and rename with the current day: `x.input` -> `01.input`

**Dont forget to remove the existing lines of instructions for the input file!**

#### Solution functions
Create a copy of the `src/solutions/x_day.ts` file and rename with the current day: `x_day.ts` -> `01_day.ts`

Add the daily solutions to the `bundle_solutions.ts` file following the existing pattern, e.g:

```js
import { solutionOne as solution011, solutionTwo as solution012 } from './solutions/x_day';
export default {
  solution011,
  solution012,
}
```

---
Project bootstrapped with TSDX