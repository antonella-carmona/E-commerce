import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen1 from "../assets/images/foto1carrusel.jpg"
import imagen2 from "../assets/images/foto2carrusel.png"
import imagen3 from "../assets/images/foto3carrusel.png"

export const ImageCarousel = ()=>{
   const settings= {
    dots: true,  //puntos
    infinite: true,   //infinito
    speed: 500,     //velocidad
    slidesToShow: 1,   //diapositivas para mostrar
    slidesToScroll: 1,   // diapositivas para desplazarse
    autoplay: true, // Agrega esta línea
   };

   return(
    <section>
        <picture>
            <Slider {...settings}>
                    <div>
                    <img src={imagen1} alt="Image 1" className="w-full h-[300px]"/>
                </div>
                <div>
                    <img src={imagen2} alt="Image 2" className="w-full h-[300px]"/>
                </div>
                <div>
                    <img src={imagen3} alt="Image 3" className="w-full h-[300px]"/>
                </div>

            </Slider>
       </picture>
      </section>
   )
}