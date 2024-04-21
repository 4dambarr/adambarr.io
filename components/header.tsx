import { IoMenuSharp, IoClose } from "react-icons/io5";
import HeaderLink from "./headerLink"
import { useEffect, useState } from "react";
import MobileHeaderLink from "./mobileHeaderLink";
import { useWindowSize } from "@/lib/mediaQuerys";

interface Props {
	currentPage: string
}

export default function Header({currentPage} : Props) {
	const [showDropdown, setShowDropdown] = useState(false);
	const size = useWindowSize();

	if (size.width === undefined) {
		return <></>
	}
	if (size.width! > 990) {
		return (
			<div className="w-full flex justify-center">
				<div className="w-full h-16 max-w-[1800px] flex justify-around items-center">
					<div className="flex justify-around w-96 text-xl">
						<HeaderLink link="/about" currentPage={currentPage}>
							About
						</HeaderLink>
						<HeaderLink link="/experience" currentPage={currentPage}>
							Experience
						</HeaderLink>
					</div>
					<div className="font-KodeMono text-2xl font-bold ">
						<a className="no-underline hover:bg-transparent" href="/">
							Adam Barr (.io)
						</a>
					</div>
					<div className="flex justify-around w-96">
						<HeaderLink link="/blog" currentPage={currentPage}>
							Blog
						</HeaderLink>
						<HeaderLink link="/contact" currentPage={currentPage}>
							Contact
						</HeaderLink>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="relative">
				<div className="w-full flex justify-between items-center p-4">
					<div className="font-KodeMono text-2xl font-bold ">
						<a className="no-underline hover:bg-transparent" href="/">
							Adam Barr (.io)
						</a>
					</div>
					<div className="text-4xl hover:cursor-pointer p-2" onClick={() => setShowDropdown(!showDropdown)} >
						{showDropdown ? <IoClose /> : <IoMenuSharp />}
					</div>
				</div>
				<div className={`w-full ${showDropdown ? 'visible' : 'invisible'} absolute bg-white-left z-50`}>
					<MobileHeaderLink title="Home" link="/" currentPage={currentPage} />
					<MobileHeaderLink title="About" link="/about" currentPage={currentPage} />
					<MobileHeaderLink title="Experience" link="/experience" currentPage={currentPage} />
					<MobileHeaderLink title="Blog" link="/blog" currentPage={currentPage} />
					<MobileHeaderLink title="Contact" link="/contact" currentPage={currentPage} />
				</div>
			</div>

		)
	}
}