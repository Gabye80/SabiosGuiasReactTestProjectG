import "./Home.css";
import ScrollToTop from "../components/ScrollToTop";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import MyBackground from "../components/MyBackground";


export default function Home() {
  return (
    <>
      <ScrollToTop />
      <MyHeader />
      <MyBackground/>
      <h1>Carousel should be here</h1>
      <MyFooter />
    </>
  );
}
