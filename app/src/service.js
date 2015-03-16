import {HttpClient} from 'aurelia-http-client';

export class WebAPI {
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }

    getAllUsers(){
        return this.http.get('api/list');
    }

    saveUser(data){
        return this.http.post('api/create', data);
    }

    removeUser(data){
        return this.http.post('api/delete', data);
    }

    updateUser(id, data){
        return this.http.post('api/update/' + id, data);
    }

    getUser(id){
        return this.http.get('api/' + id);
    }
}