function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    const charCount1 = {};
    const charCount2 = {};
    
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}


console.log(areAnagrams("Astronomer", "Moon starer"));  // true
console.log(areAnagrams("School master", "The classroom"));  // true
console.log(areAnagrams("The Morse Code", "Here come dots"));  // true
console.log(areAnagrams("Hello", "Olelh"));  // true
console.log(areAnagrams("Hello", "World"));  // false
