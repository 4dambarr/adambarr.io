import { useWindowSize } from "@/lib/mediaQuerys"

const experience = [
	{
		name: "Intuety",
		url: "https://intuety.io",
		location: 'Remote',
		positions: [
			{
				jobTitle: "Intern Software Developer",
				dates: "September 2020 - September 2021",
				description: "During my degree I completed a placement year with Intuety, a startup who is using Artificial Intelligence and NLP to improve safety in the construction industry. \n I worked on their full stack, including devloping a full internal toolkit, building out an api suite to interact with the product, and improving the quality of their data."
			},
			{
				jobTitle: "Software Developer (Part Time)",
				dates: "September 2021 - June 2023",
				description: "After completing my placement year I continued to work for Intuety on a part time basis. Maintaining the work I had completed of my placement, and helping to implement and integrate new feautures."
			}
		]
	},
	{
		name: "Alpha Group",
		url: "https://alphagroup.com",
		location: 'London, United Kingdom',
		positions: [
			{
				jobTitle: "Graduate Software Engineer",
				dates: "September 2024 - Present",
				description: "After graduating from university I moved to London to start a full time role with Alpha Group, where I am helping to solve problems facing the Alternative Investment industry. I am also currently their championing the 'Next Level Performance' program for part the London based engineering team."
			}
		]
	}
]

export default function Timeline() {

	return (
		<div className={`grid grid-cols-[50px_1fr] lg:grid-cols-[200px_1fr] w-full mb-16`}>
			<div className="relative">
				<div className={`w-[316px] lg:w-[400px] h-[20px] border-black border-l-[5px] border-t-[5px] border-black rounded-tl-2xl absolute right-[-288.5px] lg:right-[-297.5px] bottom-[-15px]`}></div>
			</div>
			<div>
				<h1 className="mb-1em">Career Timeline</h1>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-[5px] mt-[7px] h-full bg-black flex justify-center items-center overflow-visible">
				</div>
			</div>
			<div className="w-full">
				{experience.map((company, key) => (
					<div className="my-10" key={key}>
						<h2 className="mb-0">
							<a className="no-underline hover:underline" href={company.url}>{company.name}</a>
						</h2>
						<h3>{company.location}</h3>
						{company.positions.map((position, key) => {
							return <div className="relative"key={key}>
								<h3><b>{position.jobTitle}</b></h3>
								<h3 className="mb-1"><i>{position.dates}</i></h3>
								<p>{position.description}</p>
								<div className="rounded-[50%] w-[20px] h-[20px] bg-secondary absolute float-left top-8 left-[-35px] lg:left-[-109px]"></div>
							</div>
						})}
					</div>
				))}
			</div>
			<div>
				<div className="relative">
					<div className="w-[500px] lg:w-[2000px] h-[20px] border-black border-r-[5px] border-b-[5px] border-black rounded-br-2xl absolute left-[-472.5px] lg:left-[-1897.5px]">
					</div>
				</div>
			</div>
		</div>
	)
}