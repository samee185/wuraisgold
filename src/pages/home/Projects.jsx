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
                id={project._id}
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
          name="Learn More"
          id={`/projects/${id}`}
          className="block w-full bg-primary text-white text-center py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition-all"
        />
      </div>
    </div>
  );
}

