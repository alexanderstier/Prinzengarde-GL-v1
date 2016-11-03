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
var http_1 = require("@angular/http");
var common_1 = require('@angular/common');
var global_vars_1 = require("../../providers/global-vars/global-vars");
var KontaktPage = (function () {
    function KontaktPage(navController, global, formBuilder, http) {
        this.navController = navController;
        this.global = global;
        this.formBuilder = formBuilder;
        this.nav_title = "Kontakt";
        this.title = "Kontakt";
        this.sendernameChanged = false;
        this.sendermailChanged = false;
        this.subjectChanged = false;
        this.messageChanged = false;
        this.submitAttempt = false;
        this.submitSuccess = false;
        this.submitError = false;
        this.http = http;
        this.mailgunUrl = "mailgun.cutiundstier.de";
        this.mailgunApiKey = window.btoa("api:key-204432a6b3ac86b8b5db84f365a4b3a8");
        this.kontaktForm = formBuilder.group({
            sendername: ['', common_1.Validators.compose([common_1.Validators.maxLength(30), common_1.Validators.pattern('[a-zA-Z ]*'), common_1.Validators.required])],
            sendermail: ['', common_1.Validators.required],
            subject: ['Anfrage �ber die Prinzengarde-App', common_1.Validators.required],
            message: ['', common_1.Validators.required]
        });
    }
    KontaktPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    KontaktPage.prototype.send = function () {
        var _this = this;
        console.log(this.kontaktForm.value);
        if (this.kontaktForm.valid) {
            var requestHeaders = new http_1.Headers;
            requestHeaders.append("Access-Control-Allow-Headers", "{Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With}");
            requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
            requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            this.http.request(new http_1.Request({
                method: http_1.RequestMethod.Post,
                url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
                body: "from=" + this.kontaktForm.value.sendermail + "&to=webmaster@prinzengarde-gl.de&subject=" + this.kontaktForm.value.subject + "&text=" + this.kontaktForm.value.message,
                headers: requestHeaders
            }))
                .subscribe(function (success) {
                console.log("SUCCESS -> " + JSON.stringify(success));
                _this.submitSuccess = true;
                _this.submitAttempt = false;
            }, function (error) {
                console.log("ERROR -> " + JSON.stringify(error));
                _this.submitError = true;
                _this.submitAttempt = false;
            });
        }
        else {
            this.submitAttempt = true;
        }
    };
    KontaktPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/kontakt/kontakt.html"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars, common_1.FormBuilder, http_1.Http])
    ], KontaktPage);
    return KontaktPage;
}());
exports.KontaktPage = KontaktPage;
