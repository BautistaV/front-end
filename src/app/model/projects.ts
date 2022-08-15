export class Projects {
    id? : number;
    projName : string;
    projDesc : string;
    projTime : string;
    projImg : string;
    projLink : string;

    constructor(projName: string, projDesc: string, projTime: string, projImg: string, projLink: string) {
        this.projName = projName;
        this.projDesc = projDesc;
        this.projTime = projTime;
        this.projImg = projImg;
        this.projLink = projLink;
    }
}
