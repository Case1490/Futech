

const ChangesReturns = () => {
  return (
    <div className="pt-[140px]">
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mb-10">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Política de Cambios y Devoluciones
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Resumen</h2>
          <p className="text-gray-700 mt-2">
            En Futek Perú, nuestro objetivo es garantizar tu total satisfacción
            con cada compra. Nos comprometemos a ofrecerte una{" "}
            <strong>GARANTÍA REAL</strong> en todos nuestros productos,
            cubriendo defectos de calidad o daños de fábrica, detallados en el
            Certificado de Garantía.
          </p>
          <p className="text-gray-700 mt-2">
            En Lima, disponemos de repuestos al instante y contamos con un
            equipo de mecánicos especializados para ofrecerte un servicio
            técnico excepcional.
          </p>
          <p className="text-gray-700 mt-2">
            La garantía no cubre daños causados por el usuario, como derrame de
            líquidos en la parte electrónica o sobrecarga de la batería.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">
            No se aceptan cambios o devoluciones en caso de:
          </h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Uso Excesivo</strong>: La moto muestra signos de uso
              excesivo que no están cubiertos por la garantía.
            </li>
            <li>
              <strong>Daños Accidentales</strong>: Daños por accidentes o mal
              uso del cliente.
            </li>
            <li>
              <strong>Modificaciones No Autorizadas</strong>: Reparación o
              modificación por personal no autorizado.
            </li>
            <li>
              <strong>Falta de Mantenimiento Adecuado</strong>: Daños por falta
              de mantenimiento.
            </li>
            <li>
              <strong>Daños por Derrame de Líquidos</strong>: Daños en
              componentes electrónicos.
            </li>
            <li>
              <strong>Sobrecarga de la Batería</strong>: Señales de sobrecarga o
              mal uso de la batería.
            </li>
            <li>
              <strong>Devolución Fuera del Periodo de Garantía</strong>:
              Solicitud de cambio fuera del periodo de garantía.
            </li>
            <li>
              <strong>Artículo No en su Condición Original</strong>: El artículo
              no está en su estado original, incluyendo piezas faltantes o
              daños.
            </li>
            <li>
              <strong>Comprobante de Compra Faltante</strong>: Falta de recibo o
              comprobante válido.
            </li>
            <li>
              <strong>Devolución Sin Previa Notificación</strong>: La devolución
              no siguió el proceso de notificación.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Devoluciones</h2>
          <p className="text-gray-700 mt-2">
            Una vez que recibamos y revisemos tu devolución, te notificaremos
            por correo electrónico sobre la aprobación o rechazo de tu
            reembolso. Si es aprobado, se aplicará un crédito a tu tarjeta de
            crédito o método de pago original en un plazo determinado.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">
            Reembolsos tardíos o faltantes
          </h2>
          <p className="text-gray-700 mt-2">
            Si aún no has recibido tu reembolso, primero revisa nuevamente tu
            cuenta bancaria. Luego, contacta a tu compañía de tarjeta de crédito
            o banco, ya que puede tardar en reflejarse oficialmente.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">
            Artículos en oferta
          </h2>
          <p className="text-gray-700 mt-2">
            Solo los artículos a precio regular pueden ser reembolsados. Los
            artículos en oferta no son reembolsables.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">Intercambios</h2>
          <p className="text-gray-700 mt-2">
            Solo reemplazamos artículos si están defectuosos o dañados. Si
            necesitas cambiarlo por el mismo artículo, envíanos un correo
            electrónico a{" "}
            <a href="mailto:{email}" className="text-blue-500 hover:underline">
              {"{email}"}
            </a>{" "}
            y envía el artículo a nuestra dirección.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-700">
            ¿Necesitas más ayuda?
          </h2>
          <p className="text-gray-700 mt-2">
            Contáctanos en{" "}
            <a href="mailto:{email}" className="text-blue-500 hover:underline">
              {"{email}"}
            </a>{" "}
            o por WhatsApp en{" "}
            <a
              href="https://wa.me/{whatsapp}"
              className="text-blue-500 hover:underline"
            >
              {"{whatsapp}"}
            </a>{" "}
            para consultas relacionadas con reembolsos y devoluciones.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ChangesReturns;
