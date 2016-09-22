import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FacebookService } from '../../providers/facebook-service/facebook-service';

@Component({
    templateUrl: 'build/pages/aktuelles/aktuelles.html',
    providers: [FacebookService]
})

export class AktuellesPage {

    title = 'Aktuelles';
    page_id: string = 'PrinzengardeGL'; // YOUR_PAGE_ID_HERE
    public facebook_feed: any;

    constructor(private navController: NavController, public facebookService: FacebookService) {

        this.loadFacebookFeed();

    }

    loadFacebookFeed() {
        this.facebookService.load()
        .then(data => {
            this.facebook_feed = data;
        });
    }

    show_more(id) {
        var content_div = document.getElementById(id);
        content_div.className = "expand";
        var content_button = document.getElementById(id+'_button');
        content_button.className = "expand_hide";
    }

    open_facebook(id) {
        var ids = id.split("_");
        var win = window.open("https://www.facebook.com/"+this.page_id+"/posts/"+ids[1], "_blank");
    }

}
