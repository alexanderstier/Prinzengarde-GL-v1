import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";
import { AuthService } from '../../providers/auth-service/auth-service';

import { MitgliederPage } from "../../pages/mitglieder/mitglieder";

@Component({
    templateUrl: "build/pages/login/login.html",
    providers: [AuthService]
})

export class LoginPage {

    nav_title = "Anmeldung";
    title = "Mitglieder-Anmeldung";

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        private authService: AuthService
    ) {
        this.global.usercreds = {
            username: '',
            password: ''
        }
    }

    login(usercreds) {
        this.authService.login(usercreds).then(data => {

            console.log(data);

            if (data)
                this.navController.setRoot(MitgliederPage);
        })
    }

}
