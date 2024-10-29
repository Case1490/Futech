import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import CardMotorcyele from "./CardMotorcyele";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const ElectricMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar el loader

  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  useEffect(() => {
    const fetchMotorcycles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "motos_futech"));
        const products = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            let imageUrl = "";
            if (data.imagen) {
              const imageRef = ref(storage, data.imagen);
              imageUrl = await getDownloadURL(imageRef);
            }
            return {
              id: doc.id,
              ...data,
              imagen: imageUrl,
            };
          })
        );
        setMotorcycles(products);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setIsLoading(false); // Desactiva el loader cuando se cargan los datos
      }
    };

    fetchMotorcycles();
  }, []);

  return (
    <div className="pt-[120px] min-h-screen fondo">
      <div className="w-[80%] m-auto mt-4 pb-10">
        <h1 className="text-center my-10 text-4xl font-bold text-black">
          Nuestros Productos
        </h1>

        {isLoading ? ( // Mostrar loader si los productos están cargando
          <div className="flex justify-center items-center ">
            <div>
              <Loader />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {motorcycles.map((motorcycle) => (
              <Link key={motorcycle.id} to={`/motos-electricas/${motorcycle.id}`}>
                <CardMotorcyele
                  key={motorcycle.id}
                  image={motorcycle.imagen}
                  name={motorcycle.nombre}
                  description={motorcycle.descripcion}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectricMotorcycles;
