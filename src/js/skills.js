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
        images = images + `<img src="${img}" alt="${skill.skill} - ${index}" class="icon mx-2"/>`;
    });

    skillHTML = skillHTML + `    
        <div class="row py-3">
            <div class="col-12 col-sm-2 d-flex flex-wrap justify-content-center align-items-center">
                ${images}
            </div>
            <div class="col-12 col-sm-3 d-flex justify-content-around align-items-center">
                <p class="language my-2">
                    ${skill.skill}
                </p>
            </div>
            <div class="col-12 col-sm-7">
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

    <h2 class="fs-1 fw-bold">
        Habilidades y conocimientos
    </h2>

    <p style="text-align: justify !important;" class="fs-3 mt-5 lh-lg">
     Gracias a mis estudios de la Formación Profesional, sumado a los cursos que he realizado, poseo varias habilidades informáticas que día a día voy puliendo para seguir progresando.
    </p>

    <div class="fs-3 mt-5 lh-lg text-center w-100">
        ${skillHTML}
    </div>

`;


export{
    skillsHTML
}
