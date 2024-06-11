/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P0GMQE8IWx3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function page() {
    return (
      <section className="w-full shadow-xl shadow-neutral-900/10 rounded-md py-12 md:py-24 lg:py-32  dark:bg-gray-800">
        <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get to know the person behind the code.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Hi there! I'm Jane, a passionate web developer with a deep love for creating beautiful and functional
                digital experiences. My journey in tech began when I was just a kid, tinkering with computers and
                exploring the endless possibilities of the internet.
              </p>
              <p>
                After studying computer science in college, I dove headfirst into the world of web development, honing my
                skills in languages like HTML, CSS, and JavaScript. I'm particularly drawn to the intersection of design
                and code, and I strive to craft intuitive and visually appealing user interfaces that delight and engage.
              </p>
              <p>
                What inspires me most is the ability to bring ideas to life and solve real-world problems through
                technology. Whether I'm building a sleek e-commerce platform or a dynamic web application, I'm driven by
                the challenge of translating concepts into tangible, user-friendly solutions.
              </p>
              <p>
                Beyond my technical expertise, I'm also deeply passionate about continuous learning and staying up-to-date
                with the latest industry trends and best practices. I'm constantly exploring new frameworks, libraries,
                and tools to expand my skillset and deliver even more value to my clients and collaborators.
              </p>
              <p>
                When I'm not coding, you can find me exploring the great outdoors, immersed in a good book, or
                experimenting with new recipes in the kitchen. I believe that a well-rounded life leads to a more
                fulfilling and creative professional experience.
              </p>
              <p>
                Thank you for taking the time to learn a bit more about me. I'm excited to connect and discuss how I can
                contribute to your next project!
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">HTML</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">CSS</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">JavaScript</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">React</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">Node.js</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">MongoDB</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">Git</div>
                <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700">Figma</div>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Experience</h3>
              <div className="space-y-2">
                <div>
                  <div className="text-sm font-medium">Web Developer, Acme Inc</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Jan 2020 - Present</div>
                  <p className="text-sm">
                    Developed and maintained responsive, high-performing web applications using React, Node.js, and
                    MongoDB. Collaborated with cross-functional teams to deliver innovative solutions that exceeded client
                    expectations.
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium">Intern, XYZ Tech</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Jun 2019 - Aug 2019</div>
                  <p className="text-sm">
                    Gained hands-on experience in web development, participating in the creation of a company website and
                    internal tools. Learned valuable skills in version control, testing, and deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
