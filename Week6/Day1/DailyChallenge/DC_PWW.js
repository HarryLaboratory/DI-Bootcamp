// 1st DC

// The Function to make all words uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        resolve(words.map(word => word.toUpperCase()));
      } else {
        reject("All elements must be strings");
      }
    });
  }
  
  // The Function to sort the array of uppercased words
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        resolve(words.sort());
      } else {
        reject("Array length must be greater than 4");
      }
    });
  }
  
//Test

  // Example 1: The catch method is triggered because some elements are not strings.
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));  // Output: All elements must be strings
  
  // Example 2: The catch method is triggered because the array length is 3
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));  // Output: Array length must be greater than 4
  
  // Example 3: The array is uppercased and sorted because length is more than 4
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))  // Output: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));
  