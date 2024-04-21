import IndexBlogCard from "@/components/indexBlogCard";
import { useWindowSize } from "@/lib/mediaQuerys";
import { PostData, getSortedPostsData } from "@/lib/post";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const descriptions = [
  "I am a Software Engineer.",
  1000,
  "I am a Volleyball Player.",
  1000,
  "I am a Master of Engineering.",
  1000,
  "I am a Runner.",
  1000,
  "I am a Stoke City Fan.",
  1000,
  "I am a Certified Sailor.",
  1000,
  "I am a AI Geek.",
  1000,
  "I am glad you are here.",
  1000,
  "Feel free to contact me!",
  1200
]

interface Props  {
  posts : PostData[]
}

export default function Home({posts} : Props) {
  const [typingFontSize, setTypingFontSize] = useState('3.5em');
  const size = useWindowSize();

  useEffect(() => {
    if (size.width! > 700) {
      setTypingFontSize('3.5em');
    } else {
      setTypingFontSize('1em');
    }
    console.log(typingFontSize);
  }, [size]);

  return (
    <main className="w-full flex flex-col items-center pt-8">
      <div className={`w-[80vw] max-w-[1000px] h-[420px] md:h-[600px] lg:h-[450px] text-clip overflow-hidden `}>
        <h1 className="text-4xl md:text-6xl mt-4 mb-12">Hi! 👋 </h1>
        <h1 className="text-4xl md:text-6xl my-12 line leading-[1.75em] md:leading-[2em]">My name is Adam Barr.</h1>
        <TypeAnimation
          sequence={descriptions}
          wrapper="span"
          speed={50}
          style={{ }}
          repeat={Infinity}
          className="text-4xl md:text-6xl"
        />
      </div>
      <div className="flex justify-center w-full">
        <div className={`flex justify-around items-center w-[80vw] max-w-[1000px] flex-col lg:flex-row`}>
          {
            posts.map((post) => (
              <IndexBlogCard title={post.title} slug={post.slug} image={post.image}/>
            ))
          }
        </div>
      </div>
    </main>
  );
}


export const getStaticProps = async () => {
  const posts = await getSortedPostsData().slice(0,3);

  return { props: { posts }}
}
