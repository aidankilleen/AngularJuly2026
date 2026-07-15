import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users:User[] = [
    {id:1, name:"Alice", email:"alice@gmail.com", active:true},
    {id:2, name:"Bob", email:"bob@gmail.com", active:false},
    {id:3, name:"Carol", email:"carol@gmail.com", active:true},
    {id:4, name:"Dan", email:"dan@gmail.com", active:true},
    {id:5, name:"Eve", email:"eve@gmail.com", active:false}
  ];

  getUsers():User[] {
    return this.users;
  }
  getUser(id:number):User | undefined {
    return this.users.find(user=>user.id == id);
  }
}
