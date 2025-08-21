import { EXPERIENCE } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/50 shadow-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                <p className="text-neutral-400">{exp.company}</p>
              </div>
              <span className="text-sm text-neutral-500">{exp.period}</span>
            </div>
            <p className="text-neutral-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
