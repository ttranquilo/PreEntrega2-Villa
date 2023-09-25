import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-secondary" onClick={decrement}>-</button>
                </div>
                <div className="col-6 text-center">
                    <h4>{quantity}</h4>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary" onClick={increment}>+</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center d-flex mx-auto justify-content-center mb-2">
                    <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
