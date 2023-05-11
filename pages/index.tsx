import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Picture = () => (
  <Image
    src="/pic.jpg"
    height={360}
    width={360}
    alt="picture"
    style={{
      borderRadius: "50%"
    }}
  />
);
const LinkedInIcon = () => (
  <Image
    src="/linkedin.svg"
    height={80}
    width={80}
    alt="LinkedInIcon"
  />
);

const GithubLight = () => (
  <Image
    src="/github_light.svg"
    height={80}
    width={80}
    alt="LinkedInIcon"
  />
);

const lanuages = [
  [0, "C++"],
  [1, "Rust"],
  [2, "Typescript"],
  [3, "JavaScript"],
  [4, "C"],
  [5, "MySQL"],
  [6, "Java"],
  [7, "Python"]
]

const toolsFrameworks = [
  [8, "React"],
  [9, "Tailwind CSS"],
  [10, "Next.js"],
  [11, "Git"]
]

const projectsList = [
  {
    key: 12,
    title: "2048",
    image:
      <Image
        src="/project_images/2048.png"
        height={360}
        width={360}
        alt="LinkedInIcon"
      />,
    description: "Clone of the 2048. Created a simple Ai to try to solve the game.",
    demo: "https://thienthecreator.github.io/2048/",
    github: "https://github.com/ThienTheCreator/2048"
  },
  {
    key: 13,
    title: "Chess",
    image: "pic",
    description: "blah"
  },
  {
    key: 14,
    title: "MineSweeper",
    image: "pic",
    description: "blah"
  },
]

export default function Home() {
  const topRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Head>
        <title>Thien Pham</title>
        <meta name="description" content="Thien Pham Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 ref={topRef}></h1>
        <nav className="flex flex-row justify-evenly text-2xl my-4">
          <button onClick={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
          <button onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
        </nav>
        <div className="centerItems">
          <div className="centerItems my-48">
            <Picture />
            <div className="flex fex-row">
              <Link href="https://www.linkedin.com/in/ThienPham1">
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/ThienTheCreator">
                <GithubLight />
              </Link>
            </div>
            <h1 className="my-2">
              About Me
            </h1>
            <p>
              Hello, my name is Thien. I am a developer.
            </p>
          </div>
          <div className="centerItems mb-96">
            <h1 ref={skillsRef} className="my-2">Skills</h1>
            <button onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}>↑To Top</button>
            <h2 className="my-12">Lanuages</h2>
            <ul>
              {lanuages.map((item) => <li key={item[0]}>{item[1]}</li>)}
            </ul>
            <h2 className="my-12">Tools & Frameworks</h2>
            <ul>
              {toolsFrameworks.map((item) => <li key={item[0]}>{item[1]}</li>)}
            </ul>
          </div>
          <div className="centerItems">
            <h1 ref={projectsRef} className="my-2">Projects</h1>
            <button className="ml-4" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>↑To Top</button>
            {projectsList.map((item) =>
              <div key={item.key} className="border rounded-2xl w-[60rem] my-4">
                <h2 className="centerItems m-2">{item.title}</h2>
                <div className="flex flex-row">
                  <div className="m-5">
                    {item.image}
                  </div>
                  <div className="my-auto">
                    <p>
                      {item.description}
                    </p>
                    <div className="flex justify-evenly">
                      {item.demo !== undefined
                        ? <a href={item.demo} target="_blank" rel="noopener noreferrer" className="centerItems w-[100px] bg-neutral-500">Demo</a>
                        : null
                      }
                      {item.demo !== undefined
                        ? <a href={item.github} target="_blank" rel="noopener noreferrer" className="centerItems w-[100px] bg-neutral-500">GitHub</a>
                        : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer>
        <div className="centerItems my-4">
          2023 © Thien Pham
        </div>
      </footer>
    </>
  )
}
