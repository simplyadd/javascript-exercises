const removeFromArray = function(arr, ...nums) {
  for (let num of nums) {
    if (num in arr) arr.splice(arr.indexOf(num), 1);
    else continue;
  };

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
