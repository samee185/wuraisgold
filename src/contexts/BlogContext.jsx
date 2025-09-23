import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BlogContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [blogDetails, setBlogDetails] = useState(null); // ✅ single blog details
  const [loading, setLoading] = useState({
    fetch: false,
    details: false, // ✅ new state for details
    create: false,
    update: false,
    delete: false,
  });
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    setLoading((prev) => ({ ...prev, fetch: true }));
    setError(null);

    try {
      const res = await axios.get(`${BASE_URL}/blogs`);
      if (Array.isArray(res.data.data)) {
        setBlogs(res.data.data);
      } else {
        console.error("Unexpected response:", res.data);
        setBlogs([]);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading((prev) => ({ ...prev, fetch: false }));
    }
  };

  // ✅ Fetch single blog by ID
  const fetchBlogDetails = async (id) => {
    setLoading((prev) => ({ ...prev, details: true }));
    setError(null);

    try {
        const res = await axios.get(`${BASE_URL}/blogs/${id}`);
        // console.log('Full blog details response:', res.data);
        let details = res.data.data;
        if (Array.isArray(details)) {
          details = details.length > 0 ? details[0] : null;
        }
        setBlogDetails(details);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch blog details");
      setBlogDetails(null);
    } finally {
      setLoading((prev) => ({ ...prev, details: false }));
    }
  };

  // ✅ Update blog
  const updateBlog = async (id, blogData) => {
    setLoading((prev) => ({ ...prev, update: true }));
    setError(null);

    try {
      const formData = new FormData();
      Object.entries(blogData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.put(`${BASE_URL}/blogs/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.data) {
        setBlogs((prev) =>
          prev.map((b) => (b._id === id ? res.data.data : b))
        );
        return res.data.data;
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update blog");
      throw err;
    } finally {
      setLoading((prev) => ({ ...prev, update: false }));
    }
  };

  // ✅ Delete blog
  const deleteBlog = async (id) => {
    setLoading((prev) => ({ ...prev, delete: true }));
    setError(null);

    try {
      const res = await axios.delete(`${BASE_URL}/blogs/${id}`);

      if (res.data.success) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      } else {
        throw new Error(res.data.message || "Failed to delete blog");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete blog");
      throw err;
    } finally {
      setLoading((prev) => ({ ...prev, delete: false }));
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blogDetails,     // ✅ single blog state
        loading,
        error,
        fetchBlogs,
        fetchBlogDetails, // ✅ new function exposed
        updateBlog,
        deleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
