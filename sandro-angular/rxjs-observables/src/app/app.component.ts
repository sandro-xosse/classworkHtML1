import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-observables';

  // private count1:Subject<number[]>=new Subject();

  // setData(param:number[]):void{
  //   this.count1.next([1,2,3])
  // }

  // logSubject():void{
  //   this.count1.subscribe((d) =>console.log('subject data:', d));
  // }
  // -------------------------------------------


}
