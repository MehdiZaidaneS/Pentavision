import React from 'react';
import paper from "./paper.png"
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={paper} alt=''/>
            <div className='text'>
              <h1>Consigue tus plantillas para Eurovision!</h1>
              <button>Descargar</button>
            </div>
            
        </div>
    );
};

export default Banner;