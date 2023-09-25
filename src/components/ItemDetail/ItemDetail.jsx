import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className='CarItem container-lg'>
            <header className='Header text-center'>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImgg d-flex mx-auto justify-content-center'/>
            </picture>
            <section>
                <p className='info'>
                    Categoria: {category}
                </p>
                <p className='info'>
                    Descripcion: {description}
                </p>
                <p className='info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
            </footer>
        </article>
    )
}



export default ItemDetail