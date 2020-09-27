import React, { useReducer } from 'react';
import uuid from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINANDO_PROYECTO} from "../../types";

const ProyectoState = props =>{

    const proyectos = [
        {id:1, nombre: "Tienda Virtual"},
        {id:2, nombre: "Intranet"},
        {id: 3, nombre: "Diseño de sitio web"}
    ]

    const initialState ={
        //Arreglo proyecto
        proyectos :[],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    //Dispacht para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //SObtrener los proyectos
    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar proyecto nuevo
    const agregarProyecto = proyecto=>{
        //El state proyecto que viene de nuevo proyecto no tiene id por eso aqui se le agrega un id al proyecto que es un state de objetos
        proyecto.id = uuid.v4();

        //Agregamos el proyecto como un distpach
        dispatch({
            type: AGREGAR_PROYECTO, 
            payload: proyecto
        })
    }

    //Validando formulario de nuevo proyectos
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO,

        })
    }

    //Funcion cuando el usuario de clic en algun proyecto
    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    }
    //Eliminando proyecto del array 
    const proyectoEliminado = proyectoId=>{
        dispatch({
            type: ELIMINANDO_PROYECTO,
            payload: proyectoId
        });
    }
  

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                proyecto: state.proyecto,
                errorformulario: state.errorformulario,
                formulario: state.formulario,
                obtenerProyectos,
                mostrarFormulario,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                proyectoEliminado
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;