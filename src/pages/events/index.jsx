import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Events from "./Events";
import Hero from "../../utils/Hero";

export default function index() {
  return (
    <div className="bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero title="Events" />
      <Events />
      <Subscribe />
      <Footer />
    </div>
  );
}
