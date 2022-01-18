

const form = `

    
`;

const insertForm = () => {

    const divContact = document.createElement('div');
    divContact.className = 'row justify-content-end';

    divContact.innerHTML = `

        <div class="col-12 col-md-3 px-0"></div>
        <div class="col-12 col-md-9 px-0">
            <h2 class="fs-1 fw-bold">
                Contacto
            </h2>
            <form class="row w-100 px-3 mt-4" action="https://formspree.io/f/mwkyvbae" method="POST">
                <div class="col-12 col-md-6 mb-2 px-0 pe-md-3">
                    <label for="inputEmail3" class="col-sm-3 ps-0 fw-bold col-form-label">Nombre<span class="text-danger">*</span></label>
                    <div class="col-sm-12">
                    <input type="text" class="form-control ms-0" id="inputEmail3" name="name" />
                    </div>
                </div>
                <div class="col-12 col-md-6 mb-2 px-0 ps-md-3">
                    <label for="inputPassword3" class="col-sm-3 fw-bold col-form-label">Email<span class="text-danger">*</span></label>
                    <div class="col-sm-12">
                    <input type="email" class="form-control" id="inputEmail3" name="email" />
                    </div>
                </div>
                <div class="col-12 px-0 mb-2">
                    <label for="inputSubject3" class="col-sm-3 fw-bold col-form-label">Asunto<span class="text-danger">*</span></label>
                    <div class="col-sm-12">
                    <input type="text" class="form-control" name="subject" />
                    </div>
                </div>
                <div class="col-12 px-0 mb-2">
                    <label for="inputMessage3" class="col-sm-3 fw-bold col-form-label">Mensaje<span class="text-danger">*</span></label>
                    <textarea class="form-control" rows="4" name="message"></textarea>
                </div>

                <button type="submit" class="col-12 col-sm-3 btn btn-primary mt-3 fw-bold">Enviar</button>        
            </form>
            <hr class="d-block my-4"/>

            <h3>Además, puedes contactarme a través de LinkedIn:</h3>
            <p class="text-center" ><a href="https://www.linkedin.com/in/pablocorada" target="_blanket">
                <img src="./assets/img/linkedin.png" alt="LinkedIn" class="m-auto" id="linkedin"/>
            </a></p>            
        
        </div>

    `;
    
    const contForm = document.querySelector('#mainContact');
    contForm.appendChild(divContact);

}

export{
    insertForm,
}