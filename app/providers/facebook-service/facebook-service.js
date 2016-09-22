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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
/*
  Generated class for the MitgliederService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var FacebookService = (function () {
    function FacebookService(http) {
        this.http = http;
        this.access_token = '1813040312316525|X7DwKIwfsrzMCqo92ICruO-BkyM'; //YOUR_ACCESS_TOKEN_HERE
        this.page_id = 'PrinzengardeGL'; // YOUR_PAGE_ID_HERE
        this.pagetype = 'page'; // 'page' or 'group'
        this.url = 'https://graph.facebook.com/v2.6/';
        this.query = 'feed';
        this.fields = 'id,from{name,id,picture},message,message_tags,story,story_tags,picture,full_picture,link,source,name,caption,description,type,status_type,object_id,created_time,attachments{subattachments},shares,likes{id,name},comments{id,from,message,message_tags,created_time,like_count,comment_count,attachment}';
        this.limit = 20;
        this.format = 'json-strings';
        this.data = null;
    }
    FacebookService.prototype.load = function () {
        var _this = this;
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            _this.http.get(_this.url + _this.page_id + '/' + _this.query + '/?fields=' + _this.fields + '&limit=' + _this.limit + '&access_token=' + _this.access_token + '&format=' + _this.format)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data.data;
                resolve(_this.data);
            });
        });
    };
    FacebookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FacebookService);
    return FacebookService;
}());
exports.FacebookService = FacebookService;
