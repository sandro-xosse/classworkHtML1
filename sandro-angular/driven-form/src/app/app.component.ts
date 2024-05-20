import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driven-form';
  name:string='sandro';
  changeName():void{
    this.name='dachi'
  }

  submit(form:NgForm):void{
    console.log(form.form.controls['firstName']);
  }
}
