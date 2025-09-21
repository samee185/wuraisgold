import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { Btn } from "../../utils/Button";
import { useBlog } from "../../contexts/BlogContext"; 

export default function Blog() {
  const { blogs, loading } = useBlog(); 

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title="Blog" />

      <main className="px-5 md:px-20 gap-10 md:py-20 w-full">
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
                  slug={blog?.slug}
                  text={
                    blog?.excerpt ||
                    blog?.content?.slice(0, 90) + "..."
                  }
                />
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </main>
  );
}

function Single({ img, title, date, text, id }) {
  return (
    <div className="w-full flex flex-col gap-5 bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow duration-300">
      <img src={img} alt={title} className="w-full object-cover rounded-md" />
      <div className="flex flex-col gap-2">
        <b className="text-xl text-black">{title}</b>
        <p className="text-primary">{date}</p>
      </div>
      <p className="mb-auto">{text}</p>
      <Btn name="Read More" id={`/blogs/${id}`} />
    </div>
  );
}
