import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nodari',
  templateUrl: './nodari.component.html',
  styleUrls: ['./nodari.component.css']
})
export class NodariComponent {
  @Output() emitTitle2=new EventEmitter<string>();

  nodariTitle='hy nodari';

  changeNodariTitle():void{
    this.emitTitle2.next(this.nodariTitle)
  }
}
