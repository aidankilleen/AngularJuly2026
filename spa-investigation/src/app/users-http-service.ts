import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {

  public http = inject(HttpClient);
  private url = "http://localhost:3000/users"

  public users:User[] = [ ];

  constructor() {

  }

  getUsers():Observable<User[]> {

    return this.http.get<User[]>(this.url);

  }

  getUsersOriginal() {
    // HttpClient
    // uses Observables - not promises, doesn't return data directly

    // the fetch api returns a promise
    // the http request is made
    // even if you don't supply a then()
    //fetch(this.url)
      //.then((data)=>{
      //  console.log(data)
      //})

    // in an observable the request
    // is only made when someone subscribes
    this.http.get(this.url)
      //.subscribe((data)=>{
      //  console.log(data);
      //});
  }

}
