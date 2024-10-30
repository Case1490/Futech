import { Link } from "react-router-dom";

const SearchResults = ({ results, searchTerm, onSelectResult }) => {
  // Función para subrayar las letras coincidentes en el nombre de la moto
  const highlightMatch = (text) => {
    if (!text) return ""; // Verificar que 'text' no sea undefined
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
            to={`/motos-electricas/${moto.id}`} // Usar Link para navegar a la página de la moto
            key={moto.id}
            onClick={onSelectResult} // Llamar a onSelectResult al hacer clic
            className="flex items-center gap-4 p-2 hover:bg-gray-200 cursor-pointer"
          >
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
