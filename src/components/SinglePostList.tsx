import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ThumbsUp } from '@/assets/svgs';
import { useColorMode } from '@/store';
import useLocalStorage from '@/hook/useLocalStorage';

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
  const { content, data: detail, slug } = data

  const { date, title } = detail;
  const { mode } = useColorMode();
  const isDarkColor = mode === 'dark';
  const [thumbsUp, setThumbsUp] = useLocalStorage(`post${slug}_liked_eddy_blog`);
  const [mdContent, setMdContent] = useState({})

  useEffect(() => {
    serialize(content, {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
      },
    }).then((res) => setMdContent(res))
  }, [content])
  console.log(isDarkColor, 'isDarkColor');

  return (
    <div className="flex flex-col items-center md:flex-row">
      <Link
        href={`/posts/${slug}`}
        className={`${isDarkColor
          ? 'text-white hover:bg-gray-500'
          : 'text-black hover:bg-gray-400'
        } m-4 grow  rounded-3xl p-8 duration-300 ease-out`}
      >
        {/* title and time */}
        <div className="block w-full items-end justify-between md:flex md:w-[80%]">
          <h2 className="mr-12 text-3xl md:text-3xl">{title}</h2>
          <div
            className={`${isDarkColor ? 'text-[#ADADAD]' : 'text-[#7B7B7B]'
            } flex gap-2`}
          >
            <p>{date}</p>
          </div>
        </div>
        <hr className="w-[80%]" />
        {/* content */}
        <div className={`${isDarkColor ? 'prose-dark' : 'prose-light'} prose mt-5 items-center line-clamp-3`}>
          {Object.keys(mdContent).length && <MDXRemote compiledSource="" scope={undefined} frontmatter={undefined} {...mdContent} />}
        </div>
      </Link>
      <button
        type="button"
        onClick={() => {
          if (thumbsUp === 'true') {
            setThumbsUp('false');
            return;
          }
          setThumbsUp('true');
        }}
      >
        <ThumbsUp
          className={clsx(
            'h-6 w-6 cursor-pointer fill-none duration-150 ease-linear active:scale-125',
            {
              'hover:fill-white text-white': isDarkColor,
              'hover:fill-black text-black': !isDarkColor,
              'fill-[#1f2937]': thumbsUp?.toString() === 'true' && !isDarkColor,
              'fill-white': thumbsUp?.toString() === 'true' && isDarkColor,
            },
          )}
        />
      </button>
    </div>
  );
}
