import {HttpClient} from 'aurelia-http-client';

export class WebAPI {
    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
    }

    getAllUsers(textSearch){
        return this.http.get('api/user?textSearch=' + textSearch);
    }

    saveUser(data){
        return this.http.post('api/user', data);
    }

    removeUser(id){
        return this.http.delete('api/user/' + id);
    }

    updateUser(id, data){
        return this.http.put('api/user/' + id, data);
    }

    getUser(id){
        return this.http.get('api/user/' + id);
    }
}