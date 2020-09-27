import React, {Fragment, useContext} from 'react';
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

    //Se crea la variable y se le pasa el valor de proyectoContext
    //Y se realiza la extracion de de los parametros
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, proyectoEliminado} = proyectosContext;

    if(!proyecto)return <h2>Selecciona un proyecto</h2>;
    //Se aplica Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;
    //console.log(proyectoActual);

    //Creando un listado de tareas
    const tareasProyecto = [
        {nombre: "eligir plataforma", estado:true},
        {nombre: "Elegir colores", estado: false},
        {nombre: "Elejir Plataformas de pago", estado: false},
        {nombre: "Elegir Hosting", estado: false}
    ];


    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.lenght === 0
                ?
                <li className="tarea"><p>No hay Tareas</p></li>
                :
                tareasProyecto.map(tarea=>(
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