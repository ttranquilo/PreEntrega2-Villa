import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./itemlistcontainer.css"


const products = [
  {
    id: 1,
    name: 'Laptop HP',
    brand: 'HP',
    price: 799.99,
  },
  {
    id: 2,
    name: 'Smartphone Samsung',
    brand: 'Samsung',
    price: 499.99,
  },
  {
    id: 3,
    name: 'Tablet Apple',
    brand: 'Apple',
    price: 649.99,
  },
  {
    id: 4,
    name: 'Monitor Dell',
    brand: 'Dell',
    price: 299.99,
  },
  {
    id: 5,
    name: 'Cámara Canon',
    brand: 'Canon',
    price: 599.99,
  },
  {
    id: 6,
    name: 'Auriculares Sony',
    brand: 'Sony',
    price: 149.99,
  },
  {
    id: 7,
    name: 'Impresora Epson',
    brand: 'Epson',
    price: 199.99,
  },
  {
    id: 8,
    name: 'Teclado Logitech',
    brand: 'Logitech',
    price: 49.99,
  },
  {
    id: 9,
    name: 'Mouse Microsoft',
    brand: 'Microsoft',
    price: 29.99,
  },
  {
    id: 10,
    name: 'Altavoces Bose',
    brand: 'Bose',
    price: 249.99,
  },
];



function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.brand} - {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ItemDetailContainer() {
  const { id } = useParams(); // Obtenemos el ID de la ruta
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulamos la carga de detalles del producto con el ID proporcionado
    const productFound = products.find((p) => p.id === parseInt(id));

    if (productFound) {
      // Si encontramos el producto, actualizamos el estado 'product'
      setProduct(productFound);
    }
    // En una aplicación real, aquí realizarías una solicitud a un servidor para obtener los detalles del producto.
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.brand} - {product.name}</h2>
          <p>Precio: ${product.price.toFixed(2)}</p>
          {/* Agrega más detalles si es necesario */}
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export { ItemListContainer, ItemDetailContainer };