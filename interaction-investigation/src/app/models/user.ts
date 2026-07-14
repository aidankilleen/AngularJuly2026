export class User {

  // putting public or private in front of a parameter to a constructor
  // creates the member variable and does the assignment
  constructor(public id:number,
              public name:string,
              public email:string,
              public active:boolean) {

  }
  /*
  public id: number;
  public name: string;
  public email: string;
  public active: boolean;

  constructor(id:number, name:string, email:string, active:boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.active = active;
  }
    */
}
