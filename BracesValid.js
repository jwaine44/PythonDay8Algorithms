/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";  
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";  
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var countPar = 0;
    var countSqu = 0;
    var countCur = 0;
    var openbraces = [];

    for (var x = 0; x < str.length; x++) {                      // Checking the counts of the opening/closing symbols for matches
        if (str[x] == "(") {
            countPar++;
            openbraces.push("(");
        }
        else if (str[x] == ")") {
            if (countPar == 0) {
                return false;
            }
            else if (openbraces[openbraces.length - 1] == "(") {            //Checking to see if there are opening symbols at the back of the array, and if so, decrement the count
                countPar--;
                openbraces.pop();
            }
            else {
                return false;
            }
        }
        else if (str[x] == "[") {
            countSqu++;
            openbraces.push("[");
        }
        else if (str[x] == "]") {
            if (countSqu == 0) {
                return false;
            }
            else if (openbraces[openbraces.length - 1] == "[") {
                countSqu--;
                openbraces.pop();
            }
            else {
                return false;
            }
        }
        else if (str[x] == "{") {
            countCur++;
            openbraces.push("{");
        }
        else if (str[x] == "}") {
            if (countCur == 0) {
                return false;
            }
            else if (openbraces[openbraces.length -1] == "{") {
                countCur--;
                openbraces.pop();
            }
            else {
                return false;
            }
        }
    }

    if (openbraces.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));