import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { TerminlisteService } from "../../providers/terminliste-service/terminliste-service";
import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: "build/pages/termine/termine.html",
    providers: [TerminlisteService]
})

export class TerminePage {

    nav_title: string = "Aktuelles";
    title = "cuti und stier - Internetagentur";

    public termine: any;

    constructor(
        private nav: NavController,
        private global: GlobalVars,
        public terminlisteService: TerminlisteService
    ) {
        this.loadTerminliste();
    }

    loadTerminliste(): void {
        this.terminlisteService.load()
            .then(data => {
                this.termine = data;
            });
    }
}
