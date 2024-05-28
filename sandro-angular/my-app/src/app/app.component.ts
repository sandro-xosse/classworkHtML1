import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  changed=false;
  editToDotitle=''

  change(key:string){
    this.changed=!this.changed
  }

  transferTitle(title:string){
    this.editToDotitle=title;
  }
}
