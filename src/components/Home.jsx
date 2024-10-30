import Healthy from "./Healthy"
import MainPage from "./MainPage"
import Map from "./Map"
import PaymentMethods from "./PaymentMethods"
import ProductsPopularity from "./ProductsPopularity"
import ServiceHome from "./ServiceHome"
import ShowProducts from "./ShowProducts"
import Suscribe from "./Suscribe"
import Testimonials from "./Testimonials"

export const Home = () => {
  return (
    <div className=" pt-[190px] md:pt-[120px]">
      <MainPage />
      <ServiceHome />
      <ShowProducts />
      <Healthy />
      <ProductsPopularity />
      <PaymentMethods />
      <Testimonials />
      <Suscribe />
      <Map />
    </div>
  );
}


