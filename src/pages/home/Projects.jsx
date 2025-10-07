import { Btn } from "../../utils/Button";
import { useProject } from "../../contexts/ProjectContext";
import Single from "../../components/Single";

export default function Projects() {
  const { projects, loading, error } = useProject();

  if (loading.fetch) {
    return (
      <main className="py-10 text-center">
        <p className="text-gray-500">Loading projects...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="py-10 text-center">
        <p className="text-red-500">Failed to load projects. Please try again.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-10 md:gap-14 py-10">
      <div className="px-5 flex flex-col gap-5 mx-auto text-center">
        <p className="text-primary">Help Us Now</p>
        <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
          Our Projects
        </h3>
      </div>

      <div className="px-5 md:px-20 flex flex-col md:grid grid-cols-3 gap-10">
        {projects && projects.length > 0 ? (
          projects
            .slice(0, 3)
            .map((project) => (
              <Single
                key={project._id}
                id={project._id}
                img={project.images?.[0]}
                title={project.title}
                date={project.date ? new Date(project.date).toDateString() : "No date"}
                text={project.description}
                slug={project._id}
                donateLink={false}
              />
            ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No projects available.
          </p>
        )}
      </div>
    </main>
  );
}

// ...existing code...

