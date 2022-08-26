const productos = [
    { id: 1, nombre: 'Televisor', marca: 'LG', precio: 200000, categoria: 'Tecnologia', img: './img/televisor.jpg' },
    { id: 2, nombre: 'Poleron', marca: 'Kappa', precio: 50000, categoria: 'Ropa', img: './img/poleron.jpg' },
    { id: 3, nombre: 'Iphone', marca: 'Apple', precio: 1000000, categoria: 'Tecnologia', subcategoria: 'Calulares', img: './img/iphone.png' },
]

const productContainer = document.querySelector('.products-container');

const productCard = () => {

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.setAttribute('class', 'card card-products');
        div.setAttribute('id', producto.id);
        div.innerHTML = `
        <img src=${producto.img} alt=''>
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        `
        productContainer.appendChild(div);
        console.log(div.innerHTML)
    })

}

document.addEventListener('DOMContentLoaded', e => {
    productCard();
})