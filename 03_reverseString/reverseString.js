const reverseString = function(string) {
  const arr = string.split(' ');
  const newArr = []

  for(let i=0; i<arr.length; i++) {
    const wordLength = arr[i].length - 1;
    let word = '';

    for(let j=wordLength; j>=0; j--){
      word += arr[i][j];
    };
    
    newArr.unshift(word)

  };

  return newArr.join(' ')
};

// Do not edit below this line
module.exports = reverseString;
