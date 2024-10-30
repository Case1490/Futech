import { Link } from "react-router-dom";


const SearchResults = ({ results, searchTerm, onResultClick }) => {
  const highlightMatch = (text) => {
    if (!text) return "";
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(
      regex,
      (match) => `<span class="text-blue-500">${match}</span>`
    );
  };

  return (
    <div className="results-container">
      {results.length > 0 ? (
        results.map((moto) => (
          <Link
            key={moto.id}
            to={`/motos-electricas/${moto.id}`}
            onClick={onResultClick} // Añadir el manejador de clics aquí
          >
            <div className="flex items-center gap-4 p-2 hover:bg-gray-200">
              <img
                src={moto.imageUrl}
                alt={moto.nombre}
                className="w-12 h-12 object-cover"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: moto.nombre
                    ? highlightMatch(moto.nombre)
                    : "Nombre no disponible",
                }}
              />
            </div>
          </Link>
        ))
      ) : (
        <div className="no-results">
          <p>No se encontraron resultados. Prueba estas sugerencias:</p>
          <ul>
            <li>Moto Urbana</li>
            <li>Moto Todoterreno</li>
            <li>Moto de Alta Velocidad</li>
          </ul>
        </div>
      )}
    </div>
  );
};


export default SearchResults;
