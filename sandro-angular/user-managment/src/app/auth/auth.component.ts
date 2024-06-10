import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { IUser } from '../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type NewType = Router;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    
}
