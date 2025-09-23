import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Subscribe from "../../layout/Subscribe";
import { useBlog } from "../../contexts/BlogContext";

export default function Blog() {
  const { blogId } = useParams(); 
  const { blogs, blogDetails, fetchBlogDetails, loading, error } = useBlog();
  console.log('blogId from useParams:', blogId);
  console.log('blogDetails from context:', blogDetails);
  

  useEffect(() => {
    if (blogId) {
      console.log('Calling fetchBlogDetails with blogId:', blogId);
      fetchBlogDetails(blogId); 
    } else {
      console.log('No blogId found in useParams');
    }
  }, [blogId]);

  if (loading.details) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading blog...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </main>
    );
  }

  if (!blogDetails) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-500">Blog not found</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title={blogDetails?.title} />

      {/* Blog details */}
      <main className="px-5 md:px-20 py-10 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <b className="text-2xl md:text-[40px] font-[600] text-black">
            {blogDetails?.title}
          </b>
          <p className="text-primary">{blogDetails?.date}</p>
        </div>

        {/* Blog Image */}
        {blogDetails?.image && (
          <img
            src={blogDetails.image}
            alt={blogDetails.title}
            className="w-full h-[60vh] object-cover rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          />
        )}

        {/* Blog Content */}
        <div className="prose max-w-none text-gray-700">
          <p>{blogDetails?.content}</p>
        </div>

        {/* Comment Form */}
        <form className="py-10 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <b className="text-xl md:text-2xl font-semibold text-black">
              Leave A Comment
            </b>
            <p className="text-gray-600">
              Your email address will not be published.
            </p>
          </div>

          <label className="flex flex-col gap-1">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              className="px-5 border border-gray-300 placeholder:text-gray-400 w-full h-12 bg-white rounded outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span>Email</span>
            <input
              type="email"
              placeholder="Email"
              className="px-5 border border-gray-300 placeholder:text-gray-400 w-full h-12 bg-white rounded outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span>Comment</span>
            <textarea
              placeholder="Comment"
              className="px-5 py-3 border border-gray-300 placeholder:text-gray-400 w-full h-40 bg-white rounded outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          <button
            type="submit"
            className="w-fit bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all"
          >
            Post Comment
          </button>
        </form>
      </main>

      {/* Similar Blogs */}
      <section className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10 justify-center items-center">
        <b className="text-2xl md:text-[40px] font-[600] text-black">
          Other Similar Blogs
        </b>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {blogs
            .filter((blog) => blog._id !== blogDetails._id) // ✅ exclude current blog
            .slice(0, 3)
            .map((blog, i) => (
              <Single
                key={i}
                img={blog?.image}
                title={blog?.title}
                date={blog?.date}
                slug={blog?._id}
                text={blog?.content?.slice(0, 100) + "..."}
              />
            ))}
        </div>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
}

function Single({ img, title, date, slug, text }) {
  return (
    <div className="w-full flex flex-col gap-5 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <b className="text-xl text-black">{title}</b>
        <p className="text-primary">{date}</p>
        <p>{text}</p>
      </div>
      <div className="w-full">
        <Link
          to={`/blogs/${slug}`}
          className="block bg-primary text-white text-center py-2 rounded-md font-semibold hover:bg-primary/90 transition-all"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}
