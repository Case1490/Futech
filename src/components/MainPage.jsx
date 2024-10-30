import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db, storage } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import Loader from "./Loader";
import { Link } from "react-router-dom";

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
          return { ...motoData, imagenUrl: imageUrl, id: doc.id }; // Agregar el id aquí
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
        <Loader />
      </div>
    );
  }

  const nombreCompleto = motos[currentMoto].nombre.split(" ");
  const primerNombre = nombreCompleto[0];
  const segundoNombre = nombreCompleto.slice(1).join(" ");
  const mensajeWhatsApp = `https://wa.me/51902040118?text=Hola, estoy interesado en ${motos[currentMoto].nombre}, quisiera más información`;

  return (
    <div className="bg-gray-100 min-h-[80vh]">
      <div className="h-full w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-6">
        <div className="flex flex-col items-start flex-1 mt-4">
          <motion.h1
            key={currentMoto}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl text-black font-bold mb-2"
          >
            {primerNombre.toUpperCase()}
          </motion.h1>

          <motion.h2
            key={currentMoto + "-model"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-blue-500 font-bold mb-2"
          >
            {segundoNombre.toUpperCase()}
          </motion.h2>

          <motion.p
            key={currentMoto + "-desc"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="my-4 text-sm md:text-base"
          >
            {motos[currentMoto].descripcionLarga}
          </motion.p>

          <div className="flex items-center justify-center gap-x-4">
            <a
              href={mensajeWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
            >
              Comprar
            </a>
            <Link
              to={`/motos-electricas/${motos[currentMoto].id}`} // Usar el id en el Link
              className="uppercase px-4 py-2 rounded-lg border-2 border-blue-500 hover:bg-Blue hover:text-white hover:border-Blue"
            >
              Ver más
            </Link>
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
            className="moto-image w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
