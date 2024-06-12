/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DnHk2d5nFGU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Card1 from "../Card1/page"
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <section className={cn("relative z-20 flex  w-full overflow-hidden  items-center bg-slate-300/10 justify-center rounded-lg ")}>
      {/* <div className="h-96 relative w-full overflow-hidden bg-slate-300 flex flex-col items-center justify-center rounded-lg"> */}
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
      {/* <Boxes /> */}
      {/* <h1 >
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
      {/* </div> */}
      <Boxes />

      <div className="container grid gap-10 px-4 md:px-6  " >

        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore a selection of my most recent and impactful projects, showcasing my expertise and attention to
            detail.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-10">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        </div>

        


        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 1"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary-500">Project 1</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed description of the first project, highlighting its key features and the technologies used.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 2"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary-500">Project 2</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed description of the second project, highlighting its key features and the technologies used.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 3"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary-500">Project 3</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed description of the third project, highlighting its key features and the technologies used.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 4"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary-500">Project 4</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed description of the fourth project, highlighting its key features and the technologies used.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 5"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary-500">Project 5</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed description of the fifth project, highlighting its key features and the technologies used.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Project 6"
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary-500">Project 6</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A detailed description of the sixth project, highlighting its key features and the technologies used.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
        {/* <Card /> */}
      </div>

    </section>
  )
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}