const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  //Test for a false result (word is not found)
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  //Test for a true result (word is found horizontally)
  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  //Test for a true result (word is found vertically)
  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["l", "W", "C", "F", "Q", "U", "A", "L"],
        ["i", "E", "I", "N", "F", "E", "L", "D"],
        ["g", "F", "C", "F", "Q", "U", "A", "L"],
        ["h", "M", "J", "T", "E", "V", "R", "G"],
        ["t", "H", "C", "S", "Y", "E", "R", "L"],
        ["n", "F", "R", "E", "N", "E", "Y", "B"],
        ["i", "B", "T", "W", "A", "P", "A", "I"],
        ["n", "D", "C", "A", "K", "U", "A", "S"],
        ["g", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "lightning"
    );

    assert.isTrue(result);
  });

  //Test for a true result (word is found backwards - horizontally)
  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["l", "i", "o", "f", "o", "r", "e", "a"],
        ["i", "E", "I", "N", "F", "E", "L", "D"],
        ["g", "F", "C", "F", "Q", "U", "A", "L"],
        ["h", "M", "J", "T", "E", "V", "R", "G"],
        ["t", "H", "C", "S", "Y", "E", "R", "L"],
        ["n", "F", "R", "E", "N", "E", "Y", "B"],
        ["i", "B", "T", "W", "A", "P", "A", "I"],
        ["n", "D", "C", "A", "K", "U", "A", "S"],
        ["g", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "aerofoil"
    );

    assert.isTrue(result);
  });

  //Test for a true result (word is found backwards - vertically)
  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["l", "i", "o", "f", "o", "r", "e", "a"],
        ["i", "E", "I", "N", "F", "E", "v", "D"],
        ["g", "F", "C", "F", "Q", "U", "i", "L"],
        ["h", "M", "J", "T", "E", "V", "t", "G"],
        ["t", "H", "C", "S", "Y", "E", "c", "L"],
        ["n", "F", "R", "E", "N", "E", "e", "B"],
        ["i", "B", "T", "W", "A", "P", "j", "I"],
        ["n", "D", "C", "A", "K", "U", "b", "S"],
        ["g", "Z", "K", "F", "Q", "U", "o", "L"],
      ],
      "aerofoil"
    );

    assert.isTrue(result);
  });
});
