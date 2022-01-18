

export class Skill {
     
    imgs;
    skill;
    course;
    institution;
    
    constructor (imgs,skill,course,institution){
        this.imgs = imgs;
        this.skill = skill;
        this.course = course;
        this.institution = institution;
    };
    
    get imgs(){
        return this.imgs;
    }
    get skill(){
        return this.skill;
    }
    get course(){
        return this.course;
    }
    get institution(){
        return this.institution;
    }
};
