import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db, storage } from "../firebaseConfig"; // Asegúrate de importar el storage
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage"; // Importa funciones de Storage
import Loader from "./Loader";

const MainPage = () => {
  const [motos, setMotos] = useState([]);
  const [currentMoto, setCurrentMoto] = useState(0);

  useEffect(() => {
    const fetchMotos = async () => {
      const motosCollection = collection(db, "motos_futech");
      const motoSnapshot = await getDocs(motosCollection);
      const motoList = await Promise.all(
        motoSnapshot.docs.map(async (doc) => {
          const motoData = doc.data();
          const imageRef = ref(storage, motoData.imagen);
          const imageUrl = await getDownloadURL(imageRef);
          return { ...motoData, imagenUrl: imageUrl };
        })
      );
      setMotos(motoList);
    };

    fetchMotos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoto((prev) => (prev === motos.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [motos]);

  if (motos.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Loader/>
      </div>
    );
  }

  // Dividir el nombre en dos palabras
  const nombreCompleto = motos[currentMoto].nombre.split(" ");
  const primerNombre = nombreCompleto[0]; // Primer palabra
  const segundoNombre = nombreCompleto.slice(1).join(" "); // Segunda palabra (o más)

  return (
    <div className="bg-gray-100 min-h-[80vh]">
      <div className="h-full w-[80%] m-auto flex items-center gap-x-6">
        <div className="flex flex-col items-start flex-1">
          {/* Primer nombre */}
          <motion.h1
            key={currentMoto}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-7xl text-black font-bold mb-2"
          >
            {primerNombre.toUpperCase()}
          </motion.h1>

          {/* Segundo nombre */}
          <motion.h2
            key={currentMoto + "-model"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-5xl text-blue-500 font-bold mb-2"
          >
            {segundoNombre.toUpperCase()} {/* Mostramos el segundo nombre */}
          </motion.h2>

          <motion.p
            key={currentMoto + "-desc"}
            initial={{ opacity: 0, y: 20 }} // Cambiar la posición inicial
            animate={{ opacity: 1, y: 0 }} // Finaliza en su posición original
            exit={{ opacity: 0, y: 20 }} // Sale moviéndose hacia abajo
            transition={{ duration: 1 }} // Duración de la animación
            className="my-4"
          >
            Descubre la libertad sobre dos ruedas con nuestra moto eléctrica de
            última generación. Diseñada para el urbanita moderno, combina un
            motor potente y silencioso con una batería de larga duración,
            brindando una velocidad máxima de 45 km/h y una autonomía de hasta
            60 km.
          </motion.p>

          <div className="flex items-center justify-center gap-x-4">
            <a
              href=""
              className="uppercase px-4 py-2 rounded-lg bg-blue-500 text-white"
            >
              Comprar
            </a>
            <a
              href=""
              className="uppercase px-4 py-2 rounded-lg border-2 border-blue-500"
            >
              Ver más
            </a>
          </div>
        </div>

        <div className="flex-1">
          <motion.img
            key={currentMoto + "-image"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            src={motos[currentMoto].imagenUrl}
            alt={motos[currentMoto].nombre}
            className="moto-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
