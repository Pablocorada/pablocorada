import '../css/components.css';
import { aboutHTML } from './about';
import { insertForm } from './contact';
import { insertartHeader } from './header';
import { projectsHTML } from './projects';
import { skillsHTML } from './skills';


const main = document.querySelector('main');

const init = () => {

    insertartHeader();

    switch (main.id){

        case 'mainSkills':
            const mainSkills = document.querySelector('#mainSkills');
            mainSkills.innerHTML = skillsHTML;
            break;
        case 'mainProjects':
            const mainProjects = document.querySelector('#mainProjects');
            mainProjects.innerHTML = projectsHTML;
            break;
        case 'mainContact':
            insertForm();
            break;
        case 'mainAbout':
            const mainAbout = document.querySelector('#mainAbout');
            mainAbout.innerHTML = aboutHTML;
            break;
        


    }

}



//Exportaciones

export {
    init,
}