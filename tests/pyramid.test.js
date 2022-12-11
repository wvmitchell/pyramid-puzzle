const { longestSlideDown } = require('../src/pyramid.js')
const { hugePyramid, epicPyramid } = require('./big-pyramids.js')

describe('longestSlideDown', () => {
  let testStartTime;
  let testTimeoutInMs = 5000;

  beforeEach(() => {
    testStartTime = new Date().getTime();
  });

  afterEach(() => {
    if (new Date().getTime() - testStartTime > testTimeoutInMs) {
      throw new Error(`Test took longer than ${testTimeoutInMs}ms!`);
    }
  });

  test("should work on baby pyramids", () => {
    const pyramid = [[3],
                    [7, 4]]
    expect(longestSlideDown(pyramid)).toBe(10)
  })

  test.skip("should work on small pyramids", () => {
    const pyramid = [[3],
                    [7, 4],
                    [2, 4, 6]]
    expect(longestSlideDown(pyramid)).toBe(14)
  })

  test.skip( "should work on medium pyramids", () => {
    const pyramid = [[3],
                   [7, 4],
                  [2, 4, 6],
                 [8, 5, 9, 3]]
    expect(longestSlideDown(pyramid)).toBe(23)
  })

  test.skip("should work for large pyramids", () => {
    const pyramid = [[75],
                   [95, 64],
                 [17, 47, 82],
                [18, 35, 87, 10],
               [20,  4, 82, 47, 65],
              [19,  1, 23, 75,  3, 34],
             [88,  2, 77, 73,  7, 63, 67],
            [99, 65,  4, 28,  6, 16, 70, 92],
           [41, 41, 26, 56, 83, 40, 80, 70, 33],
          [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
         [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
        [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
       [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
      [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]]
    expect(longestSlideDown(pyramid)).toBe(1074)
  });

  // Mind the timer, you fn must finish in 5 seconds...
  test.skip("should work for huge pyramids", () => {
    const pyramid = hugePyramid
    expect(longestSlideDown(pyramid)).toBe(1977)
  });

  // Don't even bother trying until you're passing the previous tests
  test.skip("should work for epic pyramids", () => {
    const pyramid = epicPyramid
    expect(longestSlideDown(pyramid)).toBe(7494)
  });
})
