interface Props {
	children: string,
	link: string,
	currentPage: string
}

export default function HeaderLink({ children, link, currentPage }: Props) {
	if (link.split('/')[1] == currentPage) {
		return (
			<a href={link} className="no-underline relative text-l w-fit block hover:bg-transparent">
				<div className="block absolute bottom-[0px] opacity-75 h-[5px] bg-secondary w-full transition"></div>
				{children}
			</a>
		)
	}

	return (
		<a href={link} className="no-underline hover:bg-transparent relative text-l w-fit block after:block after:content-[''] after:absolute after:bottom-[0px] after:opacity-75 after:h-[5px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
			{children}
		</a>
	)
}