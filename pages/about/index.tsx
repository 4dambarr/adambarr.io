import { FaRibbon } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { SlSpeech } from "react-icons/sl";
import { RiPresentationFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiVolleyballLight } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { GoTrophy } from "react-icons/go";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { BookCarousel } from "@/components/bookCarousel";

const awards = [
	{
		name: 'Full Colours - University of York',
		icon: <FaRibbon />
	},
	{
		name: 'Volunteer of the Year Award (Nominated) - Yorkshire Universities Sports Awards',
		icon: <MdOutlineVolunteerActivism />
	},
	{
		name: 'Student Orator - University of York Computer Science Graduation Ceremony 2023',
		icon: <SlSpeech />
	},
	{
		name: '"You gave what was likely the most compelling presentation in the history of the [module]" - Feedback on Final University Group Presentation',
		icon: <RiPresentationFill />
	},
	{
		name: 'Most Valuable Player of the Season 2021/22 - York Volleyball Club',
		icon: <PiVolleyballLight />
	},
	{
		name: 'Raised >£4000 for the University of York Volleyball Club whilst President of the club',
		icon: <GiTakeMyMoney />
	},
	{
		name: 'Best Technical Achievment - York Student Media Awards (Yordevs website made for The Lemon Press)',
		icon: <CgWebsite />
	},
	{
		name: 'University Sportsman of the Year (Nominated) - York Sport Union Colours Ball 2022',
		icon: <GoTrophy />
	}
]

export default function About() {
	const [numCols, setNumCols] = useState(4);

	useEffect(() => {
		if (1000 > 990) {
			setNumCols(4);
		} else {
			setNumCols(2);
		}
	}, [])

	const Map = useMemo(() => dynamic(
		() => import("../../components/map"),
		{
			loading: () => <p>A map is loading</p>,
			ssr: false
		}
	), [])

	return <div className='w-full flex flex-col items-center mt-5'>
		<div className="w-[85vw] max-w-[1050px] flex flex-col items-center">
			<h1>About Me</h1>
			<p className="text-center mt-2">
				I am Adam Barr, currently I work as a Software Enginner for <a href='https://alphagroup.com'>Alpha Group</a> in
				London, I also play Volleyball in National League Division 1 with <a href='https://www.littlegiantsvc.com/league-teams'>London Giants</a>.
				I am a keen runner, having run half marathons and a full marathon! Ontop of my physical activities I enjoy
				spending my freetime with friends, working on side projects, or reading.
			</p>
			<h2>Where to find me</h2>
			<div className="w-full flex justify-center">
				<Map />
			</div>
			<h2>Awards and Achievements</h2>
			<div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
				{awards.map(award => {
					return (
						<>
							<div className="group-hover:invisible flex flex-col justify-center items-center border-black border-2 rounded-md py-4 px-2 relative group">
								<p className="text-[60px] my-0 m">{award.icon}</p>
								<p className="text-center line-clamp-4 mt-1 mb-0">{award.name}</p>
								<div className="invisible group-hover:cursor-default group-hover:visible absolute z-50 bg-white flex flex-col justify-center items-center border-black border-2 rounded-md py-4 px-2">
									{award.name}
								</div>
							</div>
						</>
					);
				})}
			</div>
			<h2>Books</h2>
			<p className="text-center">I often find one of the best ways the learn about a person is by finding out what books they enjoy, below are a few books I have read, enjoyed, and recommend.</p>
			<BookCarousel />
		</div>
	</div>
}