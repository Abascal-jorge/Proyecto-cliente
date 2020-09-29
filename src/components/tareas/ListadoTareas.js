import React, {Fragment, useContext, useEffect} from 'react';
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";

const ListadoTareas = () => {

    //Creamos lavariable 1que utilizara tarewacontext
    const tareacontext = useContext(tareasContext);
    //Extraemos el resultado
    const {tareasproyecto} = tareacontext;


    //Se crea la variable y se le pasa el valor de proyectoContext
    //Y se realiza la extracion de de los parametros
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, proyectoEliminado} = proyectosContext;

    if(!proyecto)return <h2>Selecciona un proyecto</h2>;
    //Se aplica Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                ?
                <li className="tarea"><p>No hay Tareas</p></li>
                :
                tareasproyecto.map(tarea=>(
                    <Tarea
                        tarea={tarea}
                    />
                ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick = {()=>proyectoEliminado(proyectoActual.id)}
            >
                Eliminatr proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListadoTareas;