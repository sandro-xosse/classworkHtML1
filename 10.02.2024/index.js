// let a=6;

// a>10?console.log('Hello'):console.log('Good Buy')

// // if(a!=null){b=a}
// // if(a!==null && a!==undefined){b=a}

// console.log(a)

// let firstName ='John';
// let age = 29;
// console.log(firstName+' '+age)

// let job,isMarried;
// job='teacher';
// isMarried=false;

// console.log(firstName + ' is a '+ age + ' year old ' + job + '. Is he married? ' + isMarried)

// let markMass,markHeight;
// markMass = 80;
// markHeight = 1.6;

// let johnMass,johnHeight;
// johnMass = 85;
// johnHeight = 1.7;

// let markBmi=markMass / (markHeight**2)
// let johnBmi=johnMass / (johnHeight**2)



// let higHer=markBmi>johnBmi;

// console.log(markBmi)
// console.log(johnBmi)
// console.log("Is Mark's BMI higher than John's " + higHer)


// if(markBmi>johnBmi){
//     console.log("Mark's BMI higher than John's BMI")
// }
// else if (johnBmi>markBmi){
//     console.log("John's BMI higher than Mark's BMI")
// }

// markBmi>johnBmi?console.log("Mark's BMI higher than John's BMI"):("John's BMI higher than Mark's BMI")

// let firstName = 'Sandro'
// let age=26;

// if (age<13){
//     console.log(firstName + 'is ad boy.')
// }
// else if (age>=13 && age<20){
//     console.log(firstName + 'is a tenagger.')
// }
// else if (age>=20 && age<30){
//     console.log(firstName + 'is a yang man.')
// }
// else {
//     console.log(firstName + 'is a man.')
// }

// console.log(firstName)

const johnScore=[90,120,103]
const mikeScore=[116,94,123]

function sum(arr){
    let res=0
    for(let i=0; i<arr.lenght; i++){
        res+=arr[i]
    }
    return res;
}


function average(arr){
    return sum(arr)/arr.lenght
}

let JohnAverageScore=average(johnScore)
let MikeAverageScore=average(mikeScore)
console.log(JohnAverageScore,MikeAverageScore)

if (JohnAverageScore>MikeAverageScore){
    console.log("winner is " + JohnAverageScore + "score")
}
else if (MikeAverageScore>JohnAverageScore){
    console.log("winner is " + MikeAverageScore + "score")
}
else{
    console.log("game end with draw")
}