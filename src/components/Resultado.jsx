import useBebidas from "../hook/useBebidas"
import { Row } from "react-bootstrap"
import Bebida from "./Bebida"
import Pager from "./Pager"
import { useEffect } from "react"


const Resultado = () => {
    const { dataFilter } = useBebidas()

    return (
        <>
            <Row className='mt-5'>
                {dataFilter.map(bebida =>
                    <Bebida
                        key={bebida.idDrink}
                        bebida={bebida} />
                )}
                <div className="d-flex justify-content-center">
                    <Pager />
                </div>
            </Row>
        </>
    )
}

export default Resultado