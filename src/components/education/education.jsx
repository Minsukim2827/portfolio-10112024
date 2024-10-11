
import { Award, BookOpen, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    (<section
      className="py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle
                className="flex items-center text-xl font-semibold text-gray-700 dark:text-gray-200">
                <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                Academic Excellence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Maintained an outstanding GPA of <span className="font-semibold text-blue-600 dark:text-blue-400">7.44/9</span>, with exceptional performance in Operating Systems and Data Structures & Algorithms courses
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle
                className="flex items-center text-xl font-semibold text-gray-700 dark:text-gray-200">
                <Code className="w-6 h-6 mr-2 text-green-500" />
                Academic Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Secured <span className="font-semibold text-yellow-600 dark:text-yellow-400">2nd place</span> in the prestigious 2024 CSEA x MAPS University Coding Competition, demonstrating advanced problem-solving skills and logical thinking
                  </p>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Achieved <span className="font-semibold text-yellow-600 dark:text-yellow-400">3rd place</span> in the 2023 CSEA x MAPS University Coding Competition, showcasing consistent problem solving skills in coding problems
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>)
  );
}