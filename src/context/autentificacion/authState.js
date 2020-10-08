import React, {useReducer} from 'react';
import authReducer from "../../context/autentificacion/authReducer";
import authContext from "../../context/autentificacion/authContext";
import clienteAxios from "../../config/axios";
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
        mensaje: null
    };

    //Creando el usereducer para el state initial
    const [state, dispatch] = useReducer( authReducer, initialstate);

    //Las funciones para el reducer
    const registrarUsuario = async datos => {
        try {

            const respuesta = await clienteAxios.post("/api/usuarios", datos);
            console.log(respuesta);
            dispatch({
                type: REGISTRO_EXITOSO
            });

        } catch (error) {

            console.log(error);
            dispatch({
                type: REGISTRO_ERROR
            } );

        }
    }
    
    return ( 
        <authContext.Provider
            value = {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    );

}
 
export default AuthState;