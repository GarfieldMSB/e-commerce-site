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
        constructor(nav, navMobile, scrollAbajo) {
            this.nav = nav
            this.navMobile = navMobile
            this.scrollAbajo = scrollAbajo
        }

        //Cambia el color del nav cuando el scroll se encuentra en 500 en adelante5
        cambiaColor() {
            document.addEventListener("scroll", () => {
                let scrollAbajo = window.scrollY;
                if (scrollAbajo >= 0 && scrollAbajo <= 200) {
                    this.nav.classList.remove("nav-background");
                    this.navMobile.classList.remove('nav-background');
                } else {
                    this.nav.classList.add("nav-background");
                    this.navMobile.classList.add('nav-background');
                }
                console.log(scrollAbajo)
            })
        }
    }

    let nav = document.querySelector("#nav")
    let navMobile = document.querySelector("#nav-mobile")
    let scrollAbajo = window.scrollY;

    //Si la web se encuentra con un scroll de 500 el nav tiene otro color

    if (scrollAbajo >= 200) {
        nav.classList.add('nav-background');

        if (navMobile) {
            navMobile.classList.add('nav-background');
        }
    }
    const color = new Color(nav, navMobile, scrollAbajo);
    color.cambiaColor()
}

export default Navbar;
