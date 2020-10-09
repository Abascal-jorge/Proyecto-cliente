import React, { useReducer } from 'react';
//import uuid from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import clienteAxios from "../../config/axios";
import {FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        PROYECTO_ERROR,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINANDO_PROYECTO} from "../../types";

const ProyectoState = props =>{


    /*const proyectos = [
        {id:1, nombre: "Tienda Virtual"},
        {id:2, nombre: "Intranet"},
        {id: 3, nombre: "Diseño de sitio web"}
    ]*/

    const initialState ={
        //Arreglo proyecto
        proyectos :[],
        formulario: false,
        errorformulario: false,
        proyecto: null,
        mensaje: null
    }

    //Dispacht para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //Obtrener los proyectos
    const obtenerProyectos = async () =>{
        try {
            const resultado = await clienteAxios.get("api/proyectos");
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
           /* console.log(error);
            const alerta = {
                msg: "Hubo un error",
                categoria: "alerta-error"
            }*/
            console.log(error);
            dispatch({
                type: PROYECTO_ERROR,
                payload: error
            });
        }
    }

    //Agregar proyecto nuevo
    const agregarProyecto = async proyecto=>{
        //El state proyecto que viene de nuevo proyecto no tiene id por eso aqui se le agrega un id al proyecto que es un state de objetos
        //proyecto.id = uuid.v4();

        //Agregamos el proyecto como un distpach
        /*dispatch({
            type: AGREGAR_PROYECTO, 
            payload: proyecto
        })*/
        try {
            const resultado = await clienteAxios.post("/api/proyectos", proyecto);
            console.log(resultado);
            dispatch({
                type: AGREGAR_PROYECTO, 
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: PROYECTO_ERROR,
                payload: error
            });
        }
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
    const proyectoEliminado = async proyectoId=>{
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINANDO_PROYECTO,
                payload: proyectoId
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: PROYECTO_ERROR,
                payload: error
            });
        }
    }
  

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                proyecto: state.proyecto,
                errorformulario: state.errorformulario,
                formulario: state.formulario,
                mensaje: state.mensaje,
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