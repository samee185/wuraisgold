import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { Btn } from "../../utils/Button";
import { Link } from "react-router-dom";
import { useProject } from "../../contexts/ProjectContext";

export default function Index() {
  const { projects, loading } = useProject(); 

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title="Our Projects" />

      <main className="px-5 md:px-20 py-10 md:py-20 w-full">
        {loading.fetch ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-lg font-semibold">Loading projects...</p>
          </div>
        ) : (
          <div className="w-full flex flex-col md:grid grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <Single
                key={i}
                _id={project?._id}
                img={project?.images[0]}
                title={project?.title}
                date={new Date(project?.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                text={project?.text}
              />
            ))}
          </div>
        )}
      </main>

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
        <p className="text-gray-700">{info?.text}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Btn
          name="VIEW PROJECT"
          id={`/projects/${info?._id}`}
          style="w-full"
        />
        <Link
          to={`/donate-now`}
          className={`min-w-fit w-full bg-inherit h-10 md:h-12 uppercase font-[500] md:font-[600] flex items-center justify-center px-5 `}
        >
          DONATE NOW
        </Link>
      </div>
    </div>
  );
}
