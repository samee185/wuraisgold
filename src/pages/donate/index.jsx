import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Hero from "../../utils/Hero";
import donate from "../../assets/donate.png";

export default function index() {
  return (
    <div className="bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero title="Donate" />
      <div className="p-5 md:p-20 flex justify-center items-center">
        <div className="md:w-1/2 bg-white py-8 rounded-lg flex flex-col gap-5 items-center text-center">
          <div className="flex flex-col justify-center items-center gap-3 px-4">
            <h4 className="text-2xl font-bold">Support Our Cause</h4>
            <p className="text-[#4E4E4E]">
              Send us an Email if you are willing to donate to our organisation.
              All donations go directly to making a difference for our cause.
            </p>
          </div>
          <img src={donate} alt="" className="w-full object-contain" />
          <a
            href="mailto:"
            className={`min-w-fit w-fit h-10 md:h-12 uppercase font-[500] md:font-[600] bg-primary text-white flex items-center justify-center px-5`}
          >
            SEND EMAIL
          </a>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
