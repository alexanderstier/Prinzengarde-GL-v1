import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FacebookService } from '../../providers/facebook-service/facebook-service';

@Component({
    templateUrl: 'build/pages/aktuelles/aktuelles.html',
    providers: [FacebookService]
})

export class AktuellesPage {

    title = 'Aktuelles';
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

    showmore(id) {
        var content_div = document.getElementById(id);
        content_div.className = "expand";
        var content_button = document.getElementById(id+'_button');
        content_button.className = "expand_hide";
    }

}
