import React, {Fragment, useState} from 'react';


const NuevoProyecto = () => {

    //State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:""
    });
    //Creando destruction del state
    let {nombre} = proyecto;

    //Creando funcion para guasrdar datos
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name ] : e.target.value
        });
    }

    //Creando funcion para el boton agregar proyecto
    const onSubmitProyecto = (e) =>{
        e.preventDefault()

        //Validar Proyecto
        //Agregar al state
        //Reiniciar el form
    }

    return ( 
        <Fragment>
        <button
            type ="button"
            className="btn btn-block btn-primario"
        >
            Nuevo Proyecto
        </button>
        <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
            />

            <input
                type="submit"   
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />
        </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;