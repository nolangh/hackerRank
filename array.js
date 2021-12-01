//itterate through array
//compare each element
function getSecondLargest(nums) {
  let sortedArray = nums.sort(function (a, b) {
    return b - a;
  });
  for (let v of sortedArray) {
    if (v === v) {
      sortedArray.slice(v);
    }
  }
  return sortedArray[1];
}
