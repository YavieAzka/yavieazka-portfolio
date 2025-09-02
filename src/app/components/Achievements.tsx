import { ACHIEVEMENTS } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import { Trophy } from "lucide-react";

// Definisikan tipe untuk data yang sudah dikelompokkan
type GroupedAchievements = {
  [key: string]: typeof ACHIEVEMENTS;
};

export default function Achievements() {
  // 1. Kelompokkan data pencapaian berdasarkan tahun menggunakan reduce
  const groupedAchievements = ACHIEVEMENTS.reduce((acc, achievement) => {
    const year = achievement.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(achievement);
    return acc;
  }, {} as GroupedAchievements);

  // 2. Urutkan tahun dari yang terbaru ke yang terlama
  const sortedYears = Object.keys(groupedAchievements).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <SectionWrapper id="achievements" title="Achievements">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* 3. Lakukan iterasi pada tahun yang sudah diurutkan */}
          {sortedYears.map((year) => (
            <div key={year}>
              <h3 className="text-2xl font-semibold text-brand-light mb-4 ml-1">
                {year}
              </h3>
              <ul className="space-y-3">
                {/* 4. Lakukan iterasi pada pencapaian untuk setiap tahun */}
                {groupedAchievements[year].map((ach, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 border border-neutral-800 rounded-lg bg-neutral-900/50"
                  >
                    <Trophy
                      className="text-brand-accent mt-1 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="font-semibold text-neutral-200 leading-snug">
                        {ach.award} - {ach.competition}
                      </p>
                      <p className="text-sm text-neutral-400">
                        {ach.university}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
