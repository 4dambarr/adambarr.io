import { useEffect, useState } from "react";

const projects = [
	{
		name: 'Left and Right Wing Tweet Detector',
		technologies: ['Python', 'PyTorch', 'Transformers'],
		description: "My Master's dissertation was to explore whether NLP could be used to categorise tweets based on their political leaning. I was able to achieve positive results, with my final fine-tuned network classifying tweets with more than 80% accuracy."
	},
	{
		name: 'Vagueness and Ambiguity Removal using Transformers',
		link: '/Vagueness_and_Ambiguity_Removal_using_Transformers-Adam_Barr.pdf',
		technologies: ['Python', 'Transformers', 'N-Gram'],
		description: 'My third year dissertation has the goal of identifying and removing vague and ambigous sentences from a dataset. I explored multiple techniques to achieve this, from simple readability metrics to sentence encoding, my best result came from comparing sentences using'
	},
	{
		name: 'Yordle',
		link: 'https://github.com/yordevs/yordle',
		technologies: ['React', 'TypeScript', 'NodeJS', 'JavaScript'],
		description: 'A University of York themed wordle clone...'
	},
	{
		name: 'The Lemon Press Webiste',
		link: 'https://github.com/yordevs/yordle',
		technologies: ['React', 'TypeScript', 'Wordpress', 'Gatsby'],
		description: 'I lead a project to deliver a new website for the lemon press, a satirical magazine at the University of York'
	}
]

export default function Projects() {
	const [technologies, setTechnologies] = useState<string[]>([]);
	const [filterValues, setFilterValues] = useState<string[]>([]);

	const addFilterValue = (val: string) => {
		var tmp = [...technologies];
		tmp.splice(technologies.indexOf(val), 1)
		setTechnologies(tmp);
		setFilterValues([...filterValues, val]);
	}

	const removeFilterValue = (val: string) => {
		var tmp = [...filterValues];
		tmp.splice(filterValues.indexOf(val), 1)
		setFilterValues(tmp);
		setTechnologies([...technologies, val]);
	}

	useEffect(() => {
		var tmpTech: string[] = [];
		for (let project of projects) {
			tmpTech = [...new Set([...tmpTech, ...project.technologies])]
		}
		setTechnologies(tmpTech);
	}, []);


	return (
		<div className="w-full flex flex-col items-start">
			<h1>Projects</h1>
			<p className="m-0">Filters:</p>
			<div className="flex justify-start flex-wrap">
				{
					filterValues.map((technology, key) => {
						return <div
							className="border-2 px-2 py-1 mx-1 my-1 border-black rounded-full bg-secondary hover:bg-red-400 hover:cursor-pointer"
							onClick={() => removeFilterValue(technology)}
							key={key}
						>
							{technology}
						</div>
					})
				}
				{
					technologies.map((technology, key) => {
						return <div
							className="border-2 px-2 py-1 mx-1 my-1 border-black rounded-full hover:bg-secondary hover:cursor-pointer"
							onClick={() => addFilterValue(technology)}
							key={key}
						>
							{technology}
						</div>
					})
				}
			</div>

			{projects.map((project, key) => {
				var commonElements = filterValues.filter(val => {
					return project.technologies.indexOf(val) > -1;
				});
				if (filterValues.length == 0 || commonElements.length > 0) {
					return (
						<div key={key} className="w-full">
							<h2 className="mb-1">{project.name}</h2>
							{project.link ? <h3 className="my-2"><a href={project.link} className="text-wrap break-all">
								{project.link}
								</a></h3> 
								: ''}
							<h3 className="my-2 font-semibold"><i>{project.technologies.join(', ')}</i></h3>
							<p>{project.description}</p>
						</div>
					)
				}
			})}
		</div>
	)
}