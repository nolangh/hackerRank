//itterate through array
//compare each element

function getSecondLargest(nums) {
  let cleanedArray = nums.filter(
    (value, index) => nums.indexOf(value) === index
  );
  let sortedArray = cleanedArray.sort((a, b) => a - b);
  return sortedArray[1];
}

/* function getSecondLargest(nums) {
  let sortedArray = nums.sort((a, b) => a - b);
} */
