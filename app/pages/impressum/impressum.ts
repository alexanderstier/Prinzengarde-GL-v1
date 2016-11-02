import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
  templateUrl: "build/pages/impressum/impressum.html"
})

export class ImpressumPage {

    nav_title = "Impressum";
    title = "Impressum";

    constructor(
        private navController: NavController,
        private global: GlobalVars
    ) {
    }

}
