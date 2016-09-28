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
var ionic_angular_2 = require("ionic-angular");
var facebook_service_1 = require("../../providers/facebook-service/facebook-service");
var global_vars_1 = require("../../providers/global-vars/global-vars");
var AktuellesPage = (function () {
    function AktuellesPage(navController, global, facebookService) {
        this.navController = navController;
        this.global = global;
        this.facebookService = facebookService;
        this.nav_title = "Aktuelles";
        this.title = "cuti und stier - Internetagentur";
        this.page_id = "PrinzengardeGL"; // your page_id here
        this.loadFacebookFeed();
        this.data = {};
        this.storage = new ionic_angular_2.Storage(ionic_angular_2.SqlStorage);
        console.log(this.storage);
        this.storage.query("CREATE TABLE IF NOT EXISTS facebook_posts(\n          date CHAR(5) PRIMARY KEY,\n          location CHAR(40),\n          icon CHAR(30),\n          tempCurrent INT,\n          tempMin INT,\n          tempMax INT\n         )");
    }
    AktuellesPage.prototype.loadFacebookFeed = function () {
        var _this = this;
        this.facebookService.load()
            .then(function (data) {
            _this.facebook_feed = data;
        });
    };
    AktuellesPage.prototype.show_more = function (id) {
        var content_div = document.getElementById(id);
        content_div.className = "expand";
        var content_button = document.getElementById(id + "_button");
        content_button.className = "expand_hide";
    };
    AktuellesPage.prototype.open_facebook = function (id) {
        var ids = id.split("_");
        window.open("https://www.facebook.com/" + this.page_id + "/posts/" + ids[1], "_blank");
    };
    AktuellesPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/aktuelles/aktuelles.html",
            providers: [facebook_service_1.FacebookService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars, facebook_service_1.FacebookService])
    ], AktuellesPage);
    return AktuellesPage;
}());
exports.AktuellesPage = AktuellesPage;
