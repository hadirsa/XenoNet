/*
*
*    @ AH.GHORAB
*
*/
import { BaseEntity } from "../shared/baseEntity/baseEntity.model";
import { NetworkCard } from "./networkCard.model";

export class Server extends BaseEntity<number> {
    constructor(
        public name?: string,
        public networkCards?: NetworkCard[],
        public os?: string,
        public status?: string,
        public sshUsername?: string,
        public sshPassword?: string,
        public cpu?: string,
        public ram?: string,
        public hhd?: string,
        public dockerVersion?: string,
        public ovsVersion?: string,
        public kvmVersion?: string
    ) {
        super();
        this.name = "";
        this.networkCards = [];
        this.os = "";
        this.status = "";
        this.id = null;
        this.sshUsername = "";
        this.sshPassword = "";
        this.cpu = "";
        this.ram = "";
        this.hhd = "";
        this.dockerVersion = "";
        this.ovsVersion = "";
        this.kvmVersion = "";
    }
}