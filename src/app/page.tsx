import Image from "next/image";
import Hero from "./Hero/page"
import AboutMe from "./AboutMe/page"
import Projects from "./Projects/page"
import Contact from "./Contact/page"
import Sidebar from "./Sidebar/page"
import Footer from "./Footer/page"
import Header from "./Header/page"
export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-8">

      <Header />

      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      {/* <Sidebar /> */}
      <Footer />

    </main>
  );
}
