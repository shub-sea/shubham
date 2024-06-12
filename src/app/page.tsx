import Image from "next/image";
import Hero from "./Hero/page"
import AboutMe from "./AboutMe/page"
import Projects from "./Projects/page"
import Contact from "./Contact/page"
import Sidebar from "./Sidebar/page"
import Footer from "./Footer/page"
import Header from "./Header/page"
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam"
import { SparklesCore } from "../components/ui/sparkles"
export default function Home() {
  return (
    <TracingBeam>
      <main className="flex min-h-screen dark:-rotate-90 dark:scale-0 flex-col items-center justify-between p-8">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={3.2}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#212529"

        />
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Sidebar /> */}
        {/* <Footer /> */}
      </main>
    </TracingBeam>
  );
}
