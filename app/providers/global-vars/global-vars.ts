import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVars {

    public logo: string;
    public slogan: string;
    public logo_aktuelles: string;
    public logo_auftrittsplan: string;
    public logo_impressum: string;
    public logo_jubilaeum: string;
    public logo_kontakt: string;
    public logo_login: string;
    public logo_mitglieder: string;
    public logo_termine: string;
    public usercreds = {
        username: '',
        password: ''
    };
    public isLoggedin: boolean;
    public isLoggedout: boolean;

    constructor() {
        this.logo = "images/logo.png";
        this.slogan = "images/slogan.png";
        this.logo_aktuelles = "";
        this.logo_auftrittsplan = "";
        this.logo_impressum = "";
        this.logo_jubilaeum = "images/Icon_Jubilaeum.png";
        this.logo_kontakt = "images/Icon_Kontakt.png";
        this.logo_login = "";
        this.logo_mitglieder = "";
        this.logo_termine = "";
        this.isLoggedin = false;
        this.isLoggedout = true;
    }

    public convertISO8601toDate(dtstr) {

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
