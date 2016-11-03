import { Component } from "@angular/core";
import { Modal, NavController, NavParams } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";

import { JubilaeumModalVorgeschichte } from './jubilaeum_modal_vorgeschichte';
import { JubilaeumModal1966 } from './jubilaeum_modal_1966';
import { JubilaeumModal60er } from './jubilaeum_modal_60er';

@Component({
    templateUrl: "build/pages/jubilaeum/jubilaeum.html"
})

export class JubilaeumPage {

    nav_title = "Jubiläum";
    title = "50 Jahre Prinzengarde";

    constructor(
        private navController: NavController,
        private global: GlobalVars
    ) {
    }

    openJubilaeumModalVorgeschichte() {
        let jubilaeumModalVorgeschichte = Modal.create(JubilaeumModalVorgeschichte);
        this.navController.present(jubilaeumModalVorgeschichte);
    }
    openJubilaeumModal1966() {
        let jubilaeumModal1966 = Modal.create(JubilaeumModal1966);
        this.navController.present(jubilaeumModal1966);
    }
    openJubilaeumModal60er() {
        let jubilaeumModal60er = Modal.create(JubilaeumModal60er);
        this.navController.present(jubilaeumModal60er);
    }
}
