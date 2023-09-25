import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <Card className='CardItem'>
            <Card.Header className='Header'>
                <Card.Title className='ItemHeader text-center'>
                    {name}
                </Card.Title>
            </Card.Header>
            <div className='p-3'>
            <Card.Img src={img} alt={name} className='ItemImggg' />
            </div>
            <Card.Body>
                <Card.Text className='Info'>
                    Precio: ${price}
                </Card.Text>
                <Card.Text className='Info'>
                    Stock: {stock}
                </Card.Text>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;
