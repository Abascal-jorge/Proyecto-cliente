import React, {useState} from 'react';
import {Link} from "react-router-dom";



const Login = () => {

     //State para iniciar sesion
     const [usuario, guardarusuario]  = useState({
            email: "",
            password: ""
     });
     //Aplicando destructuion al state usuario
     const {email, password} = usuario;
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


        //Pasarlo al action

    }
    return ( 
        <div className="form-usuario">
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