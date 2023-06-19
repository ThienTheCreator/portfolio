import Image from 'next/image';

const Projects =
	[
		{
			key: "project_0",
			title: "2048",
			image:
				<Image
					src="/project_images/2048.png"
					alt="2048Picture"
					width={0}
					height={0}
					sizes="100vw"
					className="w-full h-auto object-scale-down"
				/>,
			description: "Clone of the 2048. Created a simple Ai to try to solve the game.",
			demo: "https://thienthecreator.github.io/2048",
			github: "https://github.com/ThienTheCreator/2048"
		},
		{
			key: "project_1",
			title: "Music",
			image:
				<Image
					src="/project_images/music.png"
					alt="MusicPicture"
					width={0}
					height={0}
					sizes="100vw"
					className="w-full h-auto object-scale-down"

				/>,
			description: "Music group project created in React with Tone.js and P5.js",
			demo: "https://thienthecreator.github.io/Music-App-CSC-600",
			github: "https://github.com/ThienTheCreator/Music-App-CSC-600"
		},
		{
			key: "project_2",
			title: "Tetris",
			image:
				<Image
					src="/project_images/tetris.png"
					alt="TetrisPicture"
					width={0}
					height={0}
					sizes="100vw"
					className="w-full h-auto object-scale-down"
				/>,
			description: "Tetris game made in JS using Canvas. There are some options to change color of the block and layout of the display.",
			demo: "https://thienthecreator.github.io/Tetris/",
			github: "https://github.com/ThienTheCreator/Tetris"

		},
		{
			key: "project_3",
			title: "Chess",
			image:
				<Image
					src="/project_images/chess.png"
					alt="ChessPicture"
					width={0}
					height={0}
					sizes="100vw"
					className="w-full h-auto object-scale-down"
				/>,
			description: "Clone of the 2048. Created a simple Ai to try to solve the game.",
			demo: "https://thienthecreator.github.io/Chess",
			github: "https://github.com/ThienTheCreator/Chess"
		}
	]

export default Projects;
