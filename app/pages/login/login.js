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
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var global_vars_1 = require("../../providers/global-vars/global-vars");
var auth_service_1 = require('../../providers/auth-service/auth-service');
var mitglieder_1 = require("../../pages/mitglieder/mitglieder");
var LoginPage = (function () {
    function LoginPage(navController, global, authService) {
        this.navController = navController;
        this.global = global;
        this.authService = authService;
        this.nav_title = "Anmeldung";
        this.title = "Mitglieder-Anmeldung";
        this.global.usercreds = {
            username: '',
            password: ''
        };
    }
    LoginPage.prototype.login = function (usercreds) {
        var _this = this;
        this.authService.login(usercreds).then(function (data) {
            console.log(data);
            if (data)
                _this.navController.setRoot(mitglieder_1.MitgliederPage);
        });
    };
    LoginPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/login/login.html",
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars, auth_service_1.AuthService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
