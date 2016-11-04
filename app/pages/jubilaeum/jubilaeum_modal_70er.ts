import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: 'build/pages/jubilaeum/jubilaeum_modal_70er.html'
})

export class JubilaeumModal70er {

    constructor(
        private viewCtrl: ViewController,
        private global: GlobalVars
    ) {
    }

    closeModal(): void {
        this.viewCtrl.dismiss();
    }

}