import { Component } from "@angular/core";
import { Modal, NavController, NavParams } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";

import { JubilaeumModalVorgeschichte } from './jubilaeum_modal_vorgeschichte';
import { JubilaeumModal1966 } from './jubilaeum_modal_1966';
import { JubilaeumModal60er } from './jubilaeum_modal_60er';
import { JubilaeumModal70er } from './jubilaeum_modal_70er';
import { JubilaeumModal80er } from './jubilaeum_modal_80er';
import { JubilaeumModal90er } from './jubilaeum_modal_90er';
import { JubilaeumModal2000 } from './jubilaeum_modal_2000';
import { JubilaeumModalAusblick } from './jubilaeum_modal_ausblick';

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
    openJubilaeumModal70er() {
        let jubilaeumModal70er = Modal.create(JubilaeumModal70er);
        this.navController.present(jubilaeumModal70er);
    }
    openJubilaeumModal80er() {
        let jubilaeumModal80er = Modal.create(JubilaeumModal80er);
        this.navController.present(jubilaeumModal80er);
    }
    openJubilaeumModal90er() {
        let jubilaeumModal90er = Modal.create(JubilaeumModal90er);
        this.navController.present(jubilaeumModal90er);
    }
    openJubilaeumModal2000() {
        let jubilaeumModal2000 = Modal.create(JubilaeumModal2000);
        this.navController.present(jubilaeumModal2000);
    }
    openJubilaeumModalAusblick() {
        let jubilaeumModalAusblick = Modal.create(JubilaeumModalAusblick);
        this.navController.present(jubilaeumModalAusblick);
    }
}
