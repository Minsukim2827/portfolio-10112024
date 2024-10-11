
import { Award, BookOpen, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function Education() {
  return (
    <FadeInWrapper>
      <section
        className="py-12 px-4 md:px-8 lg:px-12 min-h-[60vh] flex justify-center items-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 education-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-white">
                  <BookOpen className="w-6 h-6 mr-2 text-red-500" />
                  <span>Academic Excellence</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Maintained an outstanding GPA of{" "}
                  <span className="font-semibold text-red-500">
                    7.44/9
                  </span>
                  , with exceptional performance in Operating Systems and Data Structures & Algorithms courses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 education-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-white">
                  <Code className="w-6 h-6 mr-2 text-red-500" />
                  <span>Academic Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">
                      Secured{" "}
                      <span className="font-semibold text-red-500">
                        2nd place
                      </span>{" "}
                      in the prestigious 2024 CSEA x MAPS University Coding Competition, demonstrating advanced problem-solving skills and logical thinking.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">
                      Achieved{" "}
                      <span className="font-semibold text-red-500">
                        3rd place
                      </span>{" "}
                      in the 2023 CSEA x MAPS University Coding Competition, showcasing consistent problem-solving skills in coding challenges.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </FadeInWrapper>
  );
}
