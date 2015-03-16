import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Example App';
      config.map([
        { route: ['','home'],  moduleId: './home/home',      nav: true, title:'Home' },
        { route: 'user',        moduleId: './user/userList', nav: true, title:'Users'},
        { route: 'user/new',        moduleId: './user/userNew', nav: false, title:'New User'},
        { route: 'user/edit/:id',        moduleId: './user/userEdit', nav: false, title:'Edit User'}
      ]);
    });
  }
}
