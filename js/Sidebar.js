
const menu = document.querySelector('#menu')
const sidebar = document.querySelector('.container-sidebar');
const bgSidebar = document.querySelector('.background-sidebar');


const Sidebar = () => {
    menu.addEventListener('click', e => {
        e.preventDefault();
        sidebar.classList.toggle('active');
    });

    bgSidebar.addEventListener('click', e => {
        e.preventDefault();
        sidebar.classList.remove('active');
    });
}

export default Sidebar;