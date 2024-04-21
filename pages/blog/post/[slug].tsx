import { PostBase } from '@/lib/constants';
import { getPostData, getSortedPostsData, PostData } from '@/lib/post'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'
import { IoArrowBack } from "react-icons/io5";

export const getStaticPaths = (async () => {
  const postData = getSortedPostsData();

  return {
    paths: postData.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}) satisfies GetStaticPaths

interface Context {
  params: {
    slug: string
  }
}

export const getStaticProps = (async (context: Context) => {
  const slug = context.params.slug || '';
  const postData = await getPostData(slug);
  const allPosts = await getSortedPostsData();
  const postIndex = allPosts.findIndex(post => post.slug === slug);
  var previousPost = {};
  var nextPost = {};
  if (postIndex != allPosts.length - 1) {
    previousPost = allPosts[postIndex + 1];
  }

  if (postIndex != 0) {
    nextPost = allPosts[postIndex - 1]
  }


  return { props: { postData, previousPost, nextPost } }
})

interface Props {
  postData: PostData,
  previousPost: PostData,
  nextPost: PostData
}


export default function Page({ postData, previousPost, nextPost }: Props) {

  useEffect(() => {
    console.log(postData);
    console.log(postData.title);
    console.log(Object.keys(postData));
  }, [postData])

  return (
    <div className='w-full flex flex-col items-center my-6'>
      <div className="w-[85vw] max-w-[1050px]">
        <Link href='/blog' className='mb-2 md:mb-0 no-underline hover:bg-transparent'>
          <IoArrowBack className='text-xl' />
        </Link>
      </div>
      <div className="w-[80vw] max-w-[1000px]">
        <div className='flex flex-col items-center '>
          <h1 className='font-Lora text-center'>{postData.title}</h1>
          <h3 className=''>{postData.date}</h3>
          {
            postData.image != null ?
              <div className='w-[90vw] h-[90vw] max-h-[300px] md:w-[60vw] md:max-w-[750px] md:h-[400px] md:max-h-[750px] relative m-5'>
                <Image src={postData.image}
                  alt={postData.imageDescription || 'No image description provided'}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              : ''
          }
          <p className='italic w-[95vw] md:w-[80%] text-center'>{postData.imageDescription}</p>
        </div>
        <div dangerouslySetInnerHTML={postData.contentHtml} />
      </div>
      <div className='flex justify-between w-[85vw] max-w-[1050px] text-left'>
        {
          nextPost?.slug != null ?
            <div className='w-[40vw] max-w-[200px]'>
              <p className='font-bold mb-1 text-lg'>Next Post</p>
              <a className='mt-0 font-medium italic' href={PostBase + nextPost.slug}>
                {nextPost?.title}
              </a>
            </div>
            : <div></div>
        }
        {
          previousPost?.slug != null ?
          <div className='w-[40vw] max-w-[400px] text-right'>
            <p className='font-bold mb-1 text-lg'>Previous Post</p>
            <p className='mt-0 font-medium italic line-clamp-4'>
              <a href={PostBase + previousPost.slug}>{previousPost?.title}</a>
            </p>
          </div>
          :  <div></div>
        }

      </div>
    </div>
  );
}