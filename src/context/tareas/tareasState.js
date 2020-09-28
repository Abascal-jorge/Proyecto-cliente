import React, { useReducer } from 'react';
import tareasContext from "./tareasContext";
import tareasReducer from "./tareasReducer";


const TareasState = props => {

    //Creando objeto inicial para el state
    const initialstate = {
        tarea: ""
    };

    //Creando un state para los componentes
    const [state, dispatch] = useReducer(tareasReducer, initialstate);

    return ( 
        <tareasContext.Provider
            value={{
                //Aqui van los datos a pasar a los componentes state o funciones

            }}
        >
            {props.children}
        </tareasContext.Provider>
     );

}
 
export default TareasState;