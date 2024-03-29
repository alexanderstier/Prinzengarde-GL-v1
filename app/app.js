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
var global_vars_1 = require("./providers/global-vars/global-vars");
var aktuelles_1 = require("./pages/aktuelles/aktuelles");
var auftrittsplan_1 = require("./pages/auftrittsplan/auftrittsplan");
var impressum_1 = require("./pages/impressum/impressum");
var jubilaeum_1 = require("./pages/jubilaeum/jubilaeum");
var kontakt_1 = require("./pages/kontakt/kontakt");
var mitglieder_1 = require("./pages/mitglieder/mitglieder");
var login_1 = require("./pages/login/login");
var termine_1 = require("./pages/termine/termine");
var PgGlApp = (function () {
    function PgGlApp(platform, globalVars) {
        this.platform = platform;
        this.globalVars = globalVars;
        this.appPages = [
            { title: "Aktuelles", icon: "paper", image: "", component: aktuelles_1.AktuellesPage },
            { title: "50 Jahre Prinzengarde", icon: "", image: "images/Icon_Jubilaeum.png", component: jubilaeum_1.JubilaeumPage },
            { title: "Termine", icon: "calendar", image: "", component: termine_1.TerminePage },
            { title: "Kontakt", icon: "mail", image: "", component: kontakt_1.KontaktPage },
        ];
        this.loggedInPages = [
            { title: "Mitgliederliste", icon: "contact", image: "", component: mitglieder_1.MitgliederPage },
            { title: "Auftrittsplan", icon: "alarm", image: "", component: auftrittsplan_1.AuftrittsplanPage }
        ];
        this.loggedOutPages = [
            { title: "Login", icon: "key", image: "", component: login_1.LoginPage }
        ];
        this.metaPages = [
            { title: "Impressum", icon: "copy", image: "", component: impressum_1.ImpressumPage }
        ];
        this.rootPage = aktuelles_1.AktuellesPage;
        // call any initial plugins when ready
        platform.ready().then(function () {
            /*
            StatusBar.styleDefault();
            Splashscreen.hide();
            */
        });
    }
    PgGlApp.prototype.openPage = function (page) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], PgGlApp.prototype, "nav", void 0);
    PgGlApp = __decorate([
        core_1.Component({
            templateUrl: "build/app.html",
            providers: [global_vars_1.GlobalVars]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, global_vars_1.GlobalVars])
    ], PgGlApp);
    return PgGlApp;
}());
core_1.enableProdMode();
ionic_angular_1.ionicBootstrap(PgGlApp, null, { mode: "md" });
