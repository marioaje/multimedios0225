import { listaCurso } from '../../services/cursoService';
import { useState, useEffect } from 'react';

const CursoPage = () =>{

    //set y get variables
    const [ curso, setCurso ] = useState([]);//variables de estado


    //carga de la pagina analogia docready
    useEffect (() =>{
            listaCurso()
                .then((respuesta) => {
                    console.log(respuesta.data.data);
                    setCurso(respuesta.data.data);
                    }
                )
                .catch((error) =>
                    {
                        console.error('Error', error)   ;
                    }
                )
        }, []
    );




    return(
        <div>
            <h2>Modulo de cursos</h2>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nombre</td>
                        <td>descripcion</td>
                        <td>tiempo</td>
                        <td>usuario</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {
                            curso.map((items) =>
                                        (
                                            <tr key={items.id}>
                                                <td>{items.id}</td>
                                                <td>{items.nombre}</td>
                                                <td>{items.descripcion}</td>
                                                <td>{items.tiempo}</td>
                                                <td>{items.usuario}</td>                                    
                                                <td>Actualiar *** Eliminar</td>
                                            </tr>
                                        )    
                                    )            
                    }

                </tbody>
            </table>


        </div>
    );
};

export default CursoPage;