import { PROJECTS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/50 flex flex-col"
          >
            {/* PERUBAHAN DI SINI */}
            <h3 className="text-lg font-bold text-[#F8F9FE] mb-2">
              {project.title}
            </h3>
            <p className="text-neutral-400 flex-grow mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-800 text-[#698ce2] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
