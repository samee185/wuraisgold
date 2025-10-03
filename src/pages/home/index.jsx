import ScrollToTop from "../../layout/Scroll";
import img from "../../assets/hero.png";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Btn } from "../../utils/Button";
import Quote from "./Quote";
import About from "./About";
import Projects from "./Projects";
import Events from "./Events";
// import Volunteer from "./Volunteer";
import Blog from "./Blog";
import Program from "./Program";
import Donate from "./Donate";
import Subscribe from "../../layout/Subscribe";

export default function index() {
  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <div
        className="w-full h-screen relative z-[0] bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 flex flex-col justify-center items-start gap-4 md:gap-8 text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
        <h2 className="md:w-2/3 text-6xl md:text-[100px] font-extrabold leading-tight capitalize">
          Lend the helping hand get involved
        </h2>
        <Btn name="LEARN MORE" id="/about" />
      </div>
      <Quote />
      <About />
      <Program />
      <Projects />
      <Donate />
      <Events />
      {/* <Volunteer /> */}
      <Blog />
      <Subscribe />
      <Footer />
    </main>
  );
}
