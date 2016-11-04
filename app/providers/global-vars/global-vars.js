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
var GlobalVars = (function () {
    function GlobalVars() {
        this.usercreds = {
            username: '',
            password: ''
        };
        this.logo = "images/logo.png";
        this.slogan = "images/slogan.png";
        this.logo_aktuelles = "";
        this.logo_auftrittsplan = "";
        this.logo_impressum = "";
        this.logo_jubilaeum = "images/Icon_Jubilaeum.png";
        this.logo_kontakt = "images/Icon_Kontakt.png";
        this.logo_login = "";
        this.logo_mitglieder = "";
        this.logo_termine = "";
        this.isLoggedin = false;
        this.isLoggedout = true;
    }
    GlobalVars.prototype.convertISO8601toDate = function (dtstr) {
        // replace anything but numbers by spaces
        dtstr = dtstr.replace(/\D/g, " ");
        // trim any hanging white space
        dtstr = dtstr.replace(/\s+$/, "");
        // split on space
        var dtcomps = dtstr.split(" ");
        // not all ISO 8601 dates can convert, as is
        // unless month and date specified, invalid
        if (dtcomps.length < 3)
            return "invalid date";
        // if time not provided, set to zero
        if (dtcomps.length < 4) {
            dtcomps[3] = 0;
            dtcomps[4] = 0;
            dtcomps[5] = 0;
        }
        // modify month between 1 based ISO 8601 and zero based Date
        dtcomps[1]--;
        var convdt = new Date(Date.UTC(dtcomps[0], dtcomps[1], dtcomps[2], dtcomps[3], dtcomps[4], dtcomps[5]));
        return convdt.toLocaleString();
        ;
    };
    GlobalVars = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GlobalVars);
    return GlobalVars;
}());
exports.GlobalVars = GlobalVars;
