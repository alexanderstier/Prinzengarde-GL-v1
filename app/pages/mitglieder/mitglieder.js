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
var ionic_angular_1 = require('ionic-angular');
var mitglieder_service_1 = require('../../providers/mitglieder-service/mitglieder-service');
var MitgliederPage = (function () {
    function MitgliederPage(nav, mitgliederService) {
        this.nav = nav;
        this.mitgliederService = mitgliederService;
        this.title = 'Mitglieder';
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
        if (val && val.trim() != '') {
            this.mitgliederFilter = this.mitglieder.filter(function (mitglied) {
                return (mitglied.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1 || mitglied.name.last.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MitgliederPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/mitglieder/mitglieder.html',
            providers: [mitglieder_service_1.MitgliederService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, mitglieder_service_1.MitgliederService])
    ], MitgliederPage);
    return MitgliederPage;
}());
exports.MitgliederPage = MitgliederPage;
