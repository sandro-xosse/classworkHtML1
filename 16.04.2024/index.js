// let animal='dog'


// switch (animal) {
//     case 'dog':
//       console.log('am am')
//       break
//     case 'cat':
//         console.log('miau miau')
//         break
//     default:
//       console.log('this is default')
//   }


// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning
// the opposite boolean value.

//  examples:

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True,
// False, False, True]

// const wordSwitch=['codewars', 'flick', 'code', 'wars']



// function test(arr){
//     let controller=true;
//     const res=[];
//     arr.forEach(el => {
//         if(el=='flick'){
//             controller=!controller;
//         }
//         res.push(controller)
//     });
//     return res
// }

// console.log(test(wordSwitch))

// console.log(test(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))



// 2)
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1




function test(a,b){
    if(a.toUpperCase()==a.toLowerCase() || b.toUpperCase()==b.toLowerCase() ){
        return -1
    }
    let firstUpperCase=a.toUpperCase()===a;
    let secondUpperCase=b.toUpperCase()===b;

    return Number(firstUpperCase===secondUpperCase);
    // return Number((a.toUpperCase()===a)===(b.toUpperCase()===b));
}

console.log(test("B","B"))




// function test1(a,b){
//     if(a===undefined && b===undefined){
//         return -1
//     }
    
//     else if(a.toUpperCase()===a && b.toUpperCase()===b ||
//     a.toLowerCase()===a && b.toLowerCase()===b){
//         return 1
//     }
    
//     else  0
    
// }

// console.log(test1("F","0"))


// function isCharacterALetter(char) {
//     return (/[a-zA-Z]/).test(char)
//   }


//   console.log(isCharacterALetter("B"))

  




















