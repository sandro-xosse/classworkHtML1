import {B_URL} from './keys.js'
import { HtmlElement } from './domelement.js';

async function getData(endPoint){
    try{
        const url=B_URL + endPoint;
        HtmlElement.loader.classList.add('active');
        const data=await fetch(url);
        const result=await data.json();
        HtmlElement.loader.classList.remove('active');
        return result
    }catch{
        console.log('catch')
    }
    
}


export async function getCurrency(code){
    try{
        const endPoint=`latest/${code}`
        const result=await getData(endPoint);
        const result2={
            base_code:result.base_code,
            rates:result.conversion_rates
        }          
        return result2

    }catch{
        console.log('catch')
    }
}

export async function getSupported(){
    const endPoint=`codes`
    const result=await getData(endPoint)
    return result.supported_codes
}


export function renderOpsions(supportedCodeArray,currency1,currency2){
    supportedCodeArray.forEach(code => {
        HtmlElement.select_1.innerHTML+=`
        <option ${code[0]==currency1 ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        ` 
        HtmlElement.select_2.innerHTML+=`
        <option ${code[0]==currency2 ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `          
    });
}