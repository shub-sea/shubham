import Image from "next/image";
import Hero from "./Hero/page"
import AboutMe from "./AboutMe/page"
import Projects from "./Projects/page"
import Contact from "./Contact/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="sticky top-0 z-20">
        <h1 className="text-2xl font-semibold">Shubham Maurya</h1>
      </div>
      <Hero />
      <AboutMe />
      <Projects/>
      <Contact/>
    </main>
  );
}
