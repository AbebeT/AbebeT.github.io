function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTest2(expected, found) {
    for(let i=0; i< expected.length ;i++){
        if(expected[i]!==found[i])
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
    return  "TEST SUCCEEDED";
}



function max(n1, n2) {

    if (n1 < n2) {
        return n2;
    }
    else {
        return n1;
    }

}
function maxOfThree(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

function isVowel(character) {
    const vowels = ["a", "e", "i", "u", "o"];
    return vowels.includes(character);
}
function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function multiply(array) {
    let total = 1;
    for (let i = 0; i < array.length; i++) {
        total *= array[i];
    }
    return total;
}

function reverse(mystring) {
    let reversedString = " ";
    for (let i = mystring.length - 1; i >= 0; i--) {
        reversedString = reversedString + mystring.charAt(i);
    }
    return reversedString;
}

function reverseString(str) {
    
    var splitString = str.split("");     
    var reverseArray = splitString.reverse();    
    var joinArray = reverseArray.join("");     
    return joinArray;
}

function findLongestWord(words) {
    let index = 0;
    let maxLength = words[0].length;

    for (let i = 0; i < words.length; i++) {
        if (maxLength < words[i].length) {
            maxLength = words[i].length;
            index = i;
        }
    }
    return words[index];
}
function filterLongWords(words, maxLength) {
    let longWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            longWords.push(words[i]);
        }
    }
    return longWords;
}

function multiplyBy10(a) {

    const b = a.map(function (elem, i, array) {
        return elem * 10;
    });
    return b;
}


function filter3(a){
    const c = a.filter(function(elem, i, array){
        return elem == 3;});
    return c;
}

function productOfAll(a){
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
      }, 1);

      return d;
}



//1. max()
console.log("Expected output of max(4,44) is 44  " + myFunctionTest(44, max(4, 44)));
console.log("Expected output of max(4,44) is 44  " + myFunctionTest(4, max(4, 44)));

//2. maxOfThree()
console.log("Expected output of maxOfThree(4, 5, 44) is 44  " + myFunctionTest(44, maxOfThree(4, 5, 44)));
console.log("Expected output of maxOfThree(4, 5, 44) is 44  " + myFunctionTest(4, maxOfThree(4, 5, 44)));


//3.  isVowel()
console.log("Expected output of isVowel(\"a\") is true  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel(\"z\") is true  " + myFunctionTest(true, isVowel("z")));


//4a. sum()
console.log("Expected output of sum([1, 2, 3]) is 6  " + myFunctionTest(6, sum([1, 2, 3])));
console.log("Expected output of sum([1, 2, 3]) is 7  " + myFunctionTest(7, sum([1, 2, 3])));

//4b. multiply()
console.log("Expected output of multiply([1, 2, 3]) is 6  " + myFunctionTest(6, multiply([1, 2, 3])));
console.log("Expected output of multiply([1, 2, 3]) is 7  " + myFunctionTest(7, multiply([1, 2, 3])));

//5. reverse()
console.log("Expected output of reverse(\"abebe\") is ebeba  " + myFunctionTest("ebeba", reverseString("abebe")));
console.log("Expected output of reverse(\"abebe\") is abebe  " + myFunctionTest("abebe", reverseString("abebe")));

//5. findLongestWord()
console.log("Expected output of findLongestWord([\"abebe\", \"the\", \"abebe tekle\"]) is abebe tekle  " + myFunctionTest("abebe tekle", findLongestWord(["abebe", "the", "abebe tekle"])));
console.log("Expected output of findLongestWord([\"abebe\", \"the\", \"abebe tekle\"]) is abebe  " + myFunctionTest("abebe", findLongestWord(["abebe", "the", "abebe tekle"])));


//6. filterLongWords()
console.log("Expected output of filterLongWords([\"abebe\", \"the\", \"abebe tekle\"]) is abebe, abebe tekle  " + myFunctionTest2(["abebe", "abebe tekle"], filterLongWords(["abebe", "the", "abebe tekle"], 4)));
console.log("Expected output of filterLongWords([\"abebe\", \"the\", \"abebe tekle\"]) is the, abebe tekle  " + myFunctionTest2(["the", "abebe tekle"], filterLongWords(["abebe", "the", "abebe tekle"], 4)));



