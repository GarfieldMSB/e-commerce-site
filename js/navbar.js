// const Navbar = () => {
//     let lienzo = document.querySelector('#nav');
//     let downScroll = window.scrollY;


//     const Color = (lienzo, downScroll) => {

//         const changeColor = () => {
//             document.addEventListener('scroll', () => {
//                 let downScroll = window.scrollY;


//                 if (downScroll >= 0 && downScroll <= 500) lienzo.setAttribute('class', 'clase');
//             })
//         }

//     }
// const newColor = Color(lienzo, downScroll);
//         newColor.changeColor();

// }



// export default Navbar;

const Navbar = () => {

    class Color {
        constructor(lienzo, scrollAbajo) {
            this.lienzo = lienzo
            this.scrollAbajo = scrollAbajo
        }

        //Cambia el color del nav cuando el scroll se encuentra en 500 en adelante5
        cambiaColor() {
            document.addEventListener("scroll", () => {
                let scrollAbajo = window.scrollY;
                (scrollAbajo >= 0 && scrollAbajo <= 400) ? this.lienzo.classList.remove("nav-background")
                        : this.lienzo.classList.add("nav-background")
            })
        }
    }

    let lienzo = document.querySelector("#nav")
    let scrollAbajo = window.scrollY;

    //Si la web se encuentra con un scroll de 500 el nav tiene otro color
    if (scrollAbajo >= 400) {
        lienzo.classList.add('nav-background')           
    }
    const color = new Color(lienzo, scrollAbajo);
    color.cambiaColor()
}

export default Navbar;
