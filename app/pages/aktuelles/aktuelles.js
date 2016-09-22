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
var facebook_service_1 = require('../../providers/facebook-service/facebook-service');
var AktuellesPage = (function () {
    function AktuellesPage(navController, facebookService) {
        this.navController = navController;
        this.facebookService = facebookService;
        this.title = 'Aktuelles';
        this.page_id = 'PrinzengardeGL'; // YOUR_PAGE_ID_HERE
        this.loadFacebookFeed();
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
        var content_button = document.getElementById(id + '_button');
        content_button.className = "expand_hide";
    };
    AktuellesPage.prototype.open_facebook = function (id) {
        var ids = id.split("_");
        var win = window.open("https://www.facebook.com/" + this.page_id + "/posts/" + ids[1], "_blank");
    };
    AktuellesPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/aktuelles/aktuelles.html',
            providers: [facebook_service_1.FacebookService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, facebook_service_1.FacebookService])
    ], AktuellesPage);
    return AktuellesPage;
}());
exports.AktuellesPage = AktuellesPage;
