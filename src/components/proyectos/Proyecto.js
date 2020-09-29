import React, {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";


const Proyecto = ({proyecto}) => {


    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    //extrameos datos del usecontext 
    const {proyectoActual} = proyectosContext;

    
    //Creando la variable de tareascontext
    const tareaContext = useContext(tareasContext);
    const {obtenerTareas} = tareaContext; 

    //creando funcion para el onclick del boton
    const onClickEnviar = id => {
        proyectoActual(id);
        obtenerTareas(id);
    }

    return ( 
        <li>
            <button
                type = "button"
                className = "btn btn-blank"
                onClick = {()=>onClickEnviar(proyecto.id)}
               //onclick = {()=>proyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;