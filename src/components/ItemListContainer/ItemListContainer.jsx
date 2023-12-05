import './ItemListContainer.css'
import { Getproducts } from '../Async'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        Getproducts()
            .then(respuesta => setProductos(respuesta))
    }, []);

    return (
        <>
            <div className='main-Container'>
                <div className='container-Title'>
                    <h2>Mis productos</h2>
                </div>
                <div className='container-Productos'>
                    <ItemList productos={productos} />
                </div>
            </div>

        </>

    )
}

export default ItemListContainer