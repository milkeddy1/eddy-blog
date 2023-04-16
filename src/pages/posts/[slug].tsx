import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useColorMode } from "@/store";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
type SinglePostData = {
  title: string;
  date: string;
  time: string;
  content: string;
};

type PostsType = {
  id: string;
  content: string;
  slug: string;
  data: SinglePostData;
};

interface PostsProps {
  allPostsData: Array<PostsType>;
}

export default function SinglePost(props: PostsProps) {
  const router = useRouter();
  const { slug } = router.query;
  const [mdxContent, setMdxContent] = useState({});
  const { allPostsData } = props;

  const singlePostData = allPostsData.filter((item) => {
    return item.slug === slug;
  })[0];

  const { content, data: postData } = singlePostData;
  const { title, date } = postData;

  const { mode } = useColorMode();
  const isDarkColor = mode === "dark";

  useEffect(() => {
    serialize(content, {
      mdxOptions: {
        development: process.env.NODE_ENV === "development",
      },
    }).then((res) => setMdxContent(res));
  }, [content]);

  return (
    <div className="min-h-[100vh]  w-full md:w-[90%] m-auto text-white p-10">
      <Link href="/posts" className="px-5 py-3 bg-slate-400 rounded-xl">
        Back
      </Link>
      <br />
      <br />
      <br />
      <div
        className={`${isDarkColor ? "prose-dark" : "prose-light"
          } prose flex flex-col justify-between m-auto`}
      >
        <h1 className="text-5xl">{title}</h1>
        <p>{date}</p>
      </div>
      <br />
      <br />
      <div
        className={`${isDarkColor ? "prose-dark" : "prose-light"
          } mt-5 items-center prose m-auto all-initial`}
      >
        {Object.keys(mdxContent).length && (
          <MDXRemote
            compiledSource={""}
            scope={undefined}
            frontmatter={undefined}
            {...mdxContent}
          />
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const files = fs.readdirSync(path.resolve(process.cwd(), "src/posts"));

  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(path.resolve(process.cwd(), `src/posts/${slug}.md`));

    const { data, content } = matter(fileContents);

    return {
      slug,
      data,
      content,
    };
  });
  return { props: { allPostsData } };
};
