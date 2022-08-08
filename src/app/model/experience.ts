export class Experience {
    id? : number;
    expName : string;
    expDesc : string;
    expTime : string;

    constructor(expName: string, expDesc: string, expTime: string) {
        this.expName = expName;
        this.expDesc = expDesc;
        this.expTime = expTime;

    }
}
