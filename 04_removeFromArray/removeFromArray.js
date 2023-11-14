const removeFromArray = function(arr, ...nums) {
  for (let num of nums) {
    const i = arr.indexOf(num);
    if (i<0) continue;
    else arr.splice(i, 1);
  };

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
