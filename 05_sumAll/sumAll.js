const sumAll = function(terminus, terminal) {
  let i=terminus, sum=0;

  if (terminus < 0 | terminal < 0 |
      typeof(terminus) != 'number' |
      typeof(terminal) != 'number') {
    return 'ERROR'
  } 
  else if (terminus < terminal) {
    while (i <= terminal) {
    sum += i;
    i++;
    };
  } 
  else {
    while (i >= terminal) {
      sum += i;
      i--;
      };
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
