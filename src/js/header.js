

const insertartHeader = () => {

    const header = document.createElement('header');
    header.className = 'row w-100 w-sm-75 pt-4 pb-0 py-sm-5 m-auto';
    header.innerHTML = `
                         
    
        <div id="cont-avatar"  class="animate__animated animate__fadeIn col-12 col-md-3 d-flex align-items-center justify-content-center p-0">
            <img id="avatar" src="./assets/img/Banner de LinkedIn Tecnología Abstracto Azul y Blanco.png" alt="Pablo Corada" class="rounded-circle w-50 shadow"/>
        </div>
        
        <div class="col-12 col-md-9 d-flex align-items-center flex-wrap mt-2 mt-sm-4 mt-md-0">
            <h1 id="cont-h1" class="animate__animated animate__zoomIn w-100 mb-0 text-center m-auto">
                PABLO CORADA
            </h1>
            <ul id="nav" class="animate__animated animate__fadeIn nav row fw-bold w-100 text-center m-auto d-flex align-items-center">
                <div class="w-100 px-2">
                    <hr />
                </div>
                <li class="col-12 col-sm-6 col-lg-3 nav-item my-1">
                    <a class="nav-link active" href="./about.html">
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
        <div class="collapse" id="navbarToggleExternalContent">
            <div id class="p-4 pb-1">
                <ul id="nav-in" class="nav row fw-bold w-100 text-center m-auto d-flex align-items-center">
                    <div class="w-100 px-2">
                        <hr />
                    </div>    
                    <li class="col-12 col-sm-6 col-lg-3 nav-item my-1">
                        <a class="nav-link active" href="./about.html">
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
        </div>
        <nav class="navbar navbar-dark bg-dark" id="cont-nav">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav> 
    `;
    
    const contHeader = document.querySelector('#cont-header');
    contHeader.appendChild(header);

}

export{
    insertartHeader,
}

