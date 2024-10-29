import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebaseConfig"; // Asegúrate de importar Firestore y Storage
import CardProductPopularity from "./CardProductPopularity";

const ProductsPopularity = () => {
  const [popularMotos, setPopularMotos] = useState([]);

  useEffect(() => {
    const fetchPopularMotos = async () => {
      try {
        const motosRef = collection(db, "motos_futech");
        const motosQuery = query(
          motosRef,
          where("nombre", "in", [
            "Tri-kong Futech",
            "Milan Futech",
            "Snake Futech",
          ])
        );

        const querySnapshot = await getDocs(motosQuery);
        const motos = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            const imagePath = data.imagen; // Path parcial de la imagen desde Firestore

            // Obtiene la URL completa de Firebase Storage
            const imageRef = ref(storage, imagePath);
            const imageUrl = await getDownloadURL(imageRef);

            return {
              id: doc.id,
              nombre: data.nombre,
              imagen: imageUrl, // URL completa de la imagen
              descripcion: data.descripcion, // Asegúrate de incluir la descripción
            };
          })
        );

        setPopularMotos(motos);
      } catch (error) {
        console.error("Error al obtener las motos populares:", error);
      }
    };

    fetchPopularMotos();
  }, []);

  console.log(popularMotos);

  return (
    <div className="background-scroll">
      <div className="w-[80%] m-auto mt-3 py-4">
        <h1 className="text-white text-5xl text-center font-bold mt-4">
          Las más Preferidas
        </h1>

        <div className="flex items-center justify-between my-10">
          {popularMotos.map((moto) => (
            <CardProductPopularity
              key={moto.id}
              nombre={moto.nombre}
              imagen={moto.imagen}
              description={moto.descripcion} // Aquí se pasa la descripción
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPopularity;
