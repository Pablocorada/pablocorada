
const insertartHeader = () => {

    const header = document.createElement('header');
    header.className = 'row w-75 py-5 m-auto';
    header.innerHTML = `
        <div  class="col-md-3 d-flex align-items-center justify-content-center p-0">
            <img id="avatar" src="./assets/img/Banner de LinkedIn Tecnología Abstracto Azul y Blanco.png" alt="Pablo Corada" class="rounded-circle w-50 shadow"/>
        </div>
        <div class="col-md-9 d-flex align-items-center flex-wrap mt-4 mt-md-0">
            <h1 class="w-100 mb-0 text-center m-auto">
                PABLO CORADA
            </h1>
            <div class="w-100 px-2">
                <hr />
            </div>
            <ul id="nav" class="nav row fw-bold w-100 text-center m-auto d-flex align-items-center">
                <li class="col-12 col-sm-6 col-lg-3 nav-item my-1">
                    <a class="nav-link active" href="about.html">
                        Sobre mí
                    </a>
                </li>
                <li class="col-12 col-sm-6 col-lg-3 nav-item my-1">
                    <a class="nav-link" href="skills.html">
                        Habilidades
                    </a>
                </li>
                <li class="col-12 col-sm-6 col-lg-3 nav-item my-1">
                    <a class="nav-link" href="projects.html">
                        Proyectos
                    </a>
                </li>
                <li class="col-12 col-sm-6 col-lg-3 nav-item my-1">
                    <a class="nav-link" href="contact.html">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    `;
    
    const contHeader = document.querySelector('#cont-header');
    contHeader.appendChild(header);

}

export{
    insertartHeader,
}

