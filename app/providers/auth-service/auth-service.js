"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var global_vars_1 = require("../../providers/global-vars/global-vars");
var AuthService = (function () {
    function AuthService(http, globalVars) {
        this.http = http;
        this.globalVars = globalVars;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        //console.log(user);
        var headers = new http_1.Headers();
        var creds = "?type=19664&tx_cusappconnect_json_auth[action]=login&tx_cusappconnect_json_auth[username]=" + user.username + "&tx_cusappconnect_json_auth[password]=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //console.log(creds);
        return new Promise(function (resolve) {
            _this.http.get('https://www.prinzengarde-gl.de/' + creds).subscribe(function (data) {
                console.log(data.json().result);
                if (data.json().result == "login successfull") {
                    window.localStorage.setItem('prinzengarde', data.json().token);
                    _this.globalVars.isLoggedin = true;
                    _this.globalVars.isLoggedout = false;
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.globalVars.isLoggedin = false;
        window.localStorage.clear();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, global_vars_1.GlobalVars])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
