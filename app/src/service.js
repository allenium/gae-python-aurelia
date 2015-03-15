import {HttpClient} from 'aurelia-http-client';

export class WebAPI {
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }

    getAllUsers(){
        console.log('here');
        return this.http.get('api/get');
    }

    saveUser(data){
        return this.http.post('api/create', data);
    }
}