const slides= document.querySelectorAll('.slide');
const indicators= document.querySelectorAll('.indicator');


let currentSlide=0;

/*Función vista primer slide */
function showSlide(slideIndex){
    slides.forEach((slide,index)=>{
        if(index==slideIndex){
            slide.style.display='block';
        }else{
            slide.style.display='none';
        }
    });

    currentSlide=slideIndex;
    updateIndicators();
    }

    function updateIndicators(){
        indicators.forEach((indicator,index)=>{
            if(index===currentSlide){
                indicator.classList.add('active');
            }else{
                indicator.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0);
        }
    }
    
    function previousSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        } else {
            showSlide(slides.length - 1);
        }
    }
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Cambia automáticamente cada 3 segundos


    /*Segundo carrousel */

    let slideIndex = 0;
    const slides1 = document.querySelectorAll(".carousel-slide");

function showSlideSecond(n) {
  slides1[slideIndex].style.display = "none";
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides1.length) {
    slideIndex = 0;
  }
  slides1[slideIndex].style.display = "block";
}

showSlideSecond(slideIndex);

function changeSlide(n) {
    showSlideSecond(n);
}


