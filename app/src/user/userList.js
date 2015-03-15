import {WebAPI} from 'src/service';

export class User{
  static inject() { return [WebAPI]; }
  constructor(service){
    this.heading = 'User List';
    this.Users = [];
    this.service = service;

    this.service.getAllUsers().then(result => {
      if (!result.isSuccess)
        alert('Error!');
      else
        this.Users = $.parseJSON(result.response);
    });
  }
}
