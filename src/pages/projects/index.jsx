import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { Btn } from "../../utils/Button";
import { useProject } from "../../contexts/ProjectContext";
import Single from "../../components/Single";

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
                key={project?._id || i}
                id={project?._id}
                img={project?.images?.[0]}
                title={project?.title}
                date={new Date(project?.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                text={project?.text}
                slug={project?._id}
                donateLink={true}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </main>
  );
}

// ...existing code...
