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
var termine_1 = require("./pages/termine/termine");
var kontakt_1 = require("./pages/kontakt/kontakt");
var mitglieder_1 = require("./pages/mitglieder/mitglieder");
var PgGlApp = (function () {
    function PgGlApp(platform) {
        this.platform = platform;
        this.appPages = [
            { title: "Aktuelles", icon: "paper", image: "", component: aktuelles_1.AktuellesPage },
            { title: "Kontakt", icon: "mail", image: "", component: kontakt_1.KontaktPage },
        ];
        this.loggedInPages = [
            { title: "Termine", icon: "calendar", image: "", component: termine_1.TerminePage },
            { title: "Mitglieder", icon: "contact", image: "", component: mitglieder_1.MitgliederPage }
        ];
        this.loggedOutPages = [];
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
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], PgGlApp);
    return PgGlApp;
}());
// enableProdMode();
ionic_angular_1.ionicBootstrap(PgGlApp, null, { mode: "md" });
