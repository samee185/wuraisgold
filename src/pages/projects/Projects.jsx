import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Btn } from "../../utils/Button";
import Subscribe from "../../layout/Subscribe";
import { useProject } from "../../contexts/ProjectContext";

export default function Projects() {
  const { projectId } = useParams(); 
  const { 
    projects, 
    projectDetails, 
    fetchProjectDetails, 
    loading, 
    error 
  } = useProject();
  console.log(projectDetails);
  

  useEffect(() => {
    if (projectId) {
      fetchProjectDetails(projectId); 
    }
  }, [projectId]);

  if (loading.details) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading project...</p>
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

  if (!projectDetails) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-500">
          Project not found
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title={projectDetails?.title} />

      {/* Main project details */}
      <main className="px-5 md:px-20 py-10 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <b className="text-2xl md:text-[40px] font-[600] text-black">
            {projectDetails?.title}
          </b>
          <p>{projectDetails?.description}</p>
        </div>

        {/* Project Images */}
        {projectDetails?.images?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {projectDetails.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${projectDetails.title} - image ${i + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              />
            ))}
          </div>
        )}

        {/* Project Objectives */}
        {projectDetails?.objectives?.length > 0 && (
          <ul className="list-disc pl-5 space-y-2 text-lg">
            {projectDetails.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-fit">
          <Btn name="Volunteer" slug="/volunteer" />
          <Link
            to={`/donate-now`}
            className="min-w-fit w-full bg-inherit h-10 md:h-12 uppercase font-[500] md:font-[600] flex items-center justify-center px-8"
          >
            DONATE NOW
          </Link>
        </div>
      </main>

      {/* Similar Projects */}
      <section className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10 justify-center items-center">
        <b className="text-2xl md:text-[40px] font-[600] text-black">
          Other Similar Projects
        </b>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {projects
            .filter((project) => project._id !== projectDetails._id) // ✅ exclude current project
            .slice(0, 3)
            .map((project, i) => (
              <Single
                key={i}
                img={project?.images?.[0]}
                title={project?.title}
                date={project?.date}
                slug={project?._id} // ✅ use id instead of slug
                text={project?.description}
              />
            ))}
        </div>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
}

function Single({ ...info }) {
  return (
    <div className="w-full flex flex-col gap-5 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={info?.img}
        alt={info?.title}
        className="w-full object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <b className="text-xl text-black">{info?.title}</b>
        <p className="text-primary">{info?.date}</p>
        <p>{info?.text}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Btn
          name="VIEW PROJECT"
          id={`/projects/${info?.slug}`} // ✅ matches the new /:id route
          style="w-full"
        />
        <Link
          to={`/donate-now`}
          className="min-w-fit w-full bg-inherit h-10 md:h-12 uppercase font-[500] md:font-[600] flex items-center justify-center px-8"
        >
          DONATE NOW
        </Link>
      </div>
    </div>
  );
}
