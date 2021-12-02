//itterate through array
//compare each element
function getSecondLargest(nums) {
  let sortedArray = nums.sort((a, b) => a - b);
  for (let v of sortedArray) {
    if (v - v === 1) {
      console.log(v);
    }
  }
}
