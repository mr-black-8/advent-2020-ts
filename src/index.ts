import { readFileSync } from 'fs';
import solutions from './bundle_solutions';

const day = process.argv[2];
if (!day) {
  console.log('Day argument must be included ie `npm run day 1`');
  process.exit();
}

let data;
try {
  data = readFileSync(`input/${day}.input`).toString('utf8').split('\n');
} catch (err) {
  console.log(`Couldn't get input for day ${day}`);
  console.log(`Check a file exists at "input/${day}.input"`)
  console.log(err);
  process.exit();
}

// From memory all inputs will be a list of numbers
// if that's not the case this year, adjust below (data will be string[] without transformation)
const transformedInput = data.map(Number);

console.log(`Advent of Code 2020!\nhttps://adventofcode.com/\n\n`);
console.log(`Running solutions for day ${day}\n`);

const solutionOne = solutions[`solution${day}1`];
const solutionTwo = solutions[`solution${day}2`];

if (!solutionOne || !solutionTwo) {
  console.log(`Solutions for day ${day} not implemented`);
  console.log('Check it has been added to `bundle_solutions.ts');
  process.exit();
}

console.log(`Day ${day}, Task 1: ${solutionOne(transformedInput)}`);
console.log(`Day ${day}, Task 2: ${solutionTwo(transformedInput)}`);