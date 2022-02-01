import { Project } from "./Project";
import {skillsList} from './skills.js';
;


const [css,js,react,sql,git] = skillsList;

const appWeather = new Project(
    'Weather App',
    './assets/img/weatherApp.png',
    'https://vigilant-volhard-b9562c.netlify.app/',
    'Aplicación que permite consultar las condiciones climáticas actuales y de los siguientes 5 días, tanto en nuestra localización como en otras ciudades del mundo.',
    [css,js]
    );
const billSplit = new Project(
    'BillSplit',
    './assets/img/billSplit.png',
    'https://pablocorada.github.io/Billsplit/',
    'Aplcación para dividir los pagos de cuentas entre varias personas. Permite asignar distintos gastos a la cuenta, quién los pagó, y finalmente muestra quien le debe dinero a quién.',
    [css,js,react]
    );


const projectsList = [
    appWeather,
    billSplit,
];


let projectHTML = ``;

projectsList.forEach(project => {
    
    let images = ``;

    project.skills.forEach((skill,index) => {
        images = images + `<img src="${skill.imgs[1] || skill.imgs[0]}" alt="${skill.skill} - ${index}" title="${skill.skill} - ${index}" class="icon mx-2"/>`;
    });

    projectHTML = projectHTML + `    
        <div class="row mt-5 justify-content-around align-items-center mb-5 p-4 py-4 cont-project">
            <div class="col-12 col-lg-6 mb-4 project-link-img">
                <a href="${project.projectLink}" target="_blanket">
                    <img src="${project.img}" alt="${project.title}" class="w-100" />               
                </a>
            </div>
            <div class="col-12 col-lg-5">
                <a href="${project.projectLink}" target="_blanket" class="text-center px-0 nav-link pe-0 mt-3">
                    <h3 class="project-title fw-bold project-link-text d-inline fs-2">${project.title}</h3>
                </a>
                <p class="my-4">${project.description}</p>
                <div class="mb-3">
                    ${images}
                </div>                
            </div>
        </div>
        `;

});


const projectsHTML = `

    <h2>
        Proyectos
    </h2>
    ${projectHTML}
`;


export{
    projectsHTML
}
