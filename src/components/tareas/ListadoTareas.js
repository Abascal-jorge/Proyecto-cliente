import React, {Fragment} from 'react';
import Tarea from "./Tarea";

const ListadoTareas = () => {

    //Creando un listado de tareas
    const tareasProyecto = [
        {nombre: "eligir plataforma", estado:true},
        {nombre: "Elegir colores", estado: false},
        {nombre: "Elejir Plataformas de pago", estado: false},
        {nombre: "Elegir Hosting", estado: false}
    ];


    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

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
            >
                Eliminatr proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListadoTareas;