import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CardMotorcyele from "./CardMotorcyele";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const RelatedProducts = ({ id, setLoading }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const storedProducts = localStorage.getItem(`relatedProducts_${id}`);

        if (storedProducts) {
          setRelatedProducts(JSON.parse(storedProducts));
          return;
        }

        const motosRef = collection(db, "motos_futech");
        const querySnapshot = await getDocs(motosRef);
        const allProducts = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((product) => product.id !== id);

        const randomProducts = [];
        while (randomProducts.length < 4 && allProducts.length > 0) {
          const randomIndex = Math.floor(Math.random() * allProducts.length);
          randomProducts.push(allProducts[randomIndex]);
          allProducts.splice(randomIndex, 1);
        }

        const productsWithImages = await Promise.all(
          randomProducts.map(async (product) => {
            const imageRef = ref(storage, product.imagen);
            const imageUrl = await getDownloadURL(imageRef);
            return {
              ...product,
              imagen: imageUrl,
            };
          })
        );

        localStorage.setItem(
          `relatedProducts_${id}`,
          JSON.stringify(productsWithImages)
        );

        setRelatedProducts(productsWithImages);
      } catch (error) {
        console.error("Error al obtener productos relacionados:", error);
      }
    };

    fetchRelatedProducts();
  }, [id]);

  const handleClick = (productId) => {
    setLoading(true); // Activa el loader
    navigate(`/motos-electricas/${productId}`); // Navega a la página del producto
    window.scrollTo(0, 0); // Desplaza la página al inicio
  };

  return (
    <div className="related-products-container">
      <h1 className="text-center text-4xl font-bold text-black my-4">
        También te puede interesar
      </h1>

      <p className="text-center">
        Algunos de nuestros clientes también buscaron
      </p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        className="my-swiper"
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id} className="my-swiper-slide">
            <CardMotorcyele
              image={product.imagen}
              name={product.nombre}
              description={product.descripcion}
              onClick={() => handleClick(product.id)} // Pasa el método handleClick
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
