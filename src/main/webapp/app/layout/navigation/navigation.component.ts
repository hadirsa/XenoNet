import { Component, OnInit } from "@angular/core";
import { NavigationMenuItem } from "./navigation.model";

@Component({
    selector: "sa-navigation",
    templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
  public menuItems: NavigationMenuItem[] = [];
    constructor() {
      let createNetwork = new NavigationMenuItem();
      createNetwork.id = 1;
      createNetwork.topic = 'Network Diagram';
      createNetwork.url = '/networkDiagram';
      createNetwork.icon = 'fa fa-lg fa-fw fa-code-fork';
      createNetwork.isEnable = true;
      createNetwork.isBookmark = false;
      createNetwork.isOpen = false;
      createNetwork.isShowing = false;

      let servers = new NavigationMenuItem();
      servers.id = 2;
      servers.topic = 'Servers';
      servers.url = '/servers';
      servers.icon = 'fa fa-lg fa-fw fa-database';
      servers.isEnable = true;
      servers.isBookmark = false;
      servers.isOpen = false;
      servers.isShowing = false;
      let management = new NavigationMenuItem();
      management.id = 3;
      management.topic = 'Management';
      management.url = '/management';
      management.icon = 'fa fa-lg fa-fw fa-gears';
      management.isEnable = true;
      management.isBookmark = false;
      management.isOpen = false;
      management.isShowing = false;
      this.menuItems.push(createNetwork);
      this.menuItems.push(servers);
      this.menuItems.push(management);
    }

    ngOnInit() {}
}
