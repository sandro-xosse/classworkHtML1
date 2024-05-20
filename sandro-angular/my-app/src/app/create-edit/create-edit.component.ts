import { Component, EventEmitter, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent {
  toDo: string = '';
  inputValid:boolean=true;

  @Output() eventEmitter=new EventEmitter<string>();
  
  submitForm(form: NgForm): void {    
    if (form.valid) {
      this.saveToDo(form.form.controls['todo'].value);
      this.eventEmitter.next('')
      form.reset();
  }
  }
  saveToDo(toDo:string) {
    let toDoList:string[]=[];
    let todo: string | null  = localStorage.getItem('todo');
    if(todo){
      toDoList=JSON.parse(todo);
      toDoList.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoList));
    }
    else{
      toDoList.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoList));
    }
  }
}
