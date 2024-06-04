import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatamenagmentserviceService {

  constructor() { }

  data:BehaviorSubject<string>=new BehaviorSubject('init value');

}
