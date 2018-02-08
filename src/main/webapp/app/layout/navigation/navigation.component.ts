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
        createNetwork.topic = "Diagram";
        createNetwork.url = "/networkDiagram";
        createNetwork.icon = "fa fa-lg fa-fw fa-sitemap";
        createNetwork.isEnable = true;
        createNetwork.isBookmark = false;
        createNetwork.isOpen = false;
        createNetwork.isShowing = false;

        let networkComponent = new NavigationMenuItem();
        networkComponent.id = 5;
        networkComponent.topic = "Diagram Component";
        networkComponent.url = "/diagramComponent";
        networkComponent.icon = "fa fa-lg fa-fw fa-sitemap";
        networkComponent.isEnable = true;
        networkComponent.isBookmark = false;
        networkComponent.isOpen = false;
        networkComponent.isShowing = false;

        let diagramDesigner = new NavigationMenuItem();
        diagramDesigner.id = 6;
        diagramDesigner.topic = "Diagram Designer";
        diagramDesigner.url = null;
        diagramDesigner.icon = "fa fa-lg fa-fw fa-sitemap";
        diagramDesigner.isEnable = true;
        diagramDesigner.isBookmark = false;
        diagramDesigner.isOpen = false;
        diagramDesigner.isShowing = false;
        diagramDesigner.childs.push(createNetwork);
        diagramDesigner.childs.push(networkComponent);

        let servers = new NavigationMenuItem();
        servers.id = 2;
        servers.topic = "Servers";
        servers.url = "/servers";
        servers.icon = "fa fa-lg fa-fw fa-database";
        servers.isEnable = true;
        servers.isBookmark = false;
        servers.isOpen = false;
        servers.isShowing = false;
        let management = new NavigationMenuItem();
        management.id = 3;
        management.topic = "Management";
        management.url = "/management";
        management.icon = "fa fa-lg fa-fw fa-gears";
        management.isEnable = true;
        management.isBookmark = false;
        management.isOpen = false;
        management.isShowing = false;

        let networkEntities = new NavigationMenuItem();
        networkEntities.id = 4;
        networkEntities.topic = "Network Entities";
        networkEntities.url = null;
        networkEntities.icon = "fa fa-lg fa-fw fa-puzzle-piece";
        networkEntities.isEnable = true;
        networkEntities.isBookmark = false;
        networkEntities.isOpen = false;
        networkEntities.isShowing = false;



        let ovsMenu = new NavigationMenuItem();
        ovsMenu.id = 7;
        ovsMenu.topic = "OVS";
        ovsMenu.url = "/networkEntity/ovs";
        ovsMenu.icon = "fa fa-lg fa-fw fa-puzzle-piece ";
        ovsMenu.isEnable = true;
        ovsMenu.isBookmark = false;
        ovsMenu.isOpen = false;
        ovsMenu.isShowing = false;

        let controllerMenu = new NavigationMenuItem();
        controllerMenu.id = 8;
        controllerMenu.topic = "Controller";
        controllerMenu.url = "/networkEntity/controller";
        controllerMenu.icon = "fa fa-lg fa-fw fa-puzzle-piece ";
        controllerMenu.isEnable = true;
        controllerMenu.isBookmark = false;
        controllerMenu.isOpen = false;
        controllerMenu.isShowing = false;


        let vnfMenu = new NavigationMenuItem();
        vnfMenu.id = 9;
        vnfMenu.topic = "VNF";
        vnfMenu.url = "/networkEntity/vnf";
        vnfMenu.icon = "fa fa-lg fa-fw fa-puzzle-piece ";
        vnfMenu.isEnable = true;
        vnfMenu.isBookmark = false;
        vnfMenu.isOpen = false;
        vnfMenu.isShowing = false;


        let hostMenu = new NavigationMenuItem();
        hostMenu.id = 10;
        hostMenu.topic = "Host";
        hostMenu.url = "/networkEntity/host";
        hostMenu.icon = "fa fa-lg fa-fw fa-puzzle-piece ";
        hostMenu.isEnable = true;
        hostMenu.isBookmark = false;
        hostMenu.isOpen = false;
        hostMenu.isShowing = false;

        networkEntities.childs.push(ovsMenu);
        networkEntities.childs.push(controllerMenu);
        networkEntities.childs.push(vnfMenu);
        networkEntities.childs.push(hostMenu);

        this.menuItems.push(diagramDesigner);
        this.menuItems.push(networkEntities);
        this.menuItems.push(servers);
        this.menuItems.push(management);
    }

    ngOnInit() {}
}
