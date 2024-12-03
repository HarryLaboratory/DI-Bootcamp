// Step 1
let sentence = "This dinner is not that bad ! You cook well";

// Step 2: 
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Step 3: 
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    sentence = sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3);
}

console.log(sentence);
