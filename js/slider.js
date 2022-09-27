
//Slider element
const slider = () => {
    const sliderSection = document.querySelectorAll('.slider-section');
    const sliderPagination = document.querySelector('.slider-pagination');

    let i = 0;

    
    //If present slider
    if (sliderPagination) {
        
        //Change section slider from slider pagination
        sliderPagination.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.classList[0] === 'slider-page-item') {
                sliderSection[i].classList.remove('active');
                sliderPagination.children[i].classList.remove('active')
                i = e.target.id;
                sliderSection[i].classList.add('active');
                sliderPagination.children[i].classList.add('active')

                e.target.classList.add('active');
            }
        })

        //Automatic slider change

        const autoSlider = () => {

            if (i == sliderSection.length - 1) {
                sliderSection[i].classList.remove('active');
                sliderPagination.children[i].classList.remove('active');
                i = 0;
                sliderSection[i].classList.add('active');
                sliderPagination.children[i].classList.add('active');

            } else {
                sliderSection[i].classList.remove('active');
                sliderPagination.children[i].classList.remove('active');
                i++
                sliderSection[i].classList.add('active');
                sliderPagination.children[i].classList.add('active')
            }
        }



        //Add pagination to slider
        const addSliderPagination = () => {
            for (let i = sliderSection.length - 1; i >= 0; i--) {
                const sliderPageItem = document.createElement('div');

                if (i === 0) {
                    sliderPageItem.setAttribute('id', i);
                    sliderPageItem.setAttribute('class', 'slider-page-item circle button active');
                    sliderPagination.insertAdjacentElement('afterbegin', sliderPageItem);
                } else {
                    sliderPageItem.setAttribute('id', i);
                    sliderPageItem.setAttribute('class', 'slider-page-item circle button');
                    sliderPagination.insertAdjacentElement('afterbegin', sliderPageItem);
                }

            }


        }


        addSliderPagination();
        setInterval(autoSlider, 5000);

    }
}
// document.addEventListener('DOMContentLoaded', e => {
//     slider();
// }); 

export default slider;
