import './CartWidget.css'

const CardWidget = () => {
    const imgCarrito = './shopping-cart_icon-icons.com_65051.svg'
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
            <strong>3</strong>
        </div>
    )
}

export default CardWidget