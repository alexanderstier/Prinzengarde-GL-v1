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
var auftrittsplan_service_1 = require("../../providers/auftrittsplan-service/auftrittsplan-service");
var global_vars_1 = require("../../providers/global-vars/global-vars");
var AuftrittsplanPage = (function () {
    function AuftrittsplanPage(nav, global, auftrittsplanService) {
        this.nav = nav;
        this.global = global;
        this.auftrittsplanService = auftrittsplanService;
        this.nav_title = "Auftrittsplan";
        this.title = "Auftrittsplan";
        this.loadAuftrittsplan();
    }
    AuftrittsplanPage.prototype.loadAuftrittsplan = function () {
        var _this = this;
        this.auftrittsplanService.load()
            .then(function (data) {
            _this.auftrittsplan = data;
        });
    };
    AuftrittsplanPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/auftrittsplan/auftrittsplan.html",
            providers: [auftrittsplan_service_1.AuftrittsplanService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars, auftrittsplan_service_1.AuftrittsplanService])
    ], AuftrittsplanPage);
    return AuftrittsplanPage;
}());
exports.AuftrittsplanPage = AuftrittsplanPage;
