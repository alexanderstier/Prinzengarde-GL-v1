import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { AktuellesPage } from './pages/aktuelles/aktuelles';
import { TerminePage } from './pages/termine/termine';
import { KontaktPage } from './pages/kontakt/kontakt';
import { MitgliederPage } from './pages/mitglieder/mitglieder';

@Component({
  templateUrl: 'build/app.html'
})

class PgGlApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AktuellesPage;

  pages: Array<{title: string, icon: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Aktuelles', icon: 'paper', component: AktuellesPage },
        { title: 'Termine', icon: 'calendar', component: TerminePage },
        { title: 'Kontakt', icon: 'mail', component: KontaktPage },
        { title: 'Mitglieder', icon: 'contact', component: MitgliederPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(PgGlApp, null, { mode: 'md' });
