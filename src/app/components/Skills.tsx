import { SKILLS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div>
    <h3 className="text-lg font-semibold text-cyan-400 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-neutral-800 text-neutral-300 text-sm px-4 py-2 rounded-md"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCategory title="Languages" skills={SKILLS.languages} />
        <SkillCategory title="Web Development" skills={SKILLS.web} />
        <SkillCategory title="Backend & Database" skills={SKILLS.backend} />
        <SkillCategory title="DevOps & Tools" skills={SKILLS.devops} />
      </div>
    </SectionWrapper>
  );
}
