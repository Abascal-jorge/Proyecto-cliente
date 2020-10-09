import React, { useReducer } from 'react';
import tareasContext from "./tareasContext";
import tareasReducer from "./tareasReducer";
import clienteAxios from "../../config/axios";
import {OBTENER_TAREAS,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINANDO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZANDO_TAREA} from "../../types";


const TareasState = props => {

    //Creando objeto inicial para el state
    const initialstate = {
        tareasproyecto: [],
        validartarea: false,
        tareaseleccionada: null,
    };

    //Creando un state para los componentes
    const [state, dispatch] = useReducer(tareasReducer, initialstate);

    //Creando funcion para mostrar tareas de los proyectos
    const obtenerTareas = async proyecto =>{
        try {
            const resultado = await clienteAxios.get("api/tarea", { params: { proyecto } });
            dispatch({
                type: OBTENER_TAREAS,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);   
        }
    }

    //Agregando nueva tarea al state
    const agregarTarea = async tarea =>{
        try {
            const resultado = await clienteAxios.post("api/tarea", tarea);
            console.log(resultado);
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    //funcion para mostrar error en el form de nueva tarea
    const validarformtarea = ()=>{
        dispatch({
            type: VALIDAR_TAREA,
        });
    }

    //Eliminar tarea por su id
    const eliminartarea = async (id, proyecto) =>{

        try {
            await clienteAxios.delete(`/api/tarea/${id}`, { params: { proyecto }} );    
            dispatch({
                type: ELIMINANDO_TAREA,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    }

    //EXTRAE UNA TAREA PARA EDICION
    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    //Edita modifica una tarea 
    const editandotarea = async tarea =>{
        try {
            const resultado = await clienteAxios.put(`/api/tarea/${tarea._id}`, tarea);
            //console.log(resultado);
            dispatch({
                type: ACTUALIZANDO_TAREA,
                payload: resultado.data.existetarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <tareasContext.Provider
            value={{
                //Aqui van los datos a pasar a los componentes state o funciones
                tareasproyecto: state.tareasproyecto,
                validartarea: state.validartarea,
                tareaseleccionada : state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarformtarea,
                eliminartarea,
                guardarTareaActual,
                editandotarea
           }}
        >
            {props.children}
        </tareasContext.Provider>
     );

}
 
export default TareasState;