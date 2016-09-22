import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MitgliederService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FacebookService {

    access_token: string = '1813040312316525|X7DwKIwfsrzMCqo92ICruO-BkyM'; //YOUR_ACCESS_TOKEN_HERE
    page_id: string = 'PrinzengardeGL'; // YOUR_PAGE_ID_HERE
    pagetype: string = 'page';  // 'page' or 'group'
    url: string = 'https://graph.facebook.com/v2.6/';
    query: string = 'feed'
    fields: string = 'id,from{name,id,picture},message,message_tags,story,story_tags,picture,full_picture,link,source,name,caption,description,type,status_type,object_id,created_time,attachments{subattachments},shares,likes{id,name},comments{id,from,message,message_tags,created_time,like_count,comment_count,attachment}';
    limit: number = 20;
    format: string = 'json-strings';
    data: any;

    constructor(private http: Http) {
        this.data = null;
    }

    load() {

        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }

        // don't have the data yet
        return new Promise(resolve => {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            this.http.get(this.url + this.page_id + '/' + this.query + '/?fields=' + this.fields + '&limit=' + this.limit + '&access_token=' + this.access_token + '&format=' + this.format)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data = data.data;
                    resolve(this.data);
                });
        });

    }
}

