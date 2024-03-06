import React from 'react';
import "./Taskbar.css"
import logo from "./logo.png"
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Taskbar = () => {
    return (
        <div className='taskbar'>
            <div className='logo'>
              <img src={logo} width={50} alt=''></img>
            </div>
            <div className='tasks'>
              <p>Inicio</p>
              <p>Sorteo</p>
               <p>Prediccion</p>
            </div>
            <div className='socialMedia'>
                <FaInstagram color='white' size="25px" style={{margin:"5px"}}/>
                <FaTwitter color='white' size="25px" style={{margin:"5px"}}/>
                <FaTiktok color='white' size="24px" style={{margin:"5px"}}/>

            </div>
        </div>
    );
};

export default Taskbar;