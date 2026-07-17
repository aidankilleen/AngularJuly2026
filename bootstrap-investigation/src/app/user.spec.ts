import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {

    let u:User = {id:1, name:"alice", email:"alice@gmail.com", active:false};
    expect(u).toBeTruthy();
  });
});
