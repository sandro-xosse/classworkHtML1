import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Output()emitTitle=new EventEmitter<string>();

  childTitle='title from child';

  changeTitle(): void {
    this.emitTitle.next(this.childTitle);
  }


}
