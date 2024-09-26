import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const Skills = [
  {
    name: "HTML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    desc: "The standard markup language for creating web pages and web applications",
  },
  {
    name: "CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    desc: "Cascading Style Sheets language",
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    desc: "A scripting language for the web development",
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    desc: "A JavaScript library for building user interfaces",
  },
  {
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    desc: "The utility-first CSS framework",
  },
  {
    name: "Next.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    desc: "The React framework for production",
  },
];

export default function MyWorksPage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 transition-colors duration-200">
      <section className="mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase">
          My Works
        </h1>
        <p className="text-center">
          Here you can see my skills in web design and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((index, item) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
            >
              <Card key={index} className="bg-opacity-80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Project {item}</CardTitle>
                  <CardDescription>Web Design & Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`/background.jpg`}
                    alt={`Project ${item}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p className="mt-4">
                    A brief description of Project {item}. This showcases my
                    skills in web design and development.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-12 mb-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 uppercase">
          My Skills
        </h1>
        <p className="text-center">
          Here you can see my skills in web design and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {Skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.03 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>Web Design & Development</CardDescription>
                </CardHeader>
                <CardContent className="overflow-hidden">
                  <img
                    src={item.icon}
                    alt={`Skill ${item.name}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md bg-gray-200"
                  />
                  <p className="mt-4">{item.desc}.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
