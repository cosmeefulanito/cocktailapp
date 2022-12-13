import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Error from './components/Error'
import Favoritos from './components/Favoritos'
import Layout from './components/Layout'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import ModalBebida from './components/ModalBebida'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element:  [<Formulario />, <Resultado />, <ModalBebida />],
        errorElement: <Error/>
      },
      {
        path: "/favoritos",
        element: <Favoritos />,
        errorElement: <Error/>
      }
    ]
    
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
