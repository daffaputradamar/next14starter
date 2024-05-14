/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6faMBSE3uAD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function IconNewTab() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
    </svg>

  )
}

function IconGithub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5" viewBox="0 0 30 30">
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>

  )
}

export default function HomePage() {
  return (
    <>
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Daffa Akbar</h1>
              <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400">Software Engineer</h2>
              <p className="text-gray-600 dark:text-gray-200">
                I'm a passionate frontend developer with a focus on building beautiful and performant web applications.
                I have experience working with modern JavaScript frameworks and libraries, and I'm always eager to learn
                new technologies.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">View Portfolio</Button>
                <Button variant="default">Contact Me</Button>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:h-96">
              <img
                alt="Hero Image"
                className="h-full w-full object-cover object-center"
                height={800}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <Card className="w-full max-w-md">
                <img
                  alt="Card Header"
                  className="aspect-[2/1] w-full rounded-t-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="space-y-4 p-6">
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Project 1
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-200">
                      A brief description of the first project.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                    >
                      <Button><span className="pr-2">View Project</span> <IconNewTab /></Button>
                    </Link>
                    <Link
                      href="#"
                    >
                      <Button className="dark:bg-foreground text-primary-foreground hover:text-primary-foreground" variant={"outline"}><span className="pr-2">Github</span> <IconGithub /></Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <Card className="w-full max-w-md">
                <img
                  alt="Card Header"
                  className="aspect-[2/1] w-full rounded-t-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="space-y-4 p-6">
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Project 2
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-200">
                      A brief description of the first project.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                    >
                      <Button><span className="pr-2">View Project</span> <IconNewTab /></Button>
                    </Link>
                    <Link
                      href="#"
                    >
                      <Button className="dark:bg-foreground text-primary-foreground hover:text-primary-foreground" variant={"outline"}><span className="pr-2">Github</span> <IconGithub /></Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
              <Card className="w-full max-w-md">
                <img
                  alt="Card Header"
                  className="aspect-[2/1] w-full rounded-t-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="space-y-4 p-6">
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Project 3
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-200">
                      A brief description of the first project.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                    >
                      <Button><span className="pr-2">View Project</span> <IconNewTab /></Button>
                    </Link>
                    <Link
                      href="#"
                    >
                      <Button className="dark:bg-foreground text-primary-foreground hover:text-primary-foreground" variant={"outline"}><span className="pr-2">Github</span> <IconGithub /></Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-gray-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <p className="text-gray-600 dark:text-gray-200">
                As a frontend developer, I have a deep passion for creating visually stunning and highly interactive web
                applications. With years of experience working with modern JavaScript frameworks and libraries, I have
                honed my skills in building scalable and performant user interfaces.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-200">
                My approach to development is centered around clean code, modular design, and a keen eye for detail. I
                believe that great user experiences are the result of thoughtful planning, iterative development, and a
                relentless focus on quality.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-200">
                Beyond my technical expertise, I am also a strong communicator and collaborator. I enjoy working closely
                with designers, product managers, and other developers to ensure that the final product meets the needs
                of our users and aligns with the overall business goals.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:h-96">
              <img
                alt="About Image"
                className="h-full w-full object-cover object-center"
                height={800}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-primary-foreground dark:text-primary">Front-end Development</h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-200">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React, Vue.js, Angular</li>
                <li>Responsive Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-primary-foreground dark:text-primary">Back-end Development</h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-200">
                <li>Node.js, Express.js</li>
                <li>RESTful API Design</li>
                <li>Database Management (SQL, NoSQL)</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-primary-foreground dark:text-primary">Other Skills</h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-200">
                <li>Git and Version Control</li>
                <li>Agile Methodologies</li>
                <li>UI/UX Design</li>
                <li>Technical Writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-gray-100 dark:bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Testimonials</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Jane Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-200">
                "John is an exceptional frontend developer. He has a keen eye for detail and always delivers
                high-quality work. I highly recommend him to anyone looking to build a beautiful and performant web
                application."
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="John Smith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">John Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">CTO</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-200">
                "I've had the pleasure of working with John on several projects, and I'm always impressed by his ability
                to translate complex designs into clean, maintainable code. He's a true asset to any team."
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Sarah Lee</h3>
                  <p className="text-gray-500 dark:text-gray-400">Designer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-200">
                "Working with John has been a true pleasure. He has a deep understanding of design principles and always
                finds creative ways to bring our designs to life. I highly recommend him to anyone looking for a
                talented and collaborative frontend developer."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Me</h2>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <p className="text-gray-600 dark:text-gray-200">
                If you're interested in working with me or just want to say hello, feel free to reach out. I'm always
                happy to chat about web development, design, or anything else that piques your interest.
              </p>
              <form className="mt-6 space-y-4">
                <Input className="w-full" placeholder="Name" type="text" />
                <Input className="w-full" placeholder="Email" type="email" />
                <Textarea className="w-full" placeholder="Message" />
                <Button type="submit" variant="default">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:h-96">
              <img
                alt="Contact Image"
                className="h-full w-full object-cover object-center"
                height={800}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}