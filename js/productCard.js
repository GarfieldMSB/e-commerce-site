const gender = {
    male: 'male',
    female: 'female',
    child: 'child',
    unisex: 'unisex'
}
const marcas = [
    {id : 1, nombre: 'Kappa'},
    {id : 3, nombre: 'Nike'},
    {id : 2, nombre: 'Adidas'}
]

const size = [
    {id: 1, size: 'S'},
    {id: 2, size: 'M'},
    {id: 3, size: 'L'},
    {id: 4, size: 'XL'}
]

const productos = [
    { id: 1, nombre: 'Pantalon', marca: 'Kappa', precio: 57000, categoria: 'Ropa', gender: gender.unisex, img: './img/pantalon.jpg' },
    { id: 2, nombre: 'Poleron', marca: 'Kappa', precio: 50000, categoria: 'Ropa', gender: gender.female, img: './img/poleron.jpg' },
    { id: 3, nombre: 'Polera', marca: 'Nike', precio: 20000, categoria: 'Ropa', gender: gender.male, img: './img/polera.jpg' },
    { id: 4, nombre: 'Polera', marca: 'Nike', precio: 20000, categoria: 'Ropa', gender: gender.male, img: './img/polera.jpg' },
]

//Products
const productContainer = document.querySelector('#products');
//Filters
const trademarkElementFilter = document.querySelector('#trademark');
const sizeElementFilter = document.querySelector('#size');
const priceElementFilter = document.querySelector('#price');


//Add card with products
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

//Add filters to desktop version
const addFilters = () => {

    marcas.map(({id, nombre}) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'checkbox-container');
        div.innerHTML = `
        <input class='checkbox' type='checkbox' id='${id}' name='${nombre}' value='${nombre}'>
        <label for='${id}'>${nombre}</label>
        `

        trademarkElementFilter.insertAdjacentElement('afterbegin', div)
    });

    size.map(({id, size}) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'checkbox-container');
        div.innerHTML = `
        <input class='checkbox' type='checkbox' id='${id}' name='${size}' value='${size}'>
        <label for='${id}'>${size}</label>
        `

        sizeElementFilter.insertAdjacentElement('afterbegin', div)
    });

    // marcas.forEach(({id, nombre}) => {
    //     const div = document.createElement('div')
    //     div.setAttribute('class', 'checkbox-container');
    //     div.innerHTML = `
    //     <input class='checkbox' type='checkbox' id='${id}' name='${nombre}' value='${nombre}'>
    //     <label for='${id}'>${nombre}</label>
    //     `

    //     trademarkElementFilter.insertAdjacentElement('afterbegin', div)
    // });
}

document.addEventListener('DOMContentLoaded', e => {
    productCard();
    addFilters();
})