import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/containers";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { MDXProvider } from "@mdx-js/react";

export interface IAppProps {}

export default function SinglePost(props: IAppProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="min-h-[100vh]  w-full md:w-[90%] m-auto text-white p-10">
        <Link href="/posts" className="px-5 py-3 bg-slate-400 rounded-xl">
          Back
        </Link>
        <br />
        <br />
        <br />
        <div className="flex flex-col md:flex-row w-[50%] md:items-end justify-between">
          <h1 className="text-5xl">Title</h1>
          <br />
          <p>2023/04/01 17:35</p>
        </div>
        <br />
        <br />
        <div className="prose">{/* <Markdown>{mdd}</Markdown> */}</div>
      </div>
    </Layout>
  );
}
