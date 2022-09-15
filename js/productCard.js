const gender = {
    male: 'male',
    female: 'female',
    child: 'child',
    unisex: 'unisex'
}

const productos = [
    { id: 1, nombre: 'Pantalon', marca: 'Kappa', precio: 57000, categoria: 'Ropa', gender: gender.unisex, img: './img/pantalon.jpg' },
    { id: 2, nombre: 'Poleron', marca: 'Kappa', precio: 50000, categoria: 'Ropa', gender: gender.female, img: './img/poleron.jpg' },
    { id: 3, nombre: 'Polera', marca: 'Nike', precio: 20000, categoria: 'Ropa', gender: gender.male, img: './img/polera.jpg' },
    { id: 4, nombre: 'Polera', marca: 'Nike', precio: 20000, categoria: 'Ropa', gender: gender.male, img: './img/polera.jpg' },
]

const productContainer = document.querySelector('#products');

const productCard = () => {

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.setAttribute('id', producto.id);
        div.innerHTML = `
        <div class='card__product'>
            <img class='button' src=${producto.img} alt=''>
            <h5>${producto.marca}</h5>
            <h3>${producto.nombre}</h3>
            <p class='card__price'>$${producto.precio}</p>
            <div class='card__footer center'>
                <div class='button add-cart'><p>Añadir al carrito</p></div>
            </div>
        </div>
        `
        productContainer.appendChild(div);
    })

}

document.addEventListener('DOMContentLoaded', e => {
    productCard();
})