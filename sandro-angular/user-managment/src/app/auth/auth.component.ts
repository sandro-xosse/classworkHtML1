import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { IUser } from '../models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  user$!:BehaviorSubject<IUser | null>
  constructor(
    private storageService:StorageService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.user$=this.storageService.user$
  }

  logout():void{
    this.storageService.clearUser();
    this.router.navigate(['']);
  }
}