//7a. multiply10()
console.log("Expected output of multiplyBy10([1, 2, 3]) is [10, 20, 30]  " + myFunctionTest2([10, 20, 30], multiplyBy10([1, 2, 3])));
console.log("Expected output of multiplyBy10([1, 2, 3]) is [1, 2, 3]  " + myFunctionTest2([1, 2, 3], multiplyBy10([1, 2, 3])));

//7b. filter3(a)
console.log("Expected output of filter3([1, 2, 3]) is [3]  " + myFunctionTest2([3], filter3([1, 2, 3])));
console.log("Expected output of filter3([1, 2, 3]) is [2, 3]  " + myFunctionTest2([2, 3], filter3([1, 2, 3])));



//7c. productOfAll(a)
console.log("Expected output of productOfAll([1, 2, 3]) is 6  " + myFunctionTest(6, productOfAll([1, 2, 3])));
console.log("Expected output of productOfAll([1, 2, 3]) is 9  " + myFunctionTest(9, productOfAll([1, 2, 3])));



//************************************************************************************* */
//                         console assertion verion                                     //
//************************************************************************************* */

//1. max()

let message = "Test Failed, Expected output of max(4,44) is 4  " + "found + " +  max(4, 44);
console.assert(44===max(4,44), message);
console.assert(4===max(4,44), message);

//2. maxOfThree()

message = "Test Failed, Expected output of maxOfThree(4, 5, 44) is 4  " + "found "+ maxOfThree(4, 5, 44);
console.assert(44===max(4,44), message);
console.assert(4===max(4,44), message);


//3.  isVowel()
message = "Test Failed, Expected output of isVowel(\"a\") is false  found  " + isVowel("a");
console.assert(false==isVowel("a"), message)
console.assert(true==isVowel("a"), message)



//4a. sum()

message = "Test Failed, Expected output of sum([1, 2, 3]) is 7, Found " + sum([1, 2, 3]);
console.assert(7==sum[1,2,3], message);
console.assert(6==sum[1,2,3], message);

//4b. multiply()
message = "Test Failed, Expected output of multiply([1, 2, 3]) is 7, Found  " +  multiply([1, 2, 3]);
console.assert(7==multiply[1,2,3], message);
console.assert(6==multiply[1,2,3], message);


//5. reverse()
message = "Test Failed, Expected output of reverse(\"abebe\") is abebe, Found  " +  reverseString("abebe");
console.assert("abebe" == reverseString("abebe"), message)
console.assert("ebeba" == reverseString("abebe"), message)

//5. findLongestWord()
message = "Test Failed, Expected output of findLongestWord([\"abebe\", \"the\", \"abebe tekle\"]) is abebe, found  " + findLongestWord(["abebe", "the", "abebe tekle"]);
console.assert("abebe" === findLongestWord(["abebe", "the", "abebe tekle"]), message);
console.assert("abebe tekle" === findLongestWord(["abebe", "the", "abebe tekle"]), message);

//6. filterLongWords()
message = "Test Failed, Expected output of filterLongWords([\"abebe\", \"the\", \"abebe tekle\"]) is abebe, found " + filterLongWords(["abebe", "the", "abebe tekle"], 4);
console.assert("abebe" === filterLongWords(["abebe", "the", "abebe tekle"], 4).toString(), message)
console.assert("abebe tekle" === filterLongWords(["abebe", "the", "abebe tekle"], 4).toString(), message)


//7a. multiply10()
message = "Test Failed, Expected output of multiplyBy10([1, 2, 3]) is [1, 20, 30], Found  " +  multiplyBy10([1, 2, 3]);
console.assert([1, 20, 30].toString, multiplyBy10([1, 2, 3]).toString(), message);
console.assert([10, 20, 30].toString, multiplyBy10([1, 2, 3]).toString(), message);

//7b. filter3(a)
message = "Test Failed, Expected output of filter3([1, 2, 3]) is [1, 2], Found " + filter3([1, 2, 3]);
console.assert([1, 2].toString(), filter3([1, 2, 3]), message);
console.assert([3].toString(), filter3([1, 2, 3]), message);

//7c. productOfAll(a)
message = "Test Failed, Expected output of productOfAll([1, 2, 3]) is 9, Found  " + productOfAll([1, 2, 3]);
console.assert(6=== productOfAll([1, 2, 3]), message);
console.assert(9=== productOfAll([1, 2, 3]), message);

