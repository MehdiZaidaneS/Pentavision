import React from 'react';
import denmark from "./denmark.png"
import './Participant.css';
import { RiStarSLine } from "react-icons/ri";

const Participant = () => {
    return (
        <div className='participant'>
            <img src={denmark} alt='' width={50}></img>
            <div>
              <h3>Dinamarca</h3>
              <p>Saba: Sand</p>
            </div>
            <div className='estrellas'>
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
              <RiStarSLine />
            </div>
        </div>
    );
};

export default Participant;