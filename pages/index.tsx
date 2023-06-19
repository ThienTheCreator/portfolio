import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Languages from '../components/languages';
import Other from '../components/other';
import Projects from '../components/projects';

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

const languages = Languages;

const otherToolsFrameworks = Other;

const projectsList = Projects;

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
				<nav className="flex flex-row justify-evenly text-2xl py-4 bg-black border border-[#808080] border-x-transparent border-t-transparent">
					<button onClick={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
					<button onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
				</nav>
				<div>
					<div className="h-[60rem] flex flex-wrap justify-center">
						<div className="my-auto">
							<div className="flex justify-center">
								<Picture />
							</div>
							<div className="flex flex-wrap justify-center">
								<Link href="https://www.linkedin.com/in/ThienPham1">
									<LinkedInIcon />
								</Link>
								<Link href="https://github.com/ThienTheCreator">
									<GithubLight />
								</Link>
							</div>
							<h1 className="flex flex-wrap justify-center my-4">
								About Me
							</h1>
							<div className="flex flex-wrap justify-center my-4">
								<p>
									Hello, my name is Thien. I am a developer.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center">
						<div className="flex flex-col mb-4 h-[60rem]">
							<div className="flex flex-wrap justify-center">
								<h1 ref={skillsRef} className="my-4">Skills</h1>
								<button className="ml-4" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}>↑To Top</button>
							</div>
							<div className="grow flex flex-col justify-center ">
								<div className="flex flex-wrap justify-center">
									<h2 className="my-12">Lanuages</h2>
								</div>
								<div className="flex flex-wrap justify-evenly">
									{languages.map((item) =>
										<div key={item.key} className="flex w-52 space-x-8 my-4"><div> {item.image}</div><div className="my-auto">{item.name}</div></div>
									)}
								</div>
								<div className="flex justify-center">
									<h2 className="my-12">Tools & Frameworks</h2>
								</div>
								<div className="flex flex-wrap justify-center">
									{otherToolsFrameworks.map((item) =>
										<div key={item.key} className="flex w-52 space-x-8 my-4"><div> {item.image}</div><div className="my-auto">{item.name}</div></div>)
									}
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div>
							<div className="flex flex-wrap justify-center">
								<h1 ref={projectsRef} className="my-2">Projects</h1>
								<button className="ml-4" onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>↑To Top</button>
							</div>
							{projectsList.map((item) =>
								<div key={item.key} className="flex flex-col min-h-[720px] border-hidden border-8 rounded-2xl my-16 bg-neutral-700">
									<div className="flex flex-wrap justify-center">
										<h2 className="m-2">{item.title}</h2>
									</div>
									<div className="flex flex-1">
										<div className="flex flex-wrap flex-row justify-center">
											<div className="flex justify-center m-auto w-[300px]">
												{item.image}
											</div>
											<div className="my-auto w-80 inline-block">
												<p>
													{item.description}
												</p>
												<div className="flex justify-evenly w-full my-5">
													{item.demo !== undefined
														? <a href={item.demo} target="_blank" rel="noopener noreferrer" className="grid place-content-center w-36 h-16 bg-neutral-500">Demo</a>
														: null
													}
													{item.demo !== undefined
														? <a href={item.github} target="_blank" rel="noopener noreferrer" className="grid place-content-center w-36 h-16 bg-neutral-500">GitHub</a>
														: null
													}
												</div>
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
				<div className="flex flex-wrap justify-center mb-4">
					2023 © Thien Pham
				</div>
			</footer>
		</>
	)
}
