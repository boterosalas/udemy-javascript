import { subirImagen } from './http-provider.js'

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
    const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>
    <label>Selecciona una fotografía:</label>
    <input type="file" accept="image/png, image/jpg, image/jpeg" />
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);
    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto')
}

const eventos = () =>{
    inputFile.addEventListener('change',(event)=>{
        const file = event.target.files[0]
        subirImagen(file).then(resp=>{
            imgFoto.src = resp
        })
    })
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}