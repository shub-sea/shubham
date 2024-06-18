/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JzOOLgtbuSS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Daynight from "../Daynight/page"
import { Meteors } from "@/components/ui/meteors";
export default function Component() {
  return (
    <>
    
    <section className="w-full py-12 p-5 md:py-24  lg:py-32">
    
      <div className="container grid items-center  justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="/placeholder.svg"
          width="600"
          height="600"
          alt="Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-Black sm:text-5xl md:text-6xl">Shubham Maurya</h1>
            <p className="text-xl text-gray-500 underline dark:text-gray-400">Web Developer</p>
          </div>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            I'm a passionate frontend developer with a focus on building beautiful and user-friendly web applications. I
            love to create intuitive and responsive interfaces that provide an exceptional user experience.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
    
    </>
  )
}
