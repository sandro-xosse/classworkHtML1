const paysArray=[123,48,268]

function calcPercent(arr){
    const payPercent=arr.map((item)=>{
        if(item<50){
            let res=item*0.2
            return res
        }
        else if(item>50 && item<200){
            let res2=item*0.15
            return res2
        }
        else{
            let res3=item*0.1
            return res3
        }
    })
    return payPercent
} 

const tipsPrice=calcPercent.map((item)=>{
    item=+item
})







console.log(calcPercent(paysArray))