import Image from 'next/image';

const Other =
	[
		{
			key: "other_0",
			name: "React",
			image: < Image src="/other_images/react.svg" height={64} width={64} alt="React" />
		},
		{
			key: "other_1",
			name: "Tailwind CSS",
			image: <Image src="/other_images/tailwindcss.svg" height={64} width={64} alt="Tailwind CSS" />
		},
		{
			key: "other_2",
			name: "Next.js",
			image: <Image src="/other_images/nextjs.svg" height={64} width={64} alt="Next.js" />
		},
		{
			key: "other_3",
			name: "Git",
			image: <Image src="/other_images/git.svg" height={64} width={64} alt="Git" />
		}
	]

export default Other;
