function input(nums) {
  let result = [];
  let checkForOne;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) {
      result.push(nums[i]);
    } else if (nums[i] % 3 === 0) {
      // change int to array of integers, so we can loop over it.
      checkForOne = nums[i];
      str = Array.from(String(checkForOne));
      checkArr = str.map((str) => Number(str));

      for (let j = 0; j < 1; j++) {
        // transform back to int from array of int.
        if (checkArr[0] === 1) {
          checkForOne = Number(checkArr.join(""));
          result.push(checkForOne);
          // reset each time.
          checkForOne = [];
        } else {
          checkForOne = [];
        }
      }
    }
  }
  // organize result array highest to lowest.
  console.log(result.sort((a, b) => b - a));
}

input([
  87, 44, 55, 33, 12, 23, 7000, 1, 444, 66, 144, 6890, 213, 133, 62, 127, 61,
  379, 97, 32, 109, 102, 3, 2, 216,
]);
