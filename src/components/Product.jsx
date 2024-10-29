import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WhatsAppIconWhite from "../icons/WhatsAppIconWhite";
import Loader from "./Loader";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "motos_futech", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          // Obtener la imagen principal del producto
          const mainImageRef = ref(storage, data.imagen);
          const mainImageUrl = await getDownloadURL(mainImageRef);

          // Obtener la imagen en miniatura (si está disponible en la base de datos)
          let thumbnailImageUrl = null;
          if (data.miniatura) {
            const thumbnailImageRef = ref(storage, data.miniatura);
            thumbnailImageUrl = await getDownloadURL(thumbnailImageRef);
          }

          // Crear un arreglo de imágenes (principal y miniatura)
          const imagesArray = [mainImageUrl];
          if (thumbnailImageUrl) {
            imagesArray.push(thumbnailImageUrl);
          }

          setImages(imagesArray);
          setProduct(data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleBuy = () => {
    const whatsappLink = `https://wa.me/?text=Quiero%20comprar%20${quantity}%20unidades%20de%20${product.nombre}`;
    window.open(whatsappLink, "_blank");
  };

  if (!product) return <div className="flex items-center justify-center min-h-screen"><Loader/></div>;

  return (
    <div className="pt-[120px] min-h-screen">
      <div className="w-[80%] m-auto grid grid-cols-2 gap-x-8">
        {/* Columna de imágenes con carrusel usando Swiper */}
        <div className="relative flex items-center justify-center">
          <Swiper
            modules={[Navigation]}
            navigation
            className="w-full rounded-md"
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl}
                  alt={`Imagen ${index + 1}`}
                  className="carousel-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Columna de detalles del producto */}
        <div className="p-4 my-4">
          <h2 className="text-4xl font-bold mb-4 text-Black">
            {product.nombre}
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            quidem voluptates numquam optio accusantium nemo corporis cumque
            minus odit possimus totam, laudantium quae veniam rerum expedita
            alias eum adipisci tempore?
          </p>

          {/* Especificaciones */}
          <h3 className="text-2xl font-semibold mb-2">Especificaciones</h3>
          <ul className="list-disc ml-6 mb-4">
            {product.especificaciones.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          {/* Colores */}
          <h3 className="text-2xl font-semibold mb-2">Colores disponibles</h3>
          <select className="border p-2 rounded mb-4 w-full capitalize outline-none">
            {product.colores.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>

          {/* Selector de cantidad */}
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center gap-4 flex-1 ">
              <button
                onClick={handleDecrement}
                className="border px-3 py-2 text-xl"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="border text-center px-3 py-2 w-full"
              />
              <button
                onClick={handleIncrement}
                className="border px-3 py-1 text-xl"
              >
                +
              </button>
            </div>

            {/* Botón de compra */}
            <a
              onClick={handleBuy}
              className="bg-green-500 text-white px-6 py-2 rounded flex items-center justify-center gap-2 flex-1"
            >
              <WhatsAppIconWhite/>
               Cotizar ahora!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
