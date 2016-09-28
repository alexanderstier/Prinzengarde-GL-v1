import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
  templateUrl: "build/pages/kontakt/kontakt.html"
})

export class KontaktPage {

    nav_title = "Kontakt";
    title = "Kontakt";

    constructor(
        private navController: NavController,
        private global: GlobalVars
    ) {
    }

}
