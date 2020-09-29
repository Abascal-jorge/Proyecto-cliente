import React, { useReducer } from 'react';
import tareasContext from "./tareasContext";
import tareasReducer from "./tareasReducer";
import {OBTENER_TAREAS,
        AGREGAR_TAREA,
        VALIDAR_TAREA,
        ELIMINANDO_TAREA} from "../../types";


const TareasState = props => {

    //Creando objeto inicial para el state
    const initialstate = {
        tareas: [
            {id: 1, proyectoid: 1, nombre: "eligir plataforma", estado:true},
            {id: 2, proyectoid:2, nombre: "Elegir colores", estado: false},
            {id: 3, proyectoid:3, nombre: "Elejir Plataformas de pago", estado: false},
            {id: 4, proyectoid:1 ,nombre: "Elegir Hosting", estado: false}
        ],
        tareasproyecto: null,
        validartarea: false
    };

    //Creando un state para los componentes
    const [state, dispatch] = useReducer(tareasReducer, initialstate);

    //Creando funcion para mostrar tareas de los proyectos
    const obtenerTareas = tareaId =>{
        dispatch({
            type: OBTENER_TAREAS,
            payload: tareaId
        })
    }

    //Agregando nueva tarea al state
    const agregarTarea = tarea =>{
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }

    //funcion para mostrar error en el form de nueva tarea
    const validarformtarea = ()=>{
        dispatch({
            type: VALIDAR_TAREA,
        });
    }

    //Eliminar tarea por su id
    const eliminartarea = id =>{
        dispatch({
            type: ELIMINANDO_TAREA,
            payload: id
        });
    }

    return ( 
        <tareasContext.Provider
            value={{
                //Aqui van los datos a pasar a los componentes state o funciones
                tareas : state.tareas,
                tareasproyecto: state.tareasproyecto,
                validartarea: state.validartarea,
                obtenerTareas,
                agregarTarea,
                validarformtarea,
                eliminartarea
            }}
        >
            {props.children}
        </tareasContext.Provider>
     );

}
 
export default TareasState;