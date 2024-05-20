import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string='';
  nodariTitle:string=''

  getTitle(parentTitle:string):void{
    this.title=parentTitle;
  }

  getNodari(parentTitle2:string):void{
    this.nodariTitle=parentTitle2
  }



}
