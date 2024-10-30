import Yape from "../images/metodos de pago/yape_logo.png";
import Visa from "../images/metodos de pago/Visa_Logo.png";
import Plin from "../images/metodos de pago/plin_logo.png";
import IziPay from "../images/metodos de pago/izipay_logo.png";
import Mastercard from "../images/metodos de pago/mastercard_logo.png";
import PagoEfectivo from "../images/metodos de pago/pagoefectivo_logo.png";
import AmericanExpress from "../images/metodos de pago/americanexpress_logo.png";

const PaymentMethods = () => {
  return (
    <div className="bg-slate-100 py-4 my-12">
      <div className="w-[90%] md:w-[80%] m-auto">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-Black mt-10 mb-4">
          Métodos de Pago
        </h1>

        <div className=" gap-x-2 md:gap-x-0 flex items-center justify-around py-4">
          <div>
            <img src={Yape} alt="Yape" className="h-14 object-contain" />
          </div>
          <div>
            <img src={Visa} alt="Visa" className="h-10 object-contain" />
          </div>
          <div>
            <img src={Plin} alt="Plin" className="h-14 object-contain" />
          </div>
          <div>
            <img src={IziPay} alt="IziPay" className="h-14 object-contain" />
          </div>
          <div>
            <img
              src={Mastercard}
              alt="Mastercard"
              className="h-14 object-contain"
            />
          </div>
          <div>
            <img
              src={PagoEfectivo}
              alt="Pago Efectivo"
              className="h-14 object-contain"
            />
          </div>
          <div>
            <img
              src={AmericanExpress}
              alt="American Express"
              className="h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
