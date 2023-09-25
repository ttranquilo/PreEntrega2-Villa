import cart from './assets/cart.svg'
import './cartWidget.css'

const CartWidget =() => {
    return (
        <div className='container cajita'>
            <img src={cart} className='cart' alt="cart-wdiget" />
            <p className='d-inline-block ms-1'>0</p>
        </div>
    )
}

export default CartWidget