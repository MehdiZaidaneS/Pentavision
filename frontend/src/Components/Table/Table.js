import React from 'react';
import "./Table.css"
// import denmark from "../Participants/denmark.png"
import suiza from "./suiza.png"

const Table = () => {
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