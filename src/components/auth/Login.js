import React, {useContext, useState, useEffect} from 'react';
import authContext from "../../context/autentificacion/authContext";
import alertaContext from "../../context/alertas/alertaContext";
import { Link } from "react-router-dom";



const Login = (props) => {

    //Creamos la variable para utilizar las funciones y state del authreducer y authstate
    const AuthContext = useContext(authContext);
    const {mensaje, autenticado, iniciarSesion} = AuthContext;

    //Creamos la variable para utilizar alertacontext
    const AlertaContext = useContext(alertaContext);
    const {alerta, mostrarAlerta} = AlertaContext;

     //State para iniciar sesion
     const [usuario, guardarusuario]  = useState({
            email: "",
            password: ""
     });
     //Aplicando destructuion al state usuario
     const {email, password} = usuario;
 
     //ERn caso de que el usuario no exista
     useEffect(() => {
         if(autenticado){
            props.history.push("./proyectos");
         }
         if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
         }
         // eslint-disable-next-line
     }, [mensaje, autenticado])

    //Creando funcion para detectar el cambio en el ccampo email y contraseña
    const onChange = (e)=>{
        guardarusuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Creando funcion para cuando el usuario mande sus datos
    const onSubmit = (e)=>{
        e.preventDefault();

        //Validar que no haya campos vacios
        if(email === "" || password === ""){
            mostrarAlerta("Todos los campos son abligatorios", "alerta-error");
        }

        //Pasarlo al action
        iniciarSesion({email, password});
    }

    return ( 
        <div className="form-usuario">
            {alerta? <div className={`alerta ${alerta.categoria}`}> { alerta.msg } </div> : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name ="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name ="password"
                            placeholder="Tu password"
                            onChange={onChange}
                            value = {password}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                    <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Login;