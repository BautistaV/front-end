export class Experience {
    id? : number;
    expName : string;
    expDesc : string;
    expTime : string;
    expImg: string;

    constructor(expName: string, expDesc: string, expTime: string, expImg: string) {
        this.expName = expName;
        this.expDesc = expDesc;
        this.expTime = expTime;
        this.expImg = expImg;

    }
}
