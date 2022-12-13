import {useRouteError} from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log("Error!!" , error);
    
  return (
    <div>
        <h1>¡OoPS!</h1>
        <p>Ha ocurrido un error</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default Error