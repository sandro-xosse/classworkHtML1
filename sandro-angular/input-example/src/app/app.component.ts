import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentTitle:string="title from parent"

  change(){
    this.parentTitle='new'
  }
}
