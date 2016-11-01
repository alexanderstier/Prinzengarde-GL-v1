import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVars {

    public logo: string;
    public slogan: string;
    public logo_aktuelles: string;
    public logo_kontakt: string;
    public logo_mitglieder: string;
    public logo_termine: string;
    public logo_login: string;
    public usercreds = {
        username: '',
        password: ''
    };
    public isLoggedin: boolean;
    public isLoggedout: boolean;

    constructor() {
        this.logo = "images/logo.png";
        this.slogan = "images/slogan.png";
        this.logo_aktuelles = "images/Icon_Aktuelles.png";
        this.logo_kontakt = "images/Icon_Kontakt.png";
        this.logo_mitglieder = "images/Icon_Mitglieder.png";
        this.logo_termine = "images/Icon_Termine.png";
        this.logo_login = "images/Icon_Login.png";
        this.isLoggedin = false;
        this.isLoggedout = true;
    }

}
