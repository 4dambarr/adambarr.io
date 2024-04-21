import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
	title?: string,
	date?: string,
	slug?: string,
	contentHtml?: { __html: string | TrustedHTML; }
	image?: string,
	imageDescription?: string
}

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData : PostData[] = fileNames.map(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			...matterResult.data
		};
	});

	return allPostsData.sort((a, b) => {
		const dateA = Date.parse(a.date || '2000');
		const dateB = Date.parse(b.date || '2000')

		if (dateA < dateB) {
			return 1;
		} else if (dateA > dateB) {
			return -1;
		} else {
			return 0;
		}
	});
}

export async function getPostData(slug: string): Promise<PostData> {
	const fileNames = fs.readdirSync(postsDirectory);
	const fileMatter = fileNames.map(fileName => {
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const matterResult = matter(fileContents);

		if (matterResult.data.slug === slug) {
			return matterResult
		} 
	}).filter(x => x != null)[0];

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(fileMatter?.content);
	const contentHtml = processedContent.toString();

	
	return {
		contentHtml: {
			__html: contentHtml
		},
		...fileMatter?.data
	};
}
