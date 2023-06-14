import Image from 'next/image';

const Languages =
	[
		{
			key: "language_0",
			name: "C++",
			image: <Image src="/languages_images/cpp.png" height={64} width={64} alt="C++" />
		},
		{
			key: "language_1",
			name: "Rust",
			image: <Image src="/languages_images/rust.png" height={64} width={64} alt="Rust" />
		},
		{
			key: "language_2",
			name: "TypeScript",
			image: <Image src="/languages_images/typescript.png" height={64} width={64} alt="TypeScript" />
		},
		{
			key: "language_3",
			name: "JavaScript",
			image: <Image src="/languages_images/javascript.png" height={64} width={64} alt="JavaScript" />
		},
		{
			key: "language_4",
			name: "C",
			image: <Image src="/languages_images/c.png" height={64} width={64} alt="C" />
		},
		{
			key: "language_5",
			name: "SQL (MySql)",
			image: <Image src="/languages_images/mysql.png" height={64} width={64} alt="MySql" />
		},
		{
			key: "language_6",
			name: "Java",
			image: <Image src="/languages_images/java.png" height={64} width={64} alt="Java" />
		},
		{
			key: "language_7",
			name: "Python",
			image: <Image src="/languages_images/python.png" height={64} width={64} alt="Python" />
		}
	]

export default Languages;
