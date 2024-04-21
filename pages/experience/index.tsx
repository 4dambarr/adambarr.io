import Projects from "@/components/projects";
import Timeline from "@/components/timeline";

export default function Experience() {
	return (
		<div className='w-full flex flex-col items-center mt-5'>
			<div className="w-[85vw] max-w-[1050px] mb-8 flex flex-col items-center">
				<Timeline />
				<div className="w-full flex flex-col items-start mb-16">
					<h1>Education</h1>
					<h2 className="mb-0 mt-2">MEng Computer Science with Artifical Intelligence</h2>
					<h3><b>University of York</b> <i>2018 - 2023</i></h3>
					<h3><b>Grade: First Class</b></h3>
					<div className="pl-3">
						<ul>
							<li>Year 1: Upper Second Class</li>
							<li>Year 2: First Class</li>
							<li>Year 3: <i>Placement Year</i></li>
							<li>Year 4: First Class</li>
							<li>Year 5: First Class</li>
						</ul>
					</div>
				</div>
				<Projects />
			</div>
		</div>
	)
}