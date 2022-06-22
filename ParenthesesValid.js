/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    var parenthesesCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === "(" ) {
            parenthesesCount++;                         //Counting the amount of opening and closing parentheses in the first two if statements
        }
        if(str[i] === ")" ){
            parenthesesCount--;
        }
        if (parenthesesCount < 0) {
            return false;
        }
    }
    if(parenthesesCount === 0) {                        // Matching the total of the opening and closing parentheses; if there are pairs then the count will be 0; if it's not, then there are mismatching pairs and thus false
        return true;
    } else {
        return false;
    }
}

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));