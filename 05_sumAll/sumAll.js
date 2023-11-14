const sumAll = function(min, max) {
  if (min < 0 | max < 0 |
      typeof(min) != 'number' |
      typeof(max) != 'number') {
    return 'ERROR'
  } 
  
  if (min > max) [min, max] = [max, min];
  let i=min, sum=0;
  
  while (i <= max) {
    sum += i;
    i++;
  };

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
