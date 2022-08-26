const orderByList = ['Precio menor a mayor', 'Precio mayor a menor', 'Recomendados'];
const actionBar = document.querySelector('.action-bar');

const actionsBar = () => {
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
    actionsBar();
});

// export default actionsBar;