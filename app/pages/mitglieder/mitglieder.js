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
var mitglieder_service_1 = require("../../providers/mitglieder-service/mitglieder-service");
var global_vars_1 = require("../../providers/global-vars/global-vars");
var MitgliederPage = (function () {
    function MitgliederPage(nav, global, mitgliederService) {
        this.nav = nav;
        this.global = global;
        this.mitgliederService = mitgliederService;
        this.nav_title = "Mitgliederliste";
        this.title = "Mitgliederliste";
        this.loadMitglieder();
    }
    MitgliederPage.prototype.loadMitglieder = function () {
        var _this = this;
        this.mitgliederService.load()
            .then(function (data) {
            _this.mitglieder = data;
            _this.mitgliederFilter = data;
        });
    };
    MitgliederPage.prototype.searchMitglieder = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== "") {
            this.mitgliederFilter = this.mitglieder.filter(function (mitglied) {
                return (mitglied.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.mitgliederFilter = this.mitglieder;
        }
    };
    MitgliederPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/mitglieder/mitglieder.html",
            providers: [mitglieder_service_1.MitgliederService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars, mitglieder_service_1.MitgliederService])
    ], MitgliederPage);
    return MitgliederPage;
}());
exports.MitgliederPage = MitgliederPage;
