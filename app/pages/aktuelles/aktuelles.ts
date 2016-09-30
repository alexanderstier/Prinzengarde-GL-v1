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
    title = "Prinzengarde Bergisch Gladbach";

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

    convertISO8601toDate(dtstr) {

        // replace anything but numbers by spaces
        dtstr = dtstr.replace(/\D/g, " ");

        // trim any hanging white space
        dtstr = dtstr.replace(/\s+$/, "");

        // split on space
        var dtcomps = dtstr.split(" ");

        // not all ISO 8601 dates can convert, as is
        // unless month and date specified, invalid
        if (dtcomps.length < 3) return "invalid date";
        // if time not provided, set to zero
        if (dtcomps.length < 4) {
            dtcomps[3] = 0;
            dtcomps[4] = 0;
            dtcomps[5] = 0;
        }

        // modify month between 1 based ISO 8601 and zero based Date
        dtcomps[1]--;

        var convdt = new
            Date(Date.UTC(dtcomps[0], dtcomps[1], dtcomps[2], dtcomps[3], dtcomps[4], dtcomps[5]));

        return convdt.toLocaleString();;
    }

}
