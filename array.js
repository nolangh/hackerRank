//itterate through array
//compare each element

function getSecondLargest(nums) {
  let cleanedArray = nums.filter(
    (value, index) => nums.indexOf(value) === index
  );
  let sortedArray = cleanedArray.sort((a, b) => b - a);
  return sortedArray[0];
}
