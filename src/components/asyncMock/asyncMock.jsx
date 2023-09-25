import netflix from './image/Netflix-Symbol.png'
import paramount from './image/paramount.png'
import hboMax from './image/hboMax.png'

const products = [
    {
        id: '1',
        name: 'Netflix',
        price: 1875.00,
        category: 'Multimedia',
        img: netflix,
        stock: 10,
        description: 'Cuentas Netflix'
    },
    { 
        id: '2', 
        name: 'Paramoun+', 
        price: 1927.00, 
        category: 'Multimedia', 
        img: paramount, 
        stock: 10,
        description: 'Cuentas Paramoun+'},
    { 
        id: '3', 
        name: 'HBO Max', 
        price: 2035.00, 
        category: 'Multimedia', 
        img: hboMax, 
        stock: 10,
        description: 'Cuentas HBO Max'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
// 


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((product) => product.category === categoryId);
            resolve(filteredProducts);
        }, 500);
    });
};

