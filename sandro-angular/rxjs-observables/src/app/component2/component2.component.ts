import { Component } from '@angular/core';
import { DatamenagmentserviceService } from '../services/datamenagmentservice.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {

  constructor(
    public datamenagmentserviceService:DatamenagmentserviceService
  ){}


  setData():void{
    this.datamenagmentserviceService.data.next('new value')
  }
}
