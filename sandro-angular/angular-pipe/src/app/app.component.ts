import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipe';

  myNumber:number[]=[1,2,3];

  public changeArray():void{
    this.myNumber.push(4);
    this.myNumber=[...this.myNumber]
  }
}
