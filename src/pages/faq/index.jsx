import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import { useState } from "react";
import Hero from "../../utils/Hero";
import { faqs } from "../../utils/Faqs";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";

export default function Index() {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const handleButtonClick = (index) => {
    setActiveIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (newIndices.has(index)) {
        newIndices.delete(index);
      } else {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero title="Frequently Asked Questions" />
      <main className="px-5 md:px-20 py-10 md:py-20 flex justify-center items-center">
        <div className="flex flex-col gap-5 md:w-3/4">
          <h3 className="text-2xl md:text-[40px] text-dark mx-auto text-center mb-5">
            Everything You Need Know About Us
          </h3>
          {faqs.map((info, index) => (
            <nav
              className="py-2 md:py-4 px-5 flex flex-col gap-3 shadow-md leading-relaxed transition ease-in-out duration-1000 h-fit bg-white rounded-md"
              key={index}
            >
              <div
                className="flex justify-between items-center md:text-lg cursor-pointer gap-3"
                onClick={() => handleButtonClick(index)}
              >
                <span className="text-lg md:text-[22px] text-dark">
                  {info.question}
                </span>
                <button
                  className={`font-[600] flex justify-center items-center transition-all ease-in-out duration-1000`}
                >
                  <FaPlusCircle
                    className={`${
                      activeIndices.has(index) ? "rotate-45" : ""
                    } text-xl transition-all ease-in-out duration-1000`}
                  />
                </button>
              </div>
              <AnimatePresence>
                {activeIndices.has(index) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-clip"
                  >
                    <p className={`md:text-xl`}>
                      {activeIndices.has(index) && info.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          ))}
        </div>
      </main>
      <Subscribe />
      <Footer />
    </main>
  );
}
