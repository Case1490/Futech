import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com"; // Importa emailjs
import CallCenter from "../images/callcenter.jpg";
import Suscribe from "./Suscribe"; // Importa el componente Suscribe

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  // Regex para validar el formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_ddstin1",
        "template_ea8x4la",
        formRef.current,
        "dyzRP4xzIU0QWMAxQ"
      )
      .then(
        () => {
          setSuccess("Mensaje enviado con éxito!");
          setName("");
          setEmail("");
          setMessage("");
          setError(""); // Limpiar errores

          setTimeout(() => setSuccess(""), 3000);
        },
        (error) => {
          setError("Error al enviar el mensaje. Inténtalo de nuevo.");
          console.log("FAILED...", error.text);

          setTimeout(() => setError(""), 3000);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    if (!name || !message) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    setError("");
    setSuccess(""); // Limpiar mensaje de éxito
    sendEmail();
  };

  return (
    <div className="pt-[200px] md:pt-[130px] min-h-screen">
      <div className="w-[80%] m-auto">
        <h1 className="text-center font-bold text-Black text-5xl mt-4 mb-6">
          Contáctanos
        </h1>
        <p className="text-center">
          ¿Tienes preguntas sobre nuestros productos? Estamos aquí para
          ayudarte.
        </p>

        <div className="flex flex-col items-center lg:flex-row lg:items-center justify-around">
          <div className="w-[400px]">
            <img src={CallCenter} alt="Soporte" className="w-full" />
          </div>

          <div className="w-full lg:max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Envíanos un mensaje
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && <p className="text-green-500 mt-2">{success}</p>}

              <button
                type="submit"
                className="w-full p-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
      <Suscribe />
    </div>
  );
};

export default Contact;
