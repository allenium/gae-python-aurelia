import {WebAPI} from 'src/service';
import {Router} from 'aurelia-router';

export class User{

  search() {
    this.service.getAllUsers(this.textSearch).then(result => {
      if (!result.isSuccess)
        alert('Error!');
      else
        this.Users = $.parseJSON(result.response);
    });
  }

  static inject() { return [WebAPI, Router]; }
  constructor(service, route){
    this.heading = 'User List';
    this.Users = [];
    this.textSearch = '';
    this.service = service;
    this.route = route;
    this.search();
  }

  updateUser(userId){
    this.route.navigate("user/edit/" + userId);
  }

  newUser(userId){
    this.route.navigate("user/new");
  }

  removeUser(userId){
    this.service.removeUser(userId).then(result => {
      if (result.isSuccess){
        alert('Success!');
        this.search();
      }
      else
        alert('Error!');
    });
  }
}
