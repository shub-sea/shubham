import Image from "next/image";
import Hero from "./Hero/page"
import AboutMe from "./AboutMe/page"
import Projects from "./Projects/page"
import Contact from "./Contact/page"
import Header from "./Header/page"
export default function Home() {
  return (
      <main className="flex min-h-screen dark:-rotate-90 dark:scale-0 flex-col items-center justify-between ">
               
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>

  );
}
