import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Example App';
      config.map([
        { route: ['','home'],  moduleId: './home/home',      nav: true, title:'Welcome' },
        { route: 'user/new',        moduleId: './user/user', nav: true, title:'Users Registration'}
      ]);
    });
  }
}
