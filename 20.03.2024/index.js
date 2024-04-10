// function stringChop(str,num=null){
//     if(!num||num<=0) return [str];
//     const res=[];
//     for(let i=0; i<str.length; i+=num){
//         const slice=str.slice(i,i+num);
//         res.push(slice);
//     }
//     return res
// }


// console.log (stringChop('w3resource'))
// console.log (stringChop('w3resource',2))
// console.log (stringChop('w3resource',3))
// console.log (stringChop('w3resource',4))
// console.log (stringChop('w3resource',5))
// ------------------------------------------------------------


// Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1


// function count(string,pattern){
//     const regExp=new RegExp(pattern,'gi')
//     const arr=string.match(regExp)
//     return arr.length
// }


// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

// ----------------------------------------------------------------------



// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"


// function textTruncate(string,numb=null,end='...'){
//     if(!numb && numb!==0 || numb<0) return string;
//     const res=string.slice(0,numb);
//     return res.length===string.length?string:res+end
// }

// console.log(textTruncate('We are doing JS string exercises.'))
// console.log(textTruncate('We are doing JS string exercises.',19))
// console.log(textTruncate('We are doing JS string exercises.',15,'!!'))
// console.log(textTruncate('We are doing JS string exercises.',59))


// -------------------------------------------------------------------------------------------


// function reverse(num){
//     const binary=num.toString(2)
//     const revers=reverseString(binary);
//     const result=
// }

// function reverseString(str){
//     return (str === '')?'':reverseString(str.slice(1))+str.chatAt(0)
// }
// console.log(reverseString('Hello'))

// ---------------------------------------------------------------------

// 21. Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."



// function repeatString(str,num=1){
//     if(!num || num<0) return str;
//     let res=''
//     for(let i=0;i<num;i++){
//         res+=str
//     }
//     return res
// }

// console.log(repeatString('a', 4))
// console.log(repeatString('a'))
// console.log(repeatString('georgia', 10))

// --------------------------------------------------------------------------


// 22. Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"


// function subStrAfterChars(text,char){
//     return text.slice(text.indexOf(char)+1)
// }

// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E'))

// ----------------------------------------------------------------------------


// 24. Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"


// function trunCate(str,num){
//     if(!num && num!==0 || num<0) return new TypeError('Second parameter must be positive integer');
//     // const arr=str.split(' ');
//     // const resultArray=arr.slice(0,num);
//     // const result=resultArray.join(' ');
//     // return result

//     return str.split(' ').slice(0,num).join(' ');
// }

// console.log(trunCate('The quick brown fox jumps over the lazy dog', 5))
// console.log(trunCate('The quick brown fox jumps over the lazy dog', -5))

// ---------------------------------------------------------------------------------------------


// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"
// Click me to see the solution.

// function removeOccurrence(str,pattern){
//     const regExp=new RegExp(pattern,'ig')
//     return str.replace(regExp,'')
// }

// console.log(removeOccurrence("The quick brown fox jumps over the lazy dog", 'the'))

// ---------------------------------------------------------------------------------------------------