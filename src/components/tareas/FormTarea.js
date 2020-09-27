import React, { useContext } from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";


const FormTarea  = () => {

    //Agregamdo la variable const que trae los states y funciones del proyectostate
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //if por si el array no tiene ningun elemento 
    if(!proyecto) return null;

    // array destructuring al proyecto
    const [proyectoActual] = proyecto;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="NombreTarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea ;