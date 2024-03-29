import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { MitgliederService } from "../../providers/mitglieder-service/mitglieder-service";
import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: "build/pages/mitglieder/mitglieder.html",
    providers: [MitgliederService]
})
export class MitgliederPage {

    nav_title = "Mitgliederliste";
    title = "Mitgliederliste";

    public mitglieder: any;
    public mitgliederFilter: any;

    constructor(
        private nav: NavController,
        private global: GlobalVars,
        public mitgliederService: MitgliederService
    ) {
        this.loadMitglieder();
    }

    loadMitglieder():void {
        this.mitgliederService.load()
            .then(data => {
                this.mitglieder = data;
                this.mitgliederFilter = data;
            });
    }

    searchMitglieder(ev:any):any {

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() !== "") {
            this.mitgliederFilter = this.mitglieder.filter((mitglied) => {
                return (mitglied.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        } else {
            this.mitgliederFilter = this.mitglieder;
        }
    }

}
 