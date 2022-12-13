import { Outlet, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { BebidasProvider } from '../context/BebidasProvider'
import { CategoriasProvider } from '../context/CategoriasProvider'
import drink from '../assets/images/drink-svgrepo-com.svg'
import likeIcon from '../assets/images/lover-svgrepo-com.svg'
import Carousel from './Slider'

const Layout = () => {
  return (
    <BebidasProvider>
      <CategoriasProvider>
        <header className='d-flex justify-content-around align-items-center p-2'>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className='mx-auto'>
              <img src={drink} width={45} height={45} /> Cocktail APP
            </h1>
          </Link>
          <Link to="/favoritos">
            <img src={likeIcon} alt='imagen de favoritos' width={45} height={45} className='' />
          </Link>          
        </header>
        {/* <nav>
        <Link to="/{nombre}">
            <Carousel/>
          </Link>
        </nav> */}
        <Container className='mt-5'>
          <Outlet />
          {/* <Formulario />
          <Resultado />
          <ModalBebida /> */}
        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  )
}

export default Layout