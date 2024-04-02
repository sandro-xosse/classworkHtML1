import {B_URL} from './keys.js'
import { HtmlElement } from './domelement.js';

async function getData(endPoint){
    const url=B_URL + endPoint;
    const data=await fetch(url);
    const result=await data.json();
    return result
}


export async function getCurrency(code){
    const endPoint=`latest/${code}`
    const result=await getData(endPoint);
    const result2={
        base_code:result.base_code,
        rates:result.conversion_rates
    }          
    return result2
}

export async function getSupported(){
    const endPoint=`codes`
    const result=await getData(endPoint)
    return result.supported_codes
}


export function renderOpsions(arr){
    arr.forEach(code => {
        HtmlElement.select_1.innerHTML+=`
        <option ${code[0]=="GEL"? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        ` 
        HtmlElement.select_2.innerHTML+=`
        <option value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `          
    });
}