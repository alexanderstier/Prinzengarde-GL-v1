import { Component, ViewChild, enableProdMode } from "@angular/core";
import { App, Events, ionicBootstrap, Nav, Platform } from "ionic-angular";
import { Splashscreen, StatusBar } from 'ionic-native';

import { GlobalVars } from "./providers/global-vars/global-vars";

import { AktuellesPage } from "./pages/aktuelles/aktuelles";
import { AuftrittsplanPage } from "./pages/auftrittsplan/auftrittsplan";
import { ImpressumPage } from "./pages/impressum/impressum";
import { JubilaeumPage } from "./pages/jubilaeum/jubilaeum";
import { KontaktPage } from "./pages/kontakt/kontakt";
import { MitgliederPage } from "./pages/mitglieder/mitglieder";
import { LoginPage } from "./pages/login/login";
import { TerminePage } from "./pages/termine/termine";

interface PageObj {
    title: string;
    component: any;
    icon: string;
    image: string;
    index?: number;
}

@Component({
    templateUrl: "build/app.html",
    providers: [GlobalVars]
})

class PgGlApp {
  @ViewChild(Nav) nav: Nav;

  appPages: PageObj[] = [
      { title: "Aktuelles", icon: "paper", image: "", component: AktuellesPage },
      { title: "50 Jahre Prinzengarde", icon: "", image: "images/Icon_Jubilaeum.png", component: JubilaeumPage },
      { title: "Termine", icon: "calendar", image: "", component: TerminePage },
      { title: "Kontakt", icon: "mail", image: "", component: KontaktPage },
  ];
  loggedInPages: PageObj[] = [
      { title: "Mitgliederliste", icon: "contact", image: "", component: MitgliederPage },
      { title: "Auftrittsplan", icon: "alarm", image: "", component: AuftrittsplanPage }
  ];
  loggedOutPages: PageObj[] = [
      { title: "Login", icon: "key", image: "", component: LoginPage }
  ];
  metaPages: PageObj[] = [
      { title: "Impressum", icon: "copy", image: "", component: ImpressumPage }
  ];
  rootPage: any = AktuellesPage;

  constructor(
      private platform: Platform,
      private globalVars: GlobalVars
  ) {
      // call any initial plugins when ready
      platform.ready().then(() => {
          /*
          StatusBar.styleDefault();
          Splashscreen.hide();
          */
      });
  }

  openPage(page: any):void {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        } else {
            this.nav.setRoot(page.component);
        }
  }

}

enableProdMode();

ionicBootstrap(PgGlApp, null, { mode: "md" });
