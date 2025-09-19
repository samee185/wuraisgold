import { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();
const API_URL = import.meta.env.VITE_API_URL;

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState(null); // ✅ single project
  const [loading, setLoading] = useState({
    fetch: false,
    details: false,
    create: false,
    update: false,
    delete: false,
  });
  const [error, setError] = useState(null);

  const handleResponse = async (res) => {
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || "Something went wrong");
    }
    return res.json();
  };

  // ✅ Fetch all projects
  const fetchProjects = async () => {
    setLoading((prev) => ({ ...prev, fetch: true }));
    setError(null);

    try {
      const res = await fetch(`${API_URL}/project`);
      const data = await handleResponse(res);
      const projectsArray = Array.isArray(data.data) ? data.data : [];
      setProjects(projectsArray);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading((prev) => ({ ...prev, fetch: false }));
    }
  };

  // ✅ Fetch project details by ID
  const fetchProjectDetails = async (id) => {
    setLoading((prev) => ({ ...prev, details: true }));
    setError(null);

    try {
      const res = await fetch(`${API_URL}/project/${id}`);
      const data = await handleResponse(res);
      setProjectDetails(data.data || null);
      console.log(data.data);
      
    } catch (err) {
      setError(err.message);
      setProjectDetails(null);
    } finally {
      setLoading((prev) => ({ ...prev, details: false }));
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        projectDetails,
        loading,
        error,
        fetchProjects,
        fetchProjectDetails, 
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
