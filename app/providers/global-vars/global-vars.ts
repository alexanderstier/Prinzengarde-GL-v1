import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVars {

    public logo: string;
    public slogan: string;
    public logo_aktuelles: string;
    public logo_kontakt: string;
    public logo_mitglieder: string;
    public logo_termine: string;

    constructor() {
        this.logo = "images/logo.png";
        this.slogan = "images/slogan.png";
        this.logo_aktuelles = "images/Icon_Webentwicklung.png";
        this.logo_kontakt = "images/Icon_Kontakt.png";
        this.logo_mitglieder = "images/Icon_Appentwicklung.png";
        this.logo_termine = "images/Icon_Leistungen.png";
    }

}
