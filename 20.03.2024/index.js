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


function reverse(num){
    const binary=num.toString(2)
}

function reverseString(str){
    return (str === '')?'':reverseString(str.slice(1))+str.chatAt(0)
}
console.log(reverseString('Hello'))