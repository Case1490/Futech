import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../firebaseConfig"; // Asegúrate de tener estas instancias configuradas
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardMotorcyele from "./CardMotorcyele";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "motos_futech"));
      const productsList = await Promise.all(
        querySnapshot.docs.slice(0, 5).map(async (doc) => {
          const productData = doc.data();
          const imageRef = ref(storage, productData.imagen);
          const imageUrl = await getDownloadURL(imageRef); // Obtener la URL de la imagen desde Firebase Storage

          return {
            id: doc.id,
            ...productData,
            imageUrl, // Agregamos la URL de la imagen al producto
          };
        })
      );
      setProducts(productsList);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-[80%] m-auto mt-10 mb-4">
        <div className=" sm:flex justify-between items-center">
          <div>
            <p className=" text-gray-500">Mira lo nuevo que traemos para ti!</p>
            <h1 className="text-4xl font-bold text-Black mb-4 sm:mb-0">
              Nuestros Productos
            </h1>
          </div>
          <Link
            to="/motos-electricas"
            className="rounded-full py-2 px-4 text-center border-2 border-Blue hover:bg-Blue hover:text-white transition-all delay-100 ease-out hover:shadow-2xl"
          >
            Ver todo
          </Link>
        </div>

        <div className="px-4 py-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              320: { slidesPerView: 1 },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/motos-electricas/${product.id}`}>
                  <CardMotorcyele
                    id={product.id}
                    name={product.nombre}
                    image={product.imageUrl}
                    description={product.descripcion}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
