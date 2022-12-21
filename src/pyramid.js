function longestSlideDown(pyramid){
  // Copy pyramid, keeping in mind nested arrays
  let pyramidCopy = JSON.parse(JSON.stringify(pyramid)); // this approach does not work for some values...
  
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

module.exports = { longestSlideDown };