import { PROFILE } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-neutral-300 leading-relaxed text-center">
          {PROFILE.description}
        </p>
      </div>
    </SectionWrapper>
  );
}
