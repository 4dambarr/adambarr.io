import Image from "next/image";
import { useEffect, useState } from "react"

const books = [
	{
		name: "Human Kind",
		image: "humankind.jpg"
	},
	{
		name: "Superforecasting",
		image: "superforecasting.jpg"
	},
	{
		name: "Hitman Anders and the Meaning of it All",
		image: "hitmananders.jpg"
	},
	{
		name: "Perform Under Pressure",
		image: "performunderpressure.jpg"
	},
	{
		name: "Good Reasons for Bad Feelings",
		image: "goodreasonsforbadfeelings.jpg"
	},
	{
		name: "Big Beacon - Alan Partridge",
		image: "bigbeacon.jpg"
	},
	{
		name: "A Song of Ice and Fire",
		image: "got.jpg"
	},
	{
		name: "The Outsider",
		image: "theoutsider.jpg"
	},
	{
		name: "Non Violent Communication",
		image: "nvc.jpg"
	}
]

export function BookCarousel() {
	const [bookList, setBookList] = useState(books);
	const [focus, setFocus] = useState(Math.round(books.length / 2)-1);

	const scroll = () => {
		var tmp = bookList;
		var x = bookList[0];
		tmp = tmp.slice(1);
		tmp.push(x);
		setBookList(tmp);
	}

	useEffect(() => {
		let scroller = setTimeout(scroll, 3000);

		return () => {
			clearTimeout(scroller);
		}
	}, [bookList])

	return (
		<div className="w-[100vw] h-[400px] py-3 flex justify-center items-center overflow-hidden">
			{
				bookList.map((book, index) => {
					if (index == focus) {
						return <div className="flex flex-col items-center px-4">
						<div className="w-[140px] h-[224px] md:w-[200px] md:h-[320px] relative mx-5">
							<Image src={'/bookcovers/' + book.image}
								alt={book.name + ' book cover'}
								layout="fill"
							/>
						</div>
						<p className="mt-5 text-center text-xl font-semibold">{book.name}</p>
					</div>
					} 

					if (index == focus + 1 || index == focus - 1) {
						return <div>
						<div className="w-[100px] h-[160px] md:w-[170px] md:h-[272px] relative mx-5">
							<Image src={'/bookcovers/' + book.image}
								alt={book.name + ' book cover'}
								layout="fill"
							/>
						</div>
						<p className="mt-5 text-center text-l">{book.name}</p>
					</div>
					} 
					
					return <div>
					<div className="w-[100px] h-[160px] md:w-[140px] md:h-[224px] relative mx-5">
						<Image src={'/bookcovers/' + book.image}
							alt={book.name + ' book cover'}
							layout="fill"
						/>
					</div>
					<p className="mt-5 text-center text-m">{book.name}</p>
				</div>

				})
			}
		</div>
	)
}