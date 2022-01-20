import { Skill } from "./Skill"


const css = new Skill(['./assets/img/html.png','./assets/img/css.png'],'HTML / CSS','Máster en  CSS  (SASS y Bootstrap)','Udemy');
const js = new Skill(['./assets/img/javascript.png'],'JavaScript','Curso JavaScript Sintaxis Moderna','Udemy');
const react = new Skill(['./assets/img/react.png'],'React','Curso React (Hooks y MERN)','Udemy');
const sql = new Skill(['./assets/img/git.png','./assets/img/github.png'],'Git / GitHub','Curso Git y GitHub','Udemy');
const git = new Skill(['./assets/img/mysql.png','./assets/img/Plsql.png'],'MySQL / PL-SQL','Bases de datos','GS - Desarrollo de Aplicaciones Web');


const skillsList = [
    css,
    js,
    react,
    sql,
    git,
];



let skillHTML = ``;

skillsList.forEach(skill => {
    
    let images = ``;

    skill.imgs.forEach((img,index) => {
        images = images + `<img src="${img}" alt="${skill.skill} - ${index}" title="${skill.skill} - ${index}" class="icon mx-2"/>`;
    });

    skillHTML = skillHTML + `    
        <div class="row py-3 languages">
            <div class="col-12 col-sm-2 col-lg-3 d-flex flex-wrap justify-content-center align-items-center">
                ${images}
            </div>
            <div class="col-12 col-sm-3 col-lg-4 d-flex justify-content-around align-items-center">
                <p class="language my-2">
                    ${skill.skill}
                </p>
            </div>
            <div class="col-12 col-sm-7 col-lg-5">
                <p>
                    ${skill.course}<br/>
                    <i>${skill.institution}</i>                           
                </p>
            </div>
        </div>
        <hr/>
        `;

});


const skillsHTML = `

    <h2>
        Habilidades y conocimientos
    </h2>

    <p class="mt-5">
     Gracias a mis estudios de la Formación Profesional, sumado a los cursos que he realizado, poseo varias habilidades informáticas que día a día voy puliendo para seguir progresando.
    </p>

    <div class="text-center mt-5 w-100">
        ${skillHTML}
    </div>

`;


export{
    skillsHTML
}
