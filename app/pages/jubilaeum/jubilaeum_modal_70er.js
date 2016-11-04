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
var global_vars_1 = require("../../providers/global-vars/global-vars");
var JubilaeumModal70er = (function () {
    function JubilaeumModal70er(viewCtrl, global) {
        this.viewCtrl = viewCtrl;
        this.global = global;
    }
    JubilaeumModal70er.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    JubilaeumModal70er = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/jubilaeum/jubilaeum_modal_70er.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.ViewController, global_vars_1.GlobalVars])
    ], JubilaeumModal70er);
    return JubilaeumModal70er;
}());
exports.JubilaeumModal70er = JubilaeumModal70er;
