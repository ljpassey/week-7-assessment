// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addToZero(arr){
    for(let i = 0; i < arr.length; i++) {
        for(let k = i + 1; k < arr.length; k++) {
            if(arr[i] + arr[k] === 0) {
                return console.log(true)
            }
        }
    }
    return console.log(false)
}

addToZero([1, 2, 3, -2])

//addToZero has a quadratic runtime complexity (O(n^2) because of the nested for loops. It however has a linear space complexity.

//-------------------------------------------//

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

const hasUniqueChars = (str) => {
    let set = new Set()

    str.split('').forEach(char => set.add(char))

    if([...set].join('') === str){
        return console.log(true)
    } else {
        return console.log(false)
    }
}

hasUniqueChars("Monday")

//hasUniqueChars has a linear runtime complexity (O(n)) becuase of the forEach. It has a linear space complexity.

//-------------------------------------------//

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if(strArr.indexOf(alphabet[i]) < 0){
      return console.log(false);
    }
  }
  return console.log(true);
}

isPangram("The quick brown fox jumps over the lazy dog!")

//isPangram has a linear runtime complexity (O(n)) becuase of the singular for loop. It also has a linear space complexity.

//-------------------------------------------//

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function findLongestWord(arr) {
 
  var longestWord = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord){
	longestWord = arr[i].length;
     }
  }
  return console.log(longestWord);
}
findLongestWord(["hi", "hello"])

//findLongestWord has a linear runtime complexity (O(n)) because of the singular for loop. It has a linear space complexity.