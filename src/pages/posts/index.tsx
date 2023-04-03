import fs from "fs";
import matter from "gray-matter";
import { v4 as uuidv4 } from "uuid";
import { SinglePostList } from "@/components";

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

export default function Posts(props: PostsProps) {
  const { allPostsData } = props;
  const postData = allPostsData.map((item) => {
    return {
      ...item,
      id: uuidv4(),
    };
  });

  return (
    <div className="w-full md:w-[80%] m-auto flex flex-col-reverse">
      {postData.map((item) => {
        return <SinglePostList key={item.id} data={item} />;
      })}
    </div>
  );
}

export const getServerSideProps = async () => {
  const files = fs.readdirSync("src/posts");
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(`src/posts/${slug}.mdx`, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      data,
      content,
    };
  });
  return { props: { allPostsData } };
};
