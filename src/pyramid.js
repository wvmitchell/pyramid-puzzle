function longestSlideDown(pyramid){
  // Copy pyramid
  let pyramidCopy = JSON.parse(JSON.stringify(pyramid)); // does not work for some values...
  
  // Iterate through bottom layer first, add sums from lower elements, find greatest sum
  // replace elements with new sums, and move upward
  for (let i = pyramidCopy.length - 2; i >= 0; i--) {
    for (let j = 0; j <= pyramidCopy[i].length - 1; j++) {
      const sumLeft = pyramidCopy[i][j] + pyramidCopy[i + 1][j];
      const sumRight = pyramidCopy[i][j] + pyramidCopy[i + 1][j + 1];

      if (sumLeft > sumRight) {
        pyramidCopy[i][j] = sumLeft;
      } else {
        pyramidCopy[i][j] = sumRight;
      }
    }
  }

  return pyramidCopy[0][0];
}

// function traversePyramid(pyramid, depth, longitude) {
//   if (depth < 0) {
//     console.log('end')
//     return 0;
//   } else {
//     console.log('move up')

//     const sumLeft = pyramid[depth][longitude] + pyramid[depth + 1][longitude];
//     const sumRight = pyramid[depth][longitude] + pyramid[depth + 1][longitude + 1];

//     if (sumLeft > sumRight) {
//       return sumLeft + traversePyramid(pyramid, depth - 1, longitude);
//     }

//     return sumRight + traversePyramid(pyramid, depth - 1, longitude);
//   }
// }

module.exports = { longestSlideDown };