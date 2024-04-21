import { PostBase } from "@/lib/constants";
import { PostData, getSortedPostsData } from "@/lib/post"
import Image from "next/image";
import { useEffect } from "react";

interface Props {
	allPosts: PostData[]
}

export default function Blog({ allPosts }: Props) {

	return (
		<div className='w-full flex flex-col items-center mt-5'>
			<div className="w-[85vw] max-w-[1050px] flex flex-col items-center">
				<h1>Blog</h1>
				<p className="italic text-center">
					A place for my thoughts, ideas, and ramblings.
				</p>
				<a className='no-underline hover:bg-transparent group mb-6' href={PostBase + allPosts[0].slug}>
					<div>
						<div className="w-[85vw] h-[400px] absolute z-10 p-6 flex items-end">
							<h1 className="bg-white/80 align-bottom group-hover:bg-white/95">Latest Blog: {allPosts[0].title}</h1>
						</div>
						
						<div className="relative z-0 w-[85vw] h-[400px] absolute float-left">
							<Image
								src={allPosts[0].image || ''}
								alt=""
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				</a>
				<div className="flex flex-col items-start relative w-full">
					{
						allPosts.slice(1).map(post => {
							return <div className="flex flex-start items-center my-6 group">
								<a className="hover:bg-transparent" href={PostBase + post.slug}>
									<div className="relative h-[150px] w-[250px]">
										<Image
											src={post.image || ''}
											alt=""
											layout="fill"
											objectFit="cover"
										/>
									</div>

								</a>
								<div className="flex flex-col justify-center items-start ml-8">
									<a className="no-underline hover:bg-transparent group-hover:underline" href={PostBase + post.slug}>
										<h2 className="lh-2">{post.title}</h2>
									</a>
									<p className="italic">{post.date}</p>
								</div>
							</div>
						})
					}
				</div>

			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	const allPosts = await getSortedPostsData();
	return { props: { allPosts } }
}