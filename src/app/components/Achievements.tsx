import { ACHIEVEMENTS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements">
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          {ACHIEVEMENTS.map((ach, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-4 border border-neutral-800 rounded-lg bg-neutral-900/50"
            >
              <Trophy className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-neutral-200">
                  {ach.award} - {ach.competition}
                </p>
                <p className="text-sm text-neutral-400">
                  {ach.university} • {ach.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
