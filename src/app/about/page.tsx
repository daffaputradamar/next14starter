function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Daffa Akbar</h1>
                <p className="max-w-[600px] text-gray-500 md:text-2xl font-medium dark:text-gray-500">
                  Software Engineer
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-200">
                  I'm a passionate frontend developer and designer with a focus on creating beautiful and user-friendly
                  web experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  About Me
                </h2>
                <p className="text-gray-500 dark:text-gray-200">
                  I have over 5 years of experience in the web development industry, specializing in frontend
                  technologies such as React, JavaScript, and CSS. I'm passionate about creating user-friendly and
                  visually appealing web applications that provide a great user experience.
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  In my free time, I enjoy exploring new design trends, experimenting with different coding techniques,
                  and staying up-to-date with the latest industry developments. I'm also an avid reader and enjoy
                  learning about various topics, from psychology to philosophy.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Skills & Interests
                </h2>
                <ul className="grid gap-4">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-primary-foreground dark:text-primary" />
                    <span className="text-gray-500 dark:text-gray-200">React</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-primary-foreground dark:text-primary" />
                    <span className="text-gray-500 dark:text-gray-200">JavaScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-primary-foreground dark:text-primary" />
                    <span className="text-gray-500 dark:text-gray-200">CSS/Tailwind</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-primary-foreground dark:text-primary" />
                    <span className="text-gray-500 dark:text-gray-200">UX Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-primary-foreground dark:text-primary" />
                    <span className="text-gray-500 dark:text-gray-200">Photography</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-primary-foreground dark:text-primary" />
                    <span className="text-gray-500 dark:text-gray-200">Reading</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;