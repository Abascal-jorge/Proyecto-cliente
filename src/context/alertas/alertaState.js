import React, {useReducer} from 'react';
import alertaContext from "../../context/alertas/alertaContext";
import alertaReducer from '../../context/alertas/alertaReducer';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";

const AlertaState = props => {

    //Creamos el state inicial
    const initialState = {
        alerta: null
    }

    //Creamos el state para el context reducer
    const [state, dispatch] = useReducer(alertaReducer, initialState);

    //creamos funciones
    //Creamos funcion para mostrar alerta y ocultarla
    const mostrarAlerta = (msg, categoria) =>{
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        //Creamos un settimeout para quitar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider
            value = {{
                alerta: state.alerta,
                mostrarAlerta
            }}
        > 
            {props.children}
        </alertaContext.Provider>

    );
}

export default AlertaState;

