import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Storage, SqlStorage } from "ionic-angular";

import { FacebookService } from "../../providers/facebook-service/facebook-service";
import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: "build/pages/aktuelles/aktuelles.html",
    providers: [FacebookService]
})

export class AktuellesPage {

    nav_title: string = "Aktuelles";
    title = "cuti und stier - Internetagentur";

    public data: any;
    public errorMessage: any;
    public storage: Storage;

    page_id: string = "PrinzengardeGL"; // your page_id here
    public facebook_feed: any;

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        public facebookService: FacebookService
    ) {

        this.loadFacebookFeed();

        this.data = {};
        this.storage = new Storage(SqlStorage);
        console.log(this.storage);
        this.storage.query(`CREATE TABLE IF NOT EXISTS facebook_posts(
          date CHAR(5) PRIMARY KEY,
          location CHAR(40),
          icon CHAR(30),
          tempCurrent INT,
          tempMin INT,
          tempMax INT
         )`);
    }

    loadFacebookFeed():void {
        this.facebookService.load()
            .then(data => {
            this.facebook_feed = data;
        });
    }

    show_more(id:string):void {
        var content_div:any = document.getElementById(id);
        content_div.className = "expand";
        var content_button:any = document.getElementById(id+"_button");
        content_button.className = "expand_hide";
    }

    open_facebook(id: string): void {
        var ids:any = id.split("_");
        window.open("https://www.facebook.com/"+this.page_id+"/posts/"+ids[1], "_blank");
    }

}
