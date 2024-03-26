import React, { useEffect } from 'react';
import "./Table.css"
// import denmark from "../Participants/denmark.png"
import suiza from "./suiza.png"
import { useGlobalContext } from '../../context/globalContext';

const Table = () => {

    const {getCountries, countries} = useGlobalContext()

    useEffect(()=>{
        getCountries()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className='table'>
            <table>
                <tr>
                   <th>#</th>
                   <th>Pais</th>
                   <th>Cancion</th>
                   <th>Puntos</th>
                   <th>Posc. 2023</th>
                </tr>
                {
                  countries.map(country =>{
                      return(
                      <tr>
                        <td>{country.position}</td>
                        {/* <td><img src={suiza} alt='' width={30}></img></td> */}
                        <td>{country.country}</td>
                        <td>{country.song}</td>
                        <td>{country.points}</td>
                        <td>{country.position2023}</td>
                      </tr>

                      )
                  })
                }
                
                
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src={suiza} alt='' width={30}></img></td>
                    <td>Saba: Sand</td>
                    <td>9/10</td>
                    <td>Cuarta</td>
                </tr>

                
            </table>
        </div>
    );
};

export default Table;