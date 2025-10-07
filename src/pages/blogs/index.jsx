import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { Btn } from "../../utils/Button";
import { useBlog } from "../../contexts/BlogContext"; 
import Single from "../../components/Single";

export default function Blog() {
  const { blogs: rawBlogs, loading } = useBlog();
  const blogs = Array.isArray(rawBlogs) ? rawBlogs : [];

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title="Blog" />

  <section className="px-5 md:px-20 gap-10 md:py-20 w-full">
        {loading.fetch ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-lg font-semibold">Loading blogs...</p>
          </div>
        ) : (
          <div className="w-full flex flex-col md:grid grid-cols-3 gap-10">
            {blogs?.length > 0 ? (
              blogs.map((blog) => (
                <Single
                  key={blog?._id}
                  id={blog?._id}
                  img={blog?.image}
                  title={blog?.title}
                  date={new Date(blog?.createdAt).toDateString()}
                  text={blog?.text}
                  slug={blog?.slug}
                />
              ))
            ) : (
              <div className="col-span-3 flex items-center justify-center py-20">
                <p className="text-lg font-semibold">No blogs found.</p>
              </div>
            )}
          </div>
        )}
      </section>
        <Footer />
      </main>
    );
  }
