import { PostBase } from "@/lib/constants";
import { PostData } from "@/lib/post";
import Image from "next/image";

export default function IndexBlogCard({ title, image, slug }: PostData) {
	return (
		<a href={PostBase + slug} className="group hover:bg-transparent my-2">
			<div className="flex items-center justify-center relative w-64 h-40 rounded-md border-2 border-black overflow-hidden">
				<div className="w-full h-full absolute z-10 px-1 flex items-end">
					<h2 className="bg-white/80 align-bottom group-hover:bg-white/95 text-lg">{title} </h2>
				</div>

				<div className="relative z-0 w-full h-full absolute float-left">
					<Image
						src={image || ''}
						alt=""
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</a>
	)
}