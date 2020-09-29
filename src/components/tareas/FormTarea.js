import React, { useContext, useState } from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";


const FormTarea  = () => {

    //Creando variable de tareacontext ´para acceder a ñps elementos de este reducer
    const tareaContext = useContext(tareasContext);
    //Aplicando destructuring para acceder a los state y funciones
    const {agregarTarea} = tareaContext;

    //Creando state para formulario
    const [tarea, guardarTarea] = useState({
        nombre: ""
    });
    //Aplicando extracion de elementos para state del formulario
    const {nombre} = tarea;

    //Agregamdo la variable const que trae los states y funciones del proyectostate
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //if por si el array no tiene ningun elemento 
    if(!proyecto) return null;

    // array destructuring al proyecto
    const [proyectoActual] = proyecto;

    //LLenando state tarea
    const tareacreada = (e)=>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        });
    }

    //Se crea funcion para el comportamiento del boton agregar tarea
    const onSubmit = (e)=>{
        e.preventDefault();

        //Validando formulario
        if(nombre === ""){
            return;
        }
        //Agregando tarea 
        tarea.proyectoid = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="NombreTarea..."
                        name="nombre"
                        onChange = {tareacreada}
                        value = {nombre}
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