import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, find, map } from 'rxjs';
import { IAuthUser, IUser } from '../models/user';
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers():Observable<IUser[]>{
   return this.http.get<IUser[]>('http://localhost:3000/users')
  }

  getUser(id:string):Observable<IUser>{
    return this.http.get<IUser>(`http://localhost:3000/users/${id}`)
   }

  add(user:IUser):Observable<IUser>{
    return this.http.post<IUser>('http://localhost:3000/users',user)
  }

  edit(user:IUser, id:string):Observable<IUser>{
    return this.http.put<IUser>(`http://localhost:3000/users/${id}`,user)
  }

  delete(id:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/users/${id}`)
  }

  signIn(parm:IAuthUser):Observable<IUser|null>{
    return this.getUsers().pipe(
      map((users:IUser[])=>{
        const user:IUser|undefined=users.find((user:IUser)=>user.password===parm.password && user.email===parm.email )
        if(user) return user;
        return null 
      })
    )
  }



}