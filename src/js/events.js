import '../css/components.css';
import { aboutHTML } from './about';
import { insertForm } from './contact';
import { insertartHeader } from './header';
import { skillsHTML } from './skills';


const main = document.querySelector('main');

const init = () => {

    insertartHeader();

    switch (main.id){

        case 'mainSkills':
            const mainHeader = document.querySelector('#mainSkills');
            mainHeader.innerHTML = skillsHTML;
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