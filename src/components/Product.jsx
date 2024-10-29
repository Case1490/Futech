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
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0); // Desplazarse hacia el inicio
    }
  }, [loading]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Activa el loader
      try {
        const docRef = doc(db, "motos_futech", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const mainImageRef = ref(storage, data.imagen);
          const mainImageUrl = await getDownloadURL(mainImageRef);
          let thumbnailImageUrl = null;
          if (data.miniatura) {
            const thumbnailImageRef = ref(storage, data.miniatura);
            thumbnailImageUrl = await getDownloadURL(thumbnailImageRef);
          }

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
      } finally {
        setLoading(false); // Desactiva el loader después de cargar el producto
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

  if (loading || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-[120px] min-h-screen">
      <div className="w-[80%] m-auto grid grid-cols-2 gap-x-8">
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

        <div className="p-4 my-4">
          <h2 className="text-4xl font-bold mb-4 text-Black">
            {product.nombre}
          </h2>
          <p className="mb-4">{product.descripcionLarga}</p>

          <h3 className="text-2xl font-semibold mb-2">Especificaciones</h3>
          <ul className="list-disc ml-6 mb-4">
            {product.especificaciones.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Colores disponibles</h3>
          <select className="border p-2 rounded mb-4 w-full capitalize outline-none">
            {product.colores.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>

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

            <a
              onClick={handleBuy}
              className="bg-green-500 text-white px-6 py-2 rounded flex items-center justify-center gap-2 flex-1"
            >
              <WhatsAppIconWhite />
              Cotizar ahora!
            </a>
          </div>

          <div className="flex text-center my-4 space-x-2">
            <div className="bg-purple-600 text-white font-bold rounded-xl shadow-xl p-2">
              <h1>Garantía de un año sin preocupaciones</h1>
            </div>

            <div className="bg-Blue text-white font-bold rounded-xl shadow-xl p-2">
              <h1>Batería de grafeno: carga más rápida, duración más larga</h1>
            </div>
          </div>

          <h1 className="text-red-500">
            *Emitimos Boleta y factura: respaldo para tu compra
          </h1>
        </div>
      </div>

      <div className="w-[80%] mt-10 m-auto">
        <RelatedProducts id={id} setLoading={setLoading} />
      </div>
    </div>
  );
};

export default Product;
