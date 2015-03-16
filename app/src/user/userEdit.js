import {WebAPI} from 'src/service';

export class User{
  static inject() { return [WebAPI]; }
  constructor(service){
    this.heading = 'Edit User';
    this.User = {
      id: undefined,
      firstName:  undefined,
      lastName:  undefined,
    };

    this.service = service;
  }

  activate(params){
    this.service.getUser(params.id).then(result => {
      if (result.isSuccess){
        this.User = $.parseJSON(result.response);
      }
      else
        alert('Error!');
    });
  }

  save(){
    this.service.updateUser(this.User.id, this.User).then(result => {
      if (result.isSuccess)
        alert('Success!');
      else
        alert('Error!');
    });
  }
}