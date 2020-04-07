import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autentificacion/authContext';

// Componente que toma otro componente y crea una copia de los props
const RutaPrivada = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    // revisamos si el usuario esta autenticado
    return (
        <Route {...props}
            render={
                props => (!autenticado && !cargando) ? (
                    <Redirect to="/" /> // lo enviamos a la pagina donde va a iniciar sesion
                ) : (
                        <Component {...props} /> // lo enviamosal componente que lo esta mandando llamar
                    )
            }
        />
    );
}

export default RutaPrivada;






