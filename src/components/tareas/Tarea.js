import React, { useContext } from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";

const Tarea = ({tarea}) => {

    //Aplicando extraccion de tarea
    const {nombre, estado} = tarea;

    //Creamos variable para acceder a funciones y state del ccontext proyecto
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //creando la vareable para obtener las funciones y state
    const tareaContext = useContext(tareasContext);
    const {eliminartarea, obtenerTareas, estadoTarea, guardarTareaActual} = tareaContext;

    //Funcion que se ejecuta cuando el usuario presiona eliminar tarea
    const tareaEliminar = id =>{
        eliminartarea(id);
        obtenerTareas(proyecto[0].id);
    }

    //Crweando funcion para cambiar estado 
    const cambiarEstado = tarea =>{
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        estadoTarea(tarea);
    }

    //Evento editar tarea
    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }

    return (  
        <li className="tarea sombra">
            <p>{nombre}</p>
            <div className="estado">
                {estado
                ?
                    <button
                        type="button"
                        className="completo"
                        onClick={()=>cambiarEstado(tarea)}
                    >
                        Completo
                    </button>
                :
                        <button
                            type="button"
                            className="incompleto"
                            onClick={()=>cambiarEstado(tarea)}
                       >
                         Incompleto
                        </button>
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick ={()=>seleccionarTarea(tarea)}
                >
                        Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick = {()=>tareaEliminar(tarea.id)}
                >
                   Eliminar
                </button>
            </div>
        </li>
    );
}
 
export default Tarea;