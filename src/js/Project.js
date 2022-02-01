

export class Project {
     
    title;
    img;
    projectLink;
    description;
    skills;
    
    constructor (title,img,projectLink,description,skills){
        this.title = title;
        this.img = img;
        this.projectLink = projectLink;
        this.description = description;
        this.skills = skills;
    };
    
    get title(){
        return this.title;
    }
    get img(){
        return this.img;
    }
    get projectLink(){
        return this.projectLink;
    }
    get description(){
        return this.description;
    }
    get skills(){
        return this.skills;
    }
};