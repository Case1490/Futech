const AboutUs = () => {
  return (
    <div className="pt-[140px] bg-gray-50">
      <div className="max-w-5xl mx-auto text-center py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Sobre Nosotros
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          En Futech Perú, estamos comprometidos en llevar la movilidad
          sostenible a todos. Ofrecemos motos eléctricas de alta calidad que
          combinan rendimiento y eficiencia. Nuestro equipo trabaja
          apasionadamente para mejorar continuamente nuestros productos y
          brindar un servicio excepcional.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          Nuestros Valores
        </h3>
        <p className="text-gray-600 text-lg mb-10">
          Estos son los valores que impulsan nuestro trabajo y nos ayudan a
          cumplir nuestra misión de ser líderes en movilidad sostenible.
        </p>

        <div className="grid grid-cols-1 mx-4 lg:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">⚙️</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Innovación
            </h4>
            <p className="text-gray-600">
              Buscamos constantemente mejorar nuestras motos con la última
              tecnología para ofrecerte un mejor rendimiento y seguridad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">🤝</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Trabajo en Equipo
            </h4>
            <p className="text-gray-600">
              Colaboramos estrechamente para desarrollar soluciones sostenibles
              y efectivas para nuestros clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">🏆</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Excelencia
            </h4>
            <p className="text-gray-600">
              Nos esforzamos en ofrecer productos de la más alta calidad y
              brindar un servicio excepcional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">⚡</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Sostenibilidad
            </h4>
            <p className="text-gray-600">
              Promovemos el uso de la movilidad eléctrica para reducir el
              impacto ambiental y contribuir a un futuro más limpio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">❤️</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Pasión</h4>
            <p className="text-gray-600">
              Amamos lo que hacemos y nos esforzamos para crear experiencias
              inolvidables para nuestros clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">🛠️</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Integridad
            </h4>
            <p className="text-gray-600">
              Actuamos con transparencia y honestidad en cada uno de nuestros
              compromisos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
