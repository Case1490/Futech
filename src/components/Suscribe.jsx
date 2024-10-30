import { useState, useRef } from "react";
import emailjs from "emailjs-com"; // Importa emailjs

const Suscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const form = useRef();

  // Regex para validar el formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_ddstin1",
        "template_w39iami",
        form.current,
        "dyzRP4xzIU0QWMAxQ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail(""); // Limpiar el campo de correo después de enviar
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    setError("");
    sendEmail(); // Llama a sendEmail aquí
  };

  return (
    <div className="background-scroll text-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8 w-[80%] m-auto text-center">
        <h1 className="font-bold text-4xl sm:text-5xl ">
          Sé el Primero en Conocer Nuestras Promociones
        </h1>
        <p className="text-xl">
          Déjanos tu correo para recibir descuentos especiales, novedades y
          ofertas personalizadas en nuestros productos favoritos
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          <div className="flex items-center">
            <input
              placeholder="Tu email"
              className="inputSubscribe"
              name="user_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="buttonSubscribe">
              Enviar
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Suscribe;
