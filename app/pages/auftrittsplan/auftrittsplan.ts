import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { AuftrittsplanService } from "../../providers/auftrittsplan-service/auftrittsplan-service";
import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: "build/pages/auftrittsplan/auftrittsplan.html",
    providers: [AuftrittsplanService]
})

export class AuftrittsplanPage {

    nav_title: string = "Auftrittsplan";
    title = "Auftrittsplan";

    public auftrittsplan: any;

    constructor(
        private nav: NavController,
        private global: GlobalVars,
        public auftrittsplanService: AuftrittsplanService
    ) {
        this.loadAuftrittsplan();
    }

    loadAuftrittsplan(): void {
        this.auftrittsplanService.load()
            .then(data => {
                this.auftrittsplan = data;
            });
    }
}
