/*
Your goal in this kata is to implement are difference function,
which subtracts one list from another.

It should remove all values from list a, which are present in list b

difference([1,2], [1]) === [2]

if a value is present in b, all of its occurrences must be removed from the other:

difference([1,2,2,2,3],[2]) === [1,3]

*/

function array_diff(a, b) {
  let unique = [];

  if (a.length === 0) {
    return [];
  }

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      unique.push(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      unique.push(b[i]);
    }
  }
  return unique;
}

console.log(array_diff([1, 2, 2, 2, 3], [2]));
