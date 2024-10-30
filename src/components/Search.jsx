import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { db, storage } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [motos, setMotos] = useState([]);
  const [showResults, setShowResults] = useState(true); // Estado para controlar la visibilidad de los resultados

  useEffect(() => {
    const fetchMotos = async () => {
      const motosCollection = collection(db, "motos_futech");
      const motosSnapshot = await getDocs(motosCollection);
      const motosList = await Promise.all(
        motosSnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imageUrl = await getDownloadURL(ref(storage, data.imagen));
          return {
            id: doc.id,
            ...data,
            imageUrl,
          };
        })
      );
      setMotos(motosList);
    };

    fetchMotos();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredResults = motos.filter(
        (moto) =>
          moto.nombre &&
          moto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm, motos]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true); // Mostrar resultados al cambiar el término de búsqueda
  };

  return (
    <div className="input-container">
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Buscar motos..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill=""
        viewBox="0 0 24 24"
        className="icon"
      >
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <rect fill="white" height="24" width="24"></rect>{" "}
          <path
            fill=""
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      {showResults && searchTerm && (
        <SearchResults
          results={results}
          searchTerm={searchTerm}
          onResultClick={() => {
            setShowResults(false); // Al hacer clic, ocultar resultados
            setSearchTerm(""); // Restablecer el campo de búsqueda
          }}
        />
      )}
    </div>
  );
};

export default Search;
