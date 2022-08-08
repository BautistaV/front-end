export class Education {
    id? : number;
    eduName : string;
    eduDesc : string;
    eduTime : string;
    eduImg: string;

    constructor(eduName: string, eduDesc: string, eduTime: string, eduImg: string){
        this.eduName = eduName;
        this.eduDesc = eduDesc;
        this.eduTime = eduTime;
        this.eduImg = eduImg;
    }
}
