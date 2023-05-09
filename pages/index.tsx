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

export default function Home() {
  const firstItemRef = useRef<HTMLHeadingElement>(null);
  const secondItemRef = useRef<HTMLHeadingElement>(null);
  const thirdItemRef = useRef<HTMLHeadingElement>(null);
  return (
    <>
      <Head>
        <title>Thien Pham</title>
        <meta name="description" content="Thien Pham Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white">
        <nav className="flex flex-row justify-evenly text-xl">
          <button onClick={() => firstItemRef.current?.scrollIntoView()}>About</button>
          <button onClick={() => secondItemRef.current?.scrollIntoView()}>Skills</button>
          <button onClick={() => thirdItemRef.current?.scrollIntoView()}>Projects</button>
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
            <h1 ref={firstItemRef}>
              About Me
            </h1>
            <p>
              Me Hello, my name is Thien. Welcome to my website!
            </p>
            <div></div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div className="centerItems">
            <h1 ref={secondItemRef}>Skills</h1>
            C++
            JavaScript/TypeScript
            HTML
            CSS
            Python
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="centerItems">
            <h1 ref={thirdItemRef}>Projects</h1>
            Chess
            Music
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </main>
    </>
  )
}
