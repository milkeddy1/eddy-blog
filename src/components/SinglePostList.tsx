import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ThumbsUp } from "@/assets/svgs";
import { useColorMode } from "@/store";
import useLocalStorage from "@/hook/useLocalStorage";

type Data = {
  id: string,
  content: string,
  slug: string,
  data: {
    date: String;
    time: String;
    title: String;
    content: String;
  }
};

type Props = {
  data: Data;
};

export default function SinglePostList({ data }: Props) {
  const { id, content, data: detail, slug } = data

  const { date, title } = detail;
  const { mode } = useColorMode();
  const isDarkColor = mode === "dark";
  const [thumbsUp, setThumbsUp] = useLocalStorage(`post${id}_liked_eddy_blog`);
  const [mdxContent, setMdxContent] = useState({})

  useEffect(() => {
    serialize(content, {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development'
      }
    }).then(res => setMdxContent(res))
  }, [content])

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <Link
          href={`/posts/${slug}`}
          className={`${isDarkColor
            ? "text-white hover:bg-gray-500"
            : "text-black hover:bg-gray-400"
            } m-4 p-8  rounded-3xl grow`}
        >
          {/* title and time */}
          <div className="block md:flex items-end justify-between w-full md:w-[80%]">
            <h2 className="mr-12 text-3xl md:text-3xl">{title}</h2>
            <div
              className={`${isDarkColor ? "text-[#ADADAD]" : "text-[#7B7B7B]"
                } flex gap-2`}
            >
              <p>{date}</p>
            </div>
          </div>
          <hr className="w-[80%]" />
          {/* content */}
          <div className={`${isDarkColor ? 'prose-dark' : 'prose-light'} mt-5 items-center prose line-clamp-3`}>
            {Object.keys(mdxContent).length && <MDXRemote compiledSource={""} scope={undefined} frontmatter={undefined} {...mdxContent} />}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => {
            if (thumbsUp === "true") {
              setThumbsUp("false");
              return;
            }
            setThumbsUp("true");
          }}
        >
          <ThumbsUp
            className={clsx(
              "w-6 h-6 cursor-pointer active:scale-125 ease-linear duration-150 fill-none",
              {
                "hover:fill-white text-white": isDarkColor,
                "hover:fill-black text-black": !isDarkColor,
                "fill-white": thumbsUp?.toString() === "true" && isDarkColor,
                "fill-[#000000]":
                  thumbsUp?.toString() === "true" && !isDarkColor,
              }
            )}
          />
        </button>
      </div >
    </>
  );
}
