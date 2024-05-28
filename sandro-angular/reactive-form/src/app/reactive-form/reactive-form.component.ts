import { Component } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// interface Ieducation{
//   universityName:FormControl<string>,
//   educationStart:FormControl<string>,
//   educationEnd:FormControl<string>
// }

// interface ICV{
//   fisrtName:FormControl<string>,
//   lasrtName:FormControl<string>,
//   education:FormArray<Ieducation>,
// }


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})


export class ReactiveFormComponent {
  public form:FormGroup=new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    education:new FormArray([])
  })

  generateEducation():FormGroup{
    return new FormGroup({
    universityName:new FormControl('',[Validators.required])
    })
  }

  addEducation():void{
    (this.form.controls['education']as FormArray).push(this.generateEducation())
  }

  removeEducation(i:number):void{
    (this.form.controls['education']as FormArray).removeAt(i)
  }

  get educations():FormArray{
    return (this.form.get('education') as FormArray);
  }

  submit():void{
    if(this.form.valid){
      localStorage.setItem('formsValue',JSON.stringify(this.form.value));
      this.form.reset();
      (this.form.controls['education'] as FormArray).clear
      return;
    }
    alert('please fill this for correctly')
  }

  edit():void{
    let formsValue=localStorage.getItem('formsValue');
    if(formsValue){
      let formObj.education.forEach((el:any)=>{
        
      })
    }
  }
}
