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
var jubilaeum_modal_vorgeschichte_1 = require('./jubilaeum_modal_vorgeschichte');
var jubilaeum_modal_1966_1 = require('./jubilaeum_modal_1966');
var jubilaeum_modal_60er_1 = require('./jubilaeum_modal_60er');
var JubilaeumPage = (function () {
    function JubilaeumPage(navController, global) {
        this.navController = navController;
        this.global = global;
        this.nav_title = "Jubil�um";
        this.title = "50 Jahre Prinzengarde";
    }
    JubilaeumPage.prototype.openJubilaeumModalVorgeschichte = function () {
        var jubilaeumModalVorgeschichte = ionic_angular_1.Modal.create(jubilaeum_modal_vorgeschichte_1.JubilaeumModalVorgeschichte);
        this.navController.present(jubilaeumModalVorgeschichte);
    };
    JubilaeumPage.prototype.openJubilaeumModal1966 = function () {
        var jubilaeumModal1966 = ionic_angular_1.Modal.create(jubilaeum_modal_1966_1.JubilaeumModal1966);
        this.navController.present(jubilaeumModal1966);
    };
    JubilaeumPage.prototype.openJubilaeumModal60er = function () {
        var jubilaeumModal60er = ionic_angular_1.Modal.create(jubilaeum_modal_60er_1.JubilaeumModal60er);
        this.navController.present(jubilaeumModal60er);
    };
    JubilaeumPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/jubilaeum/jubilaeum.html"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars])
    ], JubilaeumPage);
    return JubilaeumPage;
}());
exports.JubilaeumPage = JubilaeumPage;
