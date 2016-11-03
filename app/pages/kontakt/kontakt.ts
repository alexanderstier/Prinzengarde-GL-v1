import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Http, Headers, Request, RequestMethod } from "@angular/http";
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
  templateUrl: "build/pages/kontakt/kontakt.html"
})

export class KontaktPage {

    nav_title = "Kontakt";
    title = "Kontakt";

    http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;

    kontaktForm: ControlGroup;
    sendernameChanged: boolean = false;
    sendermailChanged: boolean = false;
    subjectChanged: boolean = false;
    messageChanged: boolean = false;
    submitAttempt: boolean = false;
    submitSuccess: boolean = false;
    submitError: boolean = false;

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        private formBuilder: FormBuilder,
        http: Http
    ) {
        this.http = http;
        this.mailgunUrl = "mailgun.cutiundstier.de";
        this.mailgunApiKey = window.btoa("api:key-204432a6b3ac86b8b5db84f365a4b3a8");

        this.kontaktForm = formBuilder.group({
            sendername: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            sendermail: ['', Validators.required],
            subject: ['Anfrage über die Prinzengarde-App', Validators.required],
            message: ['', Validators.required]
        });
    }

    elementChanged(input) {
        let field = input.inputControl.name;
        this[field + "Changed"] = true;
    }

    send() {

        console.log(this.kontaktForm.value)
        
        if (this.kontaktForm.valid) {
            let requestHeaders: Headers = new Headers;
            requestHeaders.append("Access-Control-Allow-Headers", "{Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With}")
            requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
            requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            this.http.request(new Request({
                method: RequestMethod.Post,
                url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
                body: "from=" + this.kontaktForm.value.sendermail + "&to=webmaster@prinzengarde-gl.de&subject=" + this.kontaktForm.value.subject + "&text=" + this.kontaktForm.value.message,
                headers: requestHeaders
            }))
                .subscribe(success => {
                    console.log("SUCCESS -> " + JSON.stringify(success));
                    this.submitSuccess = true;
                    this.submitAttempt = false;
                }, error => {
                    console.log("ERROR -> " + JSON.stringify(error));
                    this.submitError = true;
                    this.submitAttempt = false;
                });
        } else {
            this.submitAttempt = true;
        }
    }

}
