const orderByList = ['Recomendados', 'Precio menor a mayor', 'Precio mayor a menor'];
const actionBar = document.getElementById('orderby');

const addOrderBy = () => {
    const orderBy = document.createElement('select');
    orderBy.setAttribute('id', 'order-by');
    orderBy.setAttribute('class', 'order-by');

    orderByList.forEach(e => {
        let option = document.createElement('option');
        option.innerHTML = e;
        option.value = e;
        orderBy.appendChild(option);
    });
    actionBar.appendChild(orderBy);
}

document.addEventListener('DOMContentLoaded', e => {
    addOrderBy();
});

// export default actionsBar;