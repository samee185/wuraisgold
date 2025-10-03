import { Btn } from "../../utils/Button";
import { useProject } from "../../contexts/ProjectContext";

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
            .slice(0, 3) // ✅ only take the first 3 projects
            .map((project) => (
              <Single
                key={project._id}
                img={project.images[0]}
                title={project.title}
                date={project.date ? new Date(project.date).toDateString() : "No date"}
                slug={project.slug}
                text={project.description}
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

function Single({ img, title, date, text, id }) {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Project Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        {/* Title & Date */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{date}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {text}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <Btn
            name="Learn More"
            id={`/projects/${id}`}
            className="!px-6 !py-2 !rounded-full !bg-primary !text-white hover:!bg-primary/90 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

