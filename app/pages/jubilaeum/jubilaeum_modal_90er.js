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
var JubilaeumModal90er = (function () {
    function JubilaeumModal90er(viewCtrl, global) {
        this.viewCtrl = viewCtrl;
        this.global = global;
    }
    JubilaeumModal90er.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    JubilaeumModal90er = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/jubilaeum/jubilaeum_modal_90er.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.ViewController, global_vars_1.GlobalVars])
    ], JubilaeumModal90er);
    return JubilaeumModal90er;
}());
exports.JubilaeumModal90er = JubilaeumModal90er;
