import React, {useReducer} from 'react';
import authReducer from "../../context/autentificacion/authReducer";
import authContext from "../../context/autentificacion/authContext";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {REGISTRO_EXITOSO,
        REGISTRO_ERROR,
        OBTENER_USUARIO,
        LOGIN_EXITOSO,
        LOGIN_ERROR,
        CERRAR_SESION} from "../../types";

const AuthState = props => {
    
    //Creando state initial
    const initialstate = {
        token: localStorage.getItem("token"),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    };

    //Creando el usereducer para el state initial
    const [state, dispatch] = useReducer( authReducer, initialstate);

    //Las funciones para el reducer
    //Agregando un usuario cuenta nueva
    const registrarUsuario = async datos => {
        try {

            const respuesta = await clienteAxios.post("/api/usuarios", datos);
            //console.log(respuesta);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });
            usuarioAutenticado();
        } catch (error) {

            const alerta = {
                msg: error.response.data.msg,
                categoria: "alerta-error"
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            } );

        }
    }

    //Retornar el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem("token");

        if (token) {
            //Todo: funcion para enviar el token al headers
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get("/api/auth");
            //console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    //Cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await  clienteAxios.post("/api/auth", datos);
            //console.log(respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            //OBTENER EL USUARIO
            usuarioAutenticado();
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: "alerta-error"
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    //Cerrar sesion
    const CerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION
        });
    }   
    return ( 
        <authContext.Provider
            value = {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                CerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    );

}
 
export default AuthState;