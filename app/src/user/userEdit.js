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

  activate(params, queryString, routeConfig){
    console.log(params.id)
  }

  save(){
    this.service.updateUser(this.User).then(result => {
      if (result.isSuccess)
        alert('Success!');
      else
        alert('Error!');
    });
  }
}