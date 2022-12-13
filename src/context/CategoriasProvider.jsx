import { useState, useEffect, createContext  } from "react";
import axios from "axios";

const CategoriasContext = createContext()

const CategoriasProvider = ({children}) => {
    const [categorias, setCategorias] = useState()
    const getCategoria = async() => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const result = await axios (url);
            
            const {drinks} = result.data
            setCategorias(drinks)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        getCategoria()
    },[])

    return (
        <CategoriasContext.Provider value={{categorias}}>
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}

export default CategoriasContext