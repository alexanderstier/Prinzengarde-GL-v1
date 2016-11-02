import { Component, Pipe } from "@angular/core";
import { NavController } from "ionic-angular";

import { FacebookService } from "../../providers/facebook-service/facebook-service";
import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: "build/pages/aktuelles/aktuelles.html",
    providers: [FacebookService]
})

export class AktuellesPage {

    nav_title: string = "Aktuelles";
    title = "Aktuelle Meldungen";

    page_id: string = "PrinzengardeGL"; // your page_id here
    public facebook_feed: any;

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        public facebookService: FacebookService
    ) {

    }

    ionViewDidEnter() {
        this.loadFacebookFeed();
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
