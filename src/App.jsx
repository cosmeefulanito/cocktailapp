import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ModalBebida from './components/ModalBebida'
import Resultado from './components/Resultado'
import { BebidasProvider } from './context/BebidasProvider'
import { CategoriasProvider } from './context/CategoriasProvider'
import drink from './assets/images/drink-svgrepo-com.svg'
import cart from './assets/images/shopping-cart-svgrepo-com.svg'

function App() {
  return (
    <BebidasProvider>
      <CategoriasProvider>
        {/* <header className='d-flex justify-content-around align-items-center p-2'>
          <h1 className='mx-auto'>
            <img src={drink} width={45} height={45} /> Cocktail APP
          </h1>
          <img src={cart} alt='imagen de favoritos' width={45} height={45} className='' />
        </header> */}
        <Container className='mt-5'>
          <Formulario />
          <Resultado />
          <ModalBebida />
        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  )
}

export default App
