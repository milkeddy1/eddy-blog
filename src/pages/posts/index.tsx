import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { v4 as uuidv4 } from 'uuid';
import { SinglePostList } from '@/components';

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
  const postData = allPostsData.map((item) => ({
    ...item,
    id: uuidv4(),
  }));

  return (
    <div className="m-auto  flex w-full flex-col-reverse">
      {postData.map((item) => <SinglePostList key={item.id} data={item} />)}
    </div>
  );
}

export const getServerSideProps = async () => {
  const files = fs.readdirSync(path.resolve(process.cwd(), 'src/posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(path.resolve(process.cwd(), `src/posts/${slug}.md`));
    const { data, content } = matter(fileContents);

    return {
      files,
      slug,
      data,
      content,

    };
  });
  return {
    props: {
      allPostsData,
    },
  };
};
