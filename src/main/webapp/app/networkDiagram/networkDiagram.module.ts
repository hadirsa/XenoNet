import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedCommonDirectiveModule } from "../shared/shared-common-directive.module";
import { NetworkDiagramComponent } from "./networkDiagram.component";
import { networkDiagramRoute } from "./networkDiagram.routing";

import { AccessorySwitch } from "./accessory-switch/accessorySwitch.component";
import { AccessoryServer } from "./accessory-servers/accessoryServer.component";
import { AccessoryVnf } from "./accessory-vnfs/accessoryVnf.component";
import { DiagramOverView } from "./diagram-overView/diagram-overView.component";
import { TabDiagramDrawer } from "./tab-diagram-drawer/tab-diagram-drawer.component";

import { DynamicTabsDirective } from "./tabs-diagram/dynamic-tabs.directive";
import { TabComponent } from "./tabs-diagram/tab-diagram.component";
import { TabsComponent } from "./tabs-diagram/tabs-diagram.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        SharedCommonDirectiveModule,
        networkDiagramRoute
    ],
    declarations: [
        NetworkDiagramComponent,
        AccessorySwitch,
        AccessoryServer,
        AccessoryVnf,
        DiagramOverView,
        TabDiagramDrawer,
        DynamicTabsDirective,
        TabComponent,
        TabsComponent
    ],
    entryComponents: [ TabComponent ]
})
export class NetworkDiagramModule {}
