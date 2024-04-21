import IndexBlogCard from "@/components/indexBlogCard";
import { PostData, getSortedPostsData } from "@/lib/post"

export default function Custom404({title, image, slug} : PostData) {
	return <div className="flex justify-center mt-20">
		<div className="flex flex-col items-center w-[80vw] max-w-[1000px]">
			<h2 className="mb-16 text-4xl">404 - Page Not Found</h2>
			<p>You seem to be a bit lost, this page doesn't exist!</p>
			<p className="mb-10">Why not checkout my latest blog whilst you are here:</p>
			<IndexBlogCard title={title} image={image} slug={slug} />
		</div>
	</div>
}

export const getStaticProps = async () => {
	const allPosts =getSortedPostsData();
	return { props: allPosts[0]};
}