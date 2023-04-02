import * as React from "react";
import { Layout } from "@/containers";
import { SinglePostList } from "@/components";
export interface PostsProps {}

const postData = Array.from(Array(10)).map((_, index) => {
  return {
    id: index + 1,
    date: "2023/04/01",
    time: "14:07",
    title: "這是標題",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ullam laborum tenetur sed labore nihil dolorem nobis esse molestiaeexplicabo est, sint ex. Magni, et eaque! Quo, rerum cupiditate.Amet.",
  };
});
console.log(postData, "postData");

export default function Posts(props: PostsProps) {
  return (
    <Layout>
      <div className="w-full md:w-[80%] m-auto">
        {postData.map((item, index) => {
          return <SinglePostList key={index} data={item} />;
        })}
      </div>
    </Layout>
  );
}
