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
    demo: "https://thienthecreator.github.io/2048",
    github: "https://github.com/ThienTheCreator/2048"
  },
  {
    key: 13,
    title: "Music",
    image:
      <Image
        src="/project_images/music.png"
        height={360}
        width={360}
        alt="LinkedInIcon"
      />,
    description: "Music group project created in React with Tone.js and P5.js",
    demo: "https://thienthecreator.github.io/Music-App-CSC-600",
    github: "https://github.com/ThienTheCreator/Music-App-CSC-600"
  },
  {
    key: 14,
    title: "Tetris",
    image:
      <Image
        src="/project_images/tetris.png"
        height={360}
        width={360}
        alt="LinkedInIcon"
      />,
    description: "Tetris game made in JS using Canvas. There are some options to change color of the block and layout of the display.",
    demo: "https://thienthecreator.github.io/Tetris/",
    github: "https://github.com/ThienTheCreator/Tetris"

  },
  {
    key: 15,
    title: "Chess",
    image:
      <Image
        src="/project_images/chess.png"
        height={360}
        width={360}
        alt="LinkedInIcon"
      />,
    description: "Clone of the 2048. Created a simple Ai to try to solve the game.",
    demo: "https://thienthecreator.github.io/Chess",
    github: "https://github.com/ThienTheCreator/Chess"
  }
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
        <div>
          <div className="my-48">
            <div className="centerItems">
              <Picture />
            </div>
            <div className="centerItems">
              <Link href="https://www.linkedin.com/in/ThienPham1">
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/ThienTheCreator">
                <GithubLight />
              </Link>
            </div>
            <h1 className="centerItems my-4">
              About Me
            </h1>
            <div className="centerItems my-4">
              <p>
                Hello, my name is Thien. I am a developer.
              </p>
            </div>
          </div>
          <div className="centerItems">
            <div className="mb-96">
              <div className="centerItems">
                <h1 ref={skillsRef} className="my-4">Skills</h1>
                <button className="ml-4" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}>↑To Top</button>
              </div>
              <div className="centerItems">
                <h2 className="my-12">Lanuages</h2>
              </div>
              <div className="centerItems">
                <ul>
                  {lanuages.map((item) => <li key={item[0]}>{item[1]}</li>)}
                </ul>
              </div>
              <div className="centerItems">
                <h2 className="my-12">Tools & Frameworks</h2>
              </div>
              <div className="centerItems">
                <ul>
                  {toolsFrameworks.map((item) => <li key={item[0]}>{item[1]}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="centerItems">
            <div className="">
              <div className="centerItems">
                <h1 ref={projectsRef} className="my-2">Projects</h1>
                <button className="ml-4" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>↑To Top</button>
              </div>
              {projectsList.map((item) =>
                <div key={item.key} className="border rounded-2xl my-4">
                  <div className="centerItems">
                    <h2 className="m-2">{item.title}</h2>
                  </div>
                  <div className="flex flex-wrap flex-row justify-evenly">
                    <div className="m-5 w-[360px]">
                      {item.image}
                    </div>
                    <div className="my-auto w-[360px]">
                      <p>
                        {item.description}
                      </p>
                      <div className="flex justify-evenly mt-5">
                        {item.demo !== undefined
                          ? <a href={item.demo} target="_blank" rel="noopener noreferrer" className="grid place-content-center w-[150px] h-[60px] bg-neutral-500">Demo</a>
                          : null
                        }
                        {item.demo !== undefined
                          ? <a href={item.github} target="_blank" rel="noopener noreferrer" className="grid place-content-center w-[150px] h-[60px] bg-neutral-500">GitHub</a>
                          : null
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
