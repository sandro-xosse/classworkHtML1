import { Component, OnInit } from '@angular/core';
import { DatamenagmentserviceService } from '../services/datamenagmentservice.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {


  public data!:Observable<string>


  constructor(
    public datamenagmentserviceService:DatamenagmentserviceService
  ){}


  ngOnInit(): void {
    this.data=this.datamenagmentserviceService.data.pipe(
      map ((d:string)=>{
        const newText=d+ " modified"
        return newText
      })
    )
  }
}
