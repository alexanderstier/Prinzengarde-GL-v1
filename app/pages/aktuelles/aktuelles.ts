import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/aktuelles/aktuelles.html'
})

export class Aktuelles {

    title = 'Aktuelles';

    constructor(private navController: NavController) {
    }

}
