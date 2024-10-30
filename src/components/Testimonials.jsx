// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Testimonial from "./Testimonial";

// IMPORTANDO IMAGENES
import Alice from '../images/testimonios/AliceMartinez.jpg';
import Carlos from '../images/testimonios/CarlosMendez.jpg';
import Laura from '../images/testimonios/LauraFernandez.jpg';
import James from '../images/testimonios/JamesRamos.jpg';
import Fernando from '../images/testimonios/FernandoTorres.jpg'

const testimonios = [
  {
    name: "Alice Martínez",
    image: Alice,
    review: "¡Excelente servicio y atención rápida! Recomiendo al 100%.",
  },
  {
    name: "Carlos Méndez",
    image: Carlos,
    review: "El producto llegó en perfectas condiciones, muy satisfecho.",
  },
  {
    name: "Laura Fernández",
    image: Laura,
    review: "Superaron mis expectativas, ¡volveré a comprar!",
  },
  {
    name: "James Ramos",
    image: James,
    review: "Gran calidad y excelente soporte, muy recomendable.",
  },
  {
    name: "Fernando Torres",
    image: Fernando,
    review: "Me encantó el trato personalizado. ¡Gracias!",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-Black text-4xl mt-4 mb-8">
          Algunos testimonios de nuestros clientes
        </h1>

        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={-30}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="testimonials-swiper"
          >
            <SwiperSlide>
              <Testimonial
                name={testimonios[0].name}
                image={testimonios[0].image}
                review={testimonios[0].review}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                name={testimonios[1].name}
                image={testimonios[1].image}
                review={testimonios[1].review}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                name={testimonios[2].name}
                image={testimonios[2].image}
                review={testimonios[2].review}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                name={testimonios[3].name}
                image={testimonios[3].image}
                review={testimonios[3].review}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                name={testimonios[4].name}
                image={testimonios[4].image}
                review={testimonios[4].review}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
