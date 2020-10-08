import React, {useReducer} from 'react';
import authReducer from "../../context/autentificacion/authReducer";
import authContext from "../../context/autentificacion/authContext";
import {REGISTRO_EXITOSO,
        REGISTRO_ERROR,
        OBTENER_USUARIO,
        LOGIN_EXITOSO,
        LOGIN_ERROR,
        CERRAR_SESION} from "../../types";

const AuthState = () => {
    
    //Creando state initial
    const initialstate = {

    };

    //Creando el usereducer para el state initial
    const {state, dispatch} = useReducer( authReducer, initialstate);
    
    return ( 
        <authContext.Provider
            value = {{

            }}
        >
            {props.children}
        </authContext.Provider>
    );

}
 
export default authContext;