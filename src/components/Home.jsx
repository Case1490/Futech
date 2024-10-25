import Healthy from "./Healthy"
import MainPage from "./MainPage"
import ServiceHome from "./ServiceHome"
import ShowProducts from "./ShowProducts"

export const Home = () => {
  return (
    <div className="pt-[120px]">
      <MainPage />
      <ServiceHome />
      <ShowProducts />
      <Healthy/>
    </div>
  )
}
