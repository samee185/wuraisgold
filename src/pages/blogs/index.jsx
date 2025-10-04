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
    <div className="w-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white">
          <h3 className="text-lg font-bold drop-shadow-lg">{title}</h3>
          <p className="text-sm text-primary drop-shadow">{date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        {text && <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{text}</p>}
      </div>
      <div className="w-full px-5 pb-5">
        <Btn
          name="Read More"
          id={`/blogs/${id}`}
          className="block w-full bg-primary text-white text-center py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition-all"
        />
      </div>
    </div>
  );
}
