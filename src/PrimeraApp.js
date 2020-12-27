import React from 'react';
import PropTypes from 'prop-types';


const PrimerApp = ( { saludo, subtitulo='soy un subtitulo' } ) => {
    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo,null,3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    );
    
}

PrimerApp.propTypes={
    saludo:PropTypes.string.isRequired
};

export default PrimerApp;