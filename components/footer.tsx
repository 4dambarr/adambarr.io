
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return <div className="w-full h-12 mt-2 flex justify-center">
		<div className="w-[90vw] max-w-[1400px] h-12 flex justify-between items-center absolute bottom-0">
			<div>
				Made by me, Adam Barr
			</div>
			<a className="hover:bg-transparent text-2xl" href="https://www.linkedin.com/in/barr-adam/">
				<FaLinkedin />
			</a>
		</div>
	</div>
}