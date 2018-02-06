import { Server } from "../servers/server.model";
import { DiagramOverView } from "./diagram-overView/diagram-overView.component";
import { OveralDiagramConnection } from "../servers/overalDiagramConnection.model";

export class JsonToNetworkDiagramParser {
    constructor() {
    }

    parsJson(servers: Server[], jSonStr: any){
        console.log(JSON.parse(jSonStr));
        // Clear overalDiagramConnection inside each server
        console.log(servers);
        servers.forEach(server=>{
            server.overalDiagramConnections.splice(0,server.overalDiagramConnections.length)
        });
        JSON.parse(jSonStr).linkDataArray.forEach(element => {
            servers.forEach(server=>{
                if(server.name === element.from){
                    server.overalDiagramConnections.push(new OveralDiagramConnection(null,element.from, element.to, element.fromPort, element.toPort))
                }
            });
        });
        return servers;
    }
}



export class NetworkDiagramToJsonParser {

    constructor() {
    }

    parsNetworkDiagram(servers: Server[]){
        
    }

}