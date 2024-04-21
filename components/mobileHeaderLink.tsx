interface Props {
	link: string,
	title: string,
	currentPage: string
}


export default function MobileHeaderLink({ title, link, currentPage }: Props) {
	if (link.split('/')[1] == currentPage) {
		return (
			<a href={link} className="no-underline text-xl">
			<div className="flex border-2 bg-secondary border-black h-16 w-full hover:bg-secondary justify-center items-center mb-[-1px]">
				{title}
			</div>
		</a>
		)
	}

	return (
		<a href={link} className="no-underline text-xl">
			<div className="flex border-2 bg-white border-black h-16 w-full hover:bg-secondary justify-center items-center mb-[-1px]">
				{title}
			</div>
		</a>
	)
}
