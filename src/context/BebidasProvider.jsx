import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [idBebida, setIdBebida] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)
    const [favoritos, setFavoritos] = useState(
        localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : []
    )
    const [totalBebidas, setTotalBebidas] = useState(null)

    // paginador
    const [itemPorPagina] = useState(6)
    const [dataFilter, setDataFilter] = useState(
        Object.keys(bebidas).length > 0 ? bebidas.slice(0, itemPorPagina) : []
    )
    const [paginaACtual, setPaginaActual] = useState(1)


    useEffect(() => {
        setCargando(true)
        if (!idBebida) return
        obtenerReceta()

    }, [idBebida])

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    const obtenerReceta = async () => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`
            const { data } = await axios(url)
            console.log(data.drinks[0])
            setReceta(data.drinks[0])
        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false)
        }
    }

    const consultarBebidas = async (datos) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.bebida}&c=${datos.categoria}`
        const { data } = await axios(url)
        setBebidas(data.drinks)
        setTotalBebidas(data.drinks.length)
        setDataFilter(data.drinks.slice(0, itemPorPagina))
        setPaginaActual(1)

    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleIdBebidaClick = (id) => {
        setIdBebida(id)
    }

    const guardarFavoritos = bebida => {
            const filtoFavoritos = favoritos.filter( favorito => favorito.idDrink != bebida.idDrink)
            console.log("--> ", filtoFavoritos)
            setFavoritos([...filtoFavoritos, bebida])        
        // console.log(favoritos)      
        // console.log(bebida.idDrink)
    }

    const handleClickPaginate = (pag) => {
        setPaginaActual(pag)
        const pageIndex = pag - 1;
        const firstIndex = pageIndex * itemPorPagina;
        const lastIndex = pageIndex * itemPorPagina + itemPorPagina;

        const indiceUltimoElemento = paginaACtual * itemPorPagina;
        // const indexOfLastPost = currentPage * postsPerPage;
        // 1*6 = 6
        // 2*6 = 12
        // 3*6 = 18
        // 4*6 = 24
        const indicePrimerElemento = indiceUltimoElemento - itemPorPagina;
        // const indexOfFirstPost = indexOfLastPost - postsPerPage;
        // 6-6 = 0
        // 12-6= 6
        // 18-6= 12
        // 24-6= 18

        console.log("Primera: ", firstIndex)
        console.log("Ultima: ", lastIndex)

        // const actualElemento = bebidas.slice(indicePrimerElemento, indiceUltimoElemento)
        // const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
        // (0,6)
        // (6,12)
        // (12,18)
        // (18,24)
        setDataFilter(bebidas.slice(firstIndex, lastIndex))
        // setDataFilter(bebidas.slice(indicePrimerElemento, indiceUltimoElemento))
    }


    const handleRemoveFavoritos = (id) => {
        console.log("Eliminando de favoritos el elemento: ", id)
        console.log("Favoritos: ", favoritos)
        const favoritosActualizado = favoritos.filter( favorito => favorito.idDrink != id)
        setFavoritos(favoritosActualizado)
    }










    return (
        <BebidasContext.Provider value={{
            consultarBebidas,
            bebidas,
            handleModalClick,
            modal,
            handleIdBebidaClick,
            receta,
            cargando,
            guardarFavoritos,
            favoritos,
            totalBebidas,
            dataFilter,
            handleClickPaginate,
            paginaACtual,
            itemPorPagina,
            handleRemoveFavoritos
        }}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext