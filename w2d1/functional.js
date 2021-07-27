
// arrays
const array1 = [1, 2, 3, 5];
const words = ["john", "bob", "be", "Yemane Barya", "Gezawutnia"];

// sum function
function sum(numbers){
    const initialValue = 0;
    return numbers.reduce(
        (acc, element) => acc + element, initialValue);
}
// multiply function
function multiply(numbers){
    const initialValue2 = 1;
    return numbers.reduce((acc, element) => acc * element, initialValue2);
}

// reverse string
function reverse(string1){
    return string1.split("").reverse().join("");

}

// filter long words
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}


