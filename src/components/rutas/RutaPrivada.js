import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/autentificacion/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
    
    const AuthContext = useContext(authContext);
    const { autenticado, cargando, usuarioAutenticado} = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    return ( 
        <Route
            { ...props }
            render = { props => !autenticado && !cargando ?
            (
            <Redirect to="/"/>
            ) : 
            <Component {...props}/>
        }/>
     );
}
 
export default RutaPrivada;