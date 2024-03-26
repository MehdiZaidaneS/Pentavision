import axios from "axios"
import React, { useContext, useState } from "react"


const PORT_URL= "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {
      
    const [error, setError] = useState(null)
    const [countries, setCountries] = useState([])

    const addCountry = async(country) =>{
        const response = await axios.post(`${PORT_URL}add-country`, country)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        console.log(response)
       getCountries()
    }

    const getCountries = async() =>{
        const response = await axios.get(`${PORT_URL}get-countries`)
        setCountries(response.data)
    }


    return(
        <GlobalContext.Provider value={{
             error,
             setError,
             countries,
             setCountries,
             addCountry,
             getCountries
        }}>
            {children}
        </GlobalContext.Provider>    
    )
} 



export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}