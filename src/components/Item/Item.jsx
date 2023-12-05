import './Item.css'

const Item = ({title,description,price,img}) => {
    return (
        <div className='container-Item'>
            <h1>{title}</h1>
            <img className="img" src={img} alt={title} />
            <p>{description}</p>
            <p>{price}</p>
            <button>Ver detalle del producto</button>
            <p>Stock disponible: 10</p>
        </div>
    )
}

export default Item