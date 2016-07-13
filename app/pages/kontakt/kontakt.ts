import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/kontakt/kontakt.html'
})

export class KontaktPage {

    title = 'Kontakt';

    constructor(private navController: NavController) {
    }

}
