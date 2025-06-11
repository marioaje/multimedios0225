
import axios from 'axios';

const URLAPI = 'https://paginas-web-cr.com/Api/apis/';
const lista = 'ListaCurso.php';
const crea = 'InsertarCursos.php';
const actualiza = 'ActualizarCursos.php';
const elimina = 'BorrarCursos.php';


export const listaCurso = () => axios.get (`${URLAPI}${lista}`);

export const creaCurso = (datos) => axios.post (`${URLAPI}${crea}`, datos);

export const actualizaCurso = (datos) => axios.post (`${URLAPI}${actualiza}`,datos);

export const eliminaCurso = (id) => axios.get (`${URLAPI}${elimina}`, id);

