import React, {useContext, useState, useEffect} from 'react';
import AlertaContext from "../../context/alertas/alertaContext";
import authContext from "../../context/autentificacion/authContext";
import {Link} from "react-router-dom";


const NuevaCuenta = (props) => {

    //Creamos una variable para utilizar el context y el reducer funciones y state
    const AuthContext = useContext(authContext);
    const {mensaje, autenticado, registrarUsuario} = AuthContext;

    // state reducer
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push("./proyectos");
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    //State para iniciar sesion
    const [usuario, guardarusuario]  = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: ""
    });

    //Aplicando destructuion al state usuario
    const {nombre, email, password, confirmar} = usuario;


    //Creando funcion para detectar el cambio en el ccampo email y contraseña
    const onChange = (e)=>{
        guardarusuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Creando funcion para cuando el usuario mande sus datos
    const onSubmitEnviar = (e)=>{
        e.preventDefault();

        //Validar que no haya campos vacios
        if( nombre === "" || email === "" || password === "" || confirmar === ""){
           mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
           return;
        }
        
        //Contraseña de 6 digitos revision 
        if(password.length < 6 ){
            mostrarAlerta("La contraseña debe contener minimo 6 digitos", "alerta-error");
            return;
        }

        //COntraseñas iguales
        if( password !== confirmar){
            mostrarAlerta("Las contraseñas no son iguales", "alerta-error");
            return;
        }
         
        //Enviamos los datos a la base de datos
        registrarUsuario({
            nombre: nombre,
            email: email,
            password: password
        });
    }


    return ( 
        <div className="form-usuario">
            { alerta ? <div className={`alerta ${alerta.categoria}`}> { alerta.msg } </div>  : null}
        <div className="contenedor-form sombra-dark">
            <h1>Obtener una cuenta</h1>
            <form
                onSubmit={onSubmitEnviar}
            >
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name ="nombre"
                        placeholder="Escribe Tu Nombre"
                        onChange={onChange}
                        value={nombre}
                    />
                </div>
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
                    <label htmlFor="confirmar">Confirmar Password</label>
                    <input
                        type="password"
                        id="confirmar"
                        name ="confirmar"
                        placeholder="Confirma tu password"
                        onChange={onChange}
                        value={confirmar}
                    />
                </div>
                <div className="campo-form">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrar"
                    />
                </div>
                <Link to={"/"} className="enlace-cuenta">
                    Iniciar Sesion
                </Link>
            </form>
        </div>
    </div>
     );
}
 
export default NuevaCuenta;