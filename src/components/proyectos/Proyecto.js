import React, {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";


const Proyecto = ({proyecto}) => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    //extrameos datos del usecontext 
    const {proyectoActual} = proyectosContext;

    return ( 
        <li>
            <button
                type = "button"
                className = "btn btn-blank"
                onClick = {()=>proyectoActual(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;