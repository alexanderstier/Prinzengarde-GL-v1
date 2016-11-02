import { Component, ViewChild, enableProdMode } from "@angular/core";
import { App, Events, ionicBootstrap, Nav, Platform } from "ionic-angular";
import { Splashscreen, StatusBar } from 'ionic-native';

import { GlobalVars } from "./providers/global-vars/global-vars";

import { AktuellesPage } from "./pages/aktuelles/aktuelles";
import { TerminePage } from "./pages/termine/termine";
<<<<<<< .merge_file_a08260
=======
import { LoginPage } from "./pages/login/login";
>>>>>>> .merge_file_a13572
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
      { title: "Termine", icon: "calendar", image: "", component: TerminePage },
      { title: "Kontakt", icon: "mail", image: "", component: KontaktPage },
  ];
  loggedInPages: PageObj[] = [
      { title: "Mitglieder", icon: "contact", image: "", component: MitgliederPage }
  ];
  loggedOutPages: PageObj[] = [
<<<<<<< .merge_file_a08260

  ];
  rootPage: any = AktuellesPage;

  constructor(private platform: Platform) {
=======
      { title: "Login", icon: "key", image: "", component: LoginPage }
  ];
  rootPage: any = AktuellesPage;

  constructor(
      private platform: Platform,
      private globalVars: GlobalVars
  ) {
>>>>>>> .merge_file_a13572
      // call any initial plugins when ready
      platform.ready().then(() => {
          /*
          StatusBar.styleDefault();
          Splashscreen.hide();
          */
      });
  }

<<<<<<< .merge_file_a08260
    openPage(page: any):void {
=======
  openPage(page: any):void {
>>>>>>> .merge_file_a13572
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        } else {
            this.nav.setRoot(page.component);
        }
<<<<<<< .merge_file_a08260
    }
=======
  }

>>>>>>> .merge_file_a13572
}

// enableProdMode();

ionicBootstrap(PgGlApp, null, { mode: "md" });
