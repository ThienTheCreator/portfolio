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

const skillsList = {
  lanuages: [
    "C++",
    "Rust",
    "JavaScript / Typescript",
    "C",
    "MySQL",
    "Java",
    "Python"
  ],
  toolsFrameworks: [
    "React",
    "Tailwind CSS",
    "Next.js",
    "Git",
  ]
}

const projectsList = [
  "2048 Clone",
  "Chess",
  "MineSweeper"
]

export default function Home() {
  const topRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
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
          <button onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>About</button>
          <button onClick={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
          <button onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
        </nav>
        <div className="centerItems">
          <div className="centerItems">
            <Picture />
            <div className="flex fex-row">
              <Link href="https://www.linkedin.com/in/ThienPham1">
                <LinkedInIcon />
              </Link>
              <Link href="https://github.com/ThienTheCreator">
                <GithubLight />
              </Link>
            </div>
            <h1 ref={aboutRef} className="my-2">
              About Me
            </h1>
            <p>
              Me Hello, my name is Thien.
            </p>
          </div>
          <div className="centerItems">
            <h1 ref={skillsRef} className="my-2">Skills</h1>
            <button onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}>↑To Top</button>
            <h2>Lanuages</h2>
            <ul>
              {skillsList.lanuages.map((item) => <li>{item}</li>)}
            </ul>
            <h2>Tools & Frameworks</h2>
            <ul>
              {skillsList.toolsFrameworks.map((item) => <li>{item}</li>)}
            </ul>
          </div>
          <div className="centerItems my-1">
            <h1 ref={projectsRef}>Projects</h1>
            <button className="ml-4" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>↑To Top</button>
            <ul>
              {projectsList.map((item) => <li>{item}</li>)}
            </ul>
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
