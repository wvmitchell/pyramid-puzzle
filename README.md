# Pyramid Puzzle

Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

```
   \3\
  7 \4\
 2 4 /12/
8 5 \9\ 3
```

## The goal

Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 4 + 12 + 9 = 28

Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

```
* With the input `[[3], [7, 4], [2, 4, 12], [8, 5, 9, 3]]`
* Your function should return `28`.
```

## Using the tests

Some example tests have already been created for you. You only need make them
pass. You can get started by running the following commands:

1) Clone the repo: `git clone git@github.com:wvmitchell/pyramid-puzzle.git`
2) Move in and install dependencies: `cd pyramid-puzzle && npm i`
3) Run the tests: `npm test`
4) Alternatively, run the tests in watch mode: `npm run test:watch`
5) Make the first test pass, then move on to the first skipped test

## Important notes
1) Other than unskipping tests, you do not need to alter the test file.
2) Brute force won't work, you'll need to be more clever
