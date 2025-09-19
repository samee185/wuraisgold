import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import hero from "../../assets/hero-abt.png";
import About from "./About";
import Statements from "./Statements";
import Program from "../home/Program";
import Donate from "../home/Donate";
import Volunteer from "../home/Volunteer";
import Partners from "./Partners";

export default function index() {
  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <img src={hero} alt="" className="w-full object-cover h-[70vh]" />
      <About />
      <Statements />
      <Program />
      <Donate />
      <Volunteer />
      <Partners />
      <Footer />
    </main>
  );
}
