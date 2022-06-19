const horizontalSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

// Incorporated transpose functionality from previous pairProgramming assignment, @ArjayS and @Marilynn-Stone
const transpose = function (matrix) {
  //Transposing the array to find the vertical result
  let resultArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j > resultArray.length - 1) {
        resultArray.push([]);
      }
      resultArray[j].push(matrix[i][j]);
    }
  }
  return resultArray;
};

// Incorporated Stretch section of backwards functionality, @ArjayS and @Marilynn-Stone
const reverseSearch = (alphabets, word) => {
  const reversed = alphabets.map((as) => as.reverse().join(""));
  for (a of reversed) {
    if (a.includes(word)) {
      return true;
    }
  }
  return false;
};

// wordSearch function use to determine if a word is found within the array using horizontal, vertical, and backwards search for horizontal and vertical section, @ArjayS and @Marilynn-Stone
const wordSearch = (letters, word) => {
  let transposeLetters = transpose(letters);
  if (horizontalSearch(letters, word)) {
    return true;
  } else if (horizontalSearch(transposeLetters, word)) {
    return true;
  } else if (reverseSearch(letters, word)) {
    return true;
  } else if (reverseSearch(transposeLetters, word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;
