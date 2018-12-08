import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

    private url = 'http://localhost:3001/';
    public player = {
        user: '',
        avatar: '',
        event: '',
        name: ''
    };

    constructor (private http: HttpClient) {
    }

    public login(user, pass): Observable<any> {
        this.player.user = user;
        return this.http.post<any>(this.url + 'login', this.getPayload(user, pass), this.getHeaders());
    }

    public setPlayer({avatar, event, name}) {
        this.player.avatar = avatar;
        this.player.event = event;
        this.player.name = name;
    }

    private getHeaders() {
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }

    private getPayload(user: string, pass?: string) {
        return {
            username: user,
            password: pass
        };
    }


}
