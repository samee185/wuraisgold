import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { Btn } from "../../utils/Button";
import { blogs } from "../../utils/Blogs";

export default function Blog() {
  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title="Blog" />
      <main className="px-5 md:px-20 gap-10 md:py-20 w-full">
        <div className="w-full  flex flex-col md:grid grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <Single
              key={i}
              img={blog?.img}
              title={blog?.title}
              date={blog?.date}
              slug={blog?.slug}
              text={blog?.text}
            />
          ))}
        </div>
      </main>
      <Footer />
    </main>
  );
}

function Single({ ...info }) {
  return (
    <div className="w-full flex flex-col  gap-5 bg-white p-5 rounded-xl">
      <img src={info?.img} alt="" className="w-full object-cover" />
      <div className="flex flex-col gap-2">
        <b className="text-xl text-black">{info?.title}</b>
        <p className="text-primary">{info?.date}</p>
      </div>
      <p className="mb-auto">{info?.text}</p>
      <Btn name="Read More" slug={`/blogs/${info?.slug}`} />
    </div>
  );
}
