import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: 'build/pages/jubilaeum/jubilaeum_modal_60er.html'
})

export class JubilaeumModal60er {

    constructor(
        private viewCtrl: ViewController,
        private global: GlobalVars
    ) {
    }

    closeModal(): void {
        this.viewCtrl.dismiss();
    }

}