import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MitgliederService } from '../../providers/mitglieder-service/mitglieder-service';

@Component({
    templateUrl: 'build/pages/mitglieder/mitglieder.html',
    providers: [MitgliederService]
})

export class MitgliederPage {

    title = 'Mitglieder';
    public mitglieder: any;
    public mitgliederFilter: any;

    constructor(private nav: NavController, public mitgliederService: MitgliederService) {

        this.loadMitglieder();

    }

    loadMitglieder() {
        this.mitgliederService.load()
            .then(data => {
                this.mitglieder = data;
                this.mitgliederFilter = data;
            });
    }

    searchMitglieder(ev) {

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.mitgliederFilter = this.mitglieder.filter((mitglied) => {
                return (mitglied.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1 || mitglied.name.last.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
