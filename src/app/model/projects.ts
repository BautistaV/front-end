export class Projects {
    id? : number;
    projName : string;
    projDesc : string;
    projTime : string;
    projImg : string;

    constructor(projName: string, projDesc: string, projTime: string, projImg: string) {
        this.projName = projName;
        this.projDesc = projDesc;
        this.projTime = projTime;
        this.projImg = projImg;
    }
}
