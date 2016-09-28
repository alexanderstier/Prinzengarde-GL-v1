import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";

@Component({
    templateUrl: "build/pages/termine/termine.html",
    providers: [
        GlobalVars
    ]
})

export class TerminePage {

    nav_title = "Termine";
    title = "Termine";

    selectedItem: any;
    icons: string[];
    items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // if we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    // let's populate this page with some filler content for funzies
    this.icons = ["flask", "wifi", "beer", "football", "basketball", "paper-plane",
    "american-football", "boat", "bluetooth", "build"];

    this.items = [];
    for(let i:number = 1; i < 11; i++) {
      this.items.push({
        title: "Item " + i,
        note: "This is item #" + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // that's right, we're pushing to ourselves!
    this.nav.push(TerminePage, {
      item: item
    });
  }
}
