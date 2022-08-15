export class Skills {

    id?: number;
    skillName: string;
    skillPercent: number;

    constructor(skillName: string, skillPercent: number){
        this.skillName = skillName;
        this.skillPercent = skillPercent;
    }
}
