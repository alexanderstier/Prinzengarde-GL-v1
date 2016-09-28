import { Component, ViewChild } from "@angular/core";
import { ionicBootstrap, Platform, Nav } from "ionic-angular";

import { GlobalVars } from "./providers/global-vars/global-vars";

import { AktuellesPage } from "./pages/aktuelles/aktuelles";
import { TerminePage } from "./pages/termine/termine";
import { KontaktPage } from "./pages/kontakt/kontakt";
import { MitgliederPage } from "./pages/mitglieder/mitglieder";

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
      { title: "Kontakt", icon: "mail", image: "", component: KontaktPage },
  ];
  loggedInPages: PageObj[] = [
      { title: "Termine", icon: "calendar", image: "", component: TerminePage },
      { title: "Mitglieder", icon: "contact", image: "", component: MitgliederPage }
  ];
  loggedOutPages: PageObj[] = [

  ];
  rootPage: any = AktuellesPage;

  constructor(private platform: Platform) {
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

// enableProdMode();

ionicBootstrap(PgGlApp, null, { mode: "md" });
