import Head from 'next/head'
import Image from 'next/image';

const Picture = () => (
  <Image
    src="/pic.jpg" // Route of the image file
    height={360} // Desired size with correct aspect ratio
    width={360} // Desired size with correct aspect ratio
    alt="pciture"
  />
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Thien Pham</title>
        <meta name="description" content="Thien Pham Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-gray-400">
        <nav className="flex flex-row justify-evenly text-xl">
          <a>About</a>
          <a>Projects</a>
          <a>Skills</a>
          <a>Other</a>
        </nav>
        <div className="centerItems">
          <div className="centerItems">
            <h1>
              About Me
            </h1>
            <Picture/>
            <p>
              Me Hello, my name is Thien. Welcome to my website!
            </p>
          </div>
          <div className="centerItems">
            <h1>Skills</h1>
            C++
            JavaScript/TypeScript
            HTML
            CSS
            Python
          </div>
          <div className="centerItems">
            <h1>Projects</h1>
            Chess
            Music
          </div>
        </div>
      </main>
    </>
  )
}
