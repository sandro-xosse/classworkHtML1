import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit,OnChanges{

  @Input("changed") changed!:boolean;
  
  ngOnInit(): void {
    this.getToDos('todo')
  }

  ngOnChanges():void{
    this.getToDos('todo')
  }

  changedToDo(){
    this.getToDos('todo')
  }

  toDoList:string[]=[];

  getToDos(key:string):void{
    let toDos:string|null=localStorage.getItem(key);
    if(toDos) this.toDoList=JSON.parse(toDos)  
  }
  
}
