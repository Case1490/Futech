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
  const [selectedColor, setSelectedColor] = useState("");

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

          const imagesArray = [mainImageUrl];

          // Manejar la miniatura si existe
          if (data.miniatura) {
            const thumbnailImageRef = ref(storage, data.miniatura);
            const thumbnailImageUrl = await getDownloadURL(thumbnailImageRef);
            imagesArray.push(thumbnailImageUrl);
          }

          setImages(imagesArray);
          setProduct(data);
          setSelectedColor(data.colores[0]); // Establecer color inicial aquí
        } else {
          console.log("¡No existe el documento!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false); // Desactiva el loader después de cargar el producto
      }
    };

    fetchProduct();
  }, [id]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value); // Actualiza el color seleccionado
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleBuy = () => {
    const whatsappLink = `https://wa.me/902040118?text=Quiero%20comprar%20${quantity}%20unidades%20de%20${product.nombre}%20en%20color%20${selectedColor}`;
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
    <div className="pt-[190px] md:pt-[120px] min-h-screen">
      <div className="w-[90%] lg:w-[80%] m-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <div className="relative flex items-center justify-center">
          <Swiper
            modules={[Navigation]}
            navigation
            className="w-full rounded-md p-0"
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl}
                  alt={`Imagen del producto ${index + 1}`} // Texto alternativo para accesibilidad
                  className="carousel-image w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-4 my-4">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-Black">
            {product.nombre}
          </h2>
          <p className="mb-4">{product.descripcionLarga}</p>

          <h3 className="text-xl lg:text-2xl font-semibold mb-2">
            Especificaciones
          </h3>
          <ul className="list-disc ml-6 mb-4">
            {product.especificaciones.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold mb-2">
            Colores disponibles
          </h3>
          <select
            className="border p-2 rounded mb-4 w-full capitalize outline-none"
            value={selectedColor}
            onChange={handleColorChange} // Agrega el evento onChange
          >
            {product.colores.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>

          <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-4">
            <div className="flex items-center gap-4 w-full md:flex-1">
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
              className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-2 rounded flex items-center justify-center gap-2 w-full md:flex-1"
            >
              <WhatsAppIconWhite />
              Cotizar ahora!
            </a>
          </div>

          <div className="flex flex-col md:flex-row text-center my-4 space-y-2 md:space-y-0 md:space-x-2">
            <div className="bg-purple-600 text-white font-bold rounded-xl shadow-xl p-2">
              <h1>Garantía de un año sin preocupaciones</h1>
            </div>

            <div className="bg-Blue text-white font-bold rounded-xl shadow-xl p-2">
              <h1>Batería de grafeno: carga más rápida, duración más larga</h1>
            </div>
          </div>

          <h1 className="text-red-500 text-center md:text-left font-bold">
            *Emitimos Boleta y factura: respaldo para tu compra
          </h1>
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] mt-10 m-auto">
        <RelatedProducts id={id} setLoading={setLoading} />
      </div>
    </div>
  );
};

export default Product;
