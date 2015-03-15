import {WebAPI} from 'src/service';

export class User{
  
  getAll() {
    this.service.getAllUsers().then(result => {
      if (!result.isSuccess)
        alert('Error!');
      else
        this.Users = $.parseJSON(result.response);
    });
  }

  static inject() { return [WebAPI]; }
  constructor(service){
    this.heading = 'User List';
    this.Users = [];
    this.service = service;
    this.getAll();
  }

  removeUser(userId){
    var userToRemove = {
      id: userId
    };

    this.service.removeUser(userToRemove).then(result => {
      if (result.isSuccess){
        alert('Success!');
        this.getAll();
      }
      else
        alert('Error!');
    });
  }
}
