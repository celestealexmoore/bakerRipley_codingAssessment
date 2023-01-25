/* 
Given an Array of arrays filled with lowercase words, find all words that END in s or CONTAINS an i. Return an array of matching words
 
Example:
[['a','cat','dog'],['yes','no','perhaps','maybe'],['sad','in'],['insect','flies','stink','bug'],['bats'],['else',''],['iron','s','i'],['ants']]
Returns:
[ 'yes', 'perhaps', 'in', 'insect', 'flies', 'stink', 'bats', 'iron', 's', 'i', 'ants']
*/

let result = [];

function array(arrOfStrns) {
  for (let i = 0; i < arrOfStrns.length; i++) {
    for (let j = 0; j < arrOfStrns[i].length; j++) {
      if (
        arrOfStrns[i][j].indexOf("s") == arrOfStrns[i][j].length - 1 &&
        arrOfStrns[i][j] !== ""
      ) {
        result.push(arrOfStrns[i][j]);
      } else if (arrOfStrns[i][j].indexOf("i") > -1) {
        result.push(arrOfStrns[i][j]);
      }
    }
  }
}

array([
  ["a", "cat", "dog"],
  ["yes", "no", "perhaps", "maybe"],
  ["sad", "in"],
  ["insect", "flies", "stink", "bug"],
  ["bats"],
  ["else", ""],
  ["iron", "s", "i"],
  ["ants"],
]);

console.log(result);
