import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

/*
  Generated class for the MitgliederService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MitgliederService {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load() {

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    /**
     * Generic array sorting
     *
     * @param property
     * @returns {Function}
     */
    var sortByProperty = function (property) {
        return function (x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
        };
    };

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      //  this.http.get("https://randomuser.me/api/?results=25")
        this.http.get("http://www.prinzengarde-gl.de/mitglieder/")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.sort(sortByProperty('lastName'));
          resolve(this.data);
        });
    });

  }
}
