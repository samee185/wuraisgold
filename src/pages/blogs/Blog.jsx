import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogs } from "../../utils/Blogs";

export default function Blog() {
  let params = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    blogs.filter((detail) => {
      if (detail._id === params.id) {
        setInfo(detail);
      }
    });
  }, [params.id]);

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-[2fr_1fr] gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl md:text-6xl font-bold text-black">
              {info?.title}
            </p>
            <p className="text-primary">{info?.date}</p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={info?.image}
              alt=""
              className="w-full h-[60vh] object-cover rounded-2xl"
            />
            <p className="text-md text-red">{info?.content}</p>
          </div>
          <form className="py-10 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <b className="text-xl md:text-2xl font-semibold text-black">
                Leave A Comment
              </b>
              <p className="">Your email address will not be published.</p>
            </div>
            <label className="flex flex-col gap-1">
              <span>Name</span>
              <input
                type="text"
                placeholder="Name"
                className="px-5 border border-[#A4A4A4] placeholder:text-[#A4A4A4] w-full h-12 bg-white rounded outline-none"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span>Email</span>
              <input
                type="email"
                placeholder="Email"
                className="px-5 border border-[#A4A4A4] placeholder:text-[#A4A4A4] w-full h-12 bg-white rounded outline-none"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span>Comment</span>
              <textarea
                placeholder="Comment"
                className="px-5 py-3 border border-[#A4A4A4] placeholder:text-[#A4A4A4] w-full h-40 bg-white rounded outline-none"
              />
            </label>
          </form>
        </div>
        <aside className="p-5 flex flex-col gap-4 bg-white h-fit rounded-2xl ">
          <b className="text-xl text-black">Recent Posts</b>
          {blogs
            .filter((blog) => blog.slug !== params.slug)
            .map((blog, i) => (
              <div key={i} className="flex flex-col gap-2 border-b py-2">
                <b className="text-xl text-black">{blog?.title}</b>
                <p className="text-primary">{blog?.date}</p>
              </div>
            ))}
        </aside>
      </main>
      <Footer />
    </main>
  );
}
