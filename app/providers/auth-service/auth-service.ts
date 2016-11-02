import {Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private globalVars: GlobalVars
    ) {
    }

    login(user) {
        //console.log(user);
        var headers = new Headers();
        var creds = "?type=19664&tx_cusappconnect_json_auth[action]=login&tx_cusappconnect_json_auth[username]=" + user.username + "&tx_cusappconnect_json_auth[password]=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        //console.log(creds);

        return new Promise(resolve => {

            this.http.get('http://www.prinzengarde-gl.de/' + creds).subscribe(data => {
                console.log(data.json().result);
                if (data.json().result == "login successfull") {
                    window.localStorage.setItem('prinzengarde', data.json().token);
                    this.globalVars.isLoggedin = true;
                    this.globalVars.isLoggedout = false;
                    resolve(true);
                }
                else
                    resolve(false);

            });

        });


    }
    
    logout() {
        this.globalVars.isLoggedin = false;
        window.localStorage.clear();
    }
}