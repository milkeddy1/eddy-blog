import { ThumbsUp } from "@/assets/svgs";
import { useColorMode } from "@/store";
import useLocalStorage from "@/hook/useLocalStorage";
import clsx from "clsx";
import Link from "next/link";

type Data = {
  id: Number;
  date: String;
  time: String;
  title: String;
  content: String;
};

type Props = {
  data: Data;
};

export default function SinglePostList({ data }: Props) {
  const { id, date, time, title, content } = data;
  const { mode } = useColorMode();
  const isDarkColor = mode === "dark";
  const [thumbsUp, setThumbsUp] = useLocalStorage(`post${id}_liked_eddy_blog`);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <Link
          href={`/posts/${id}`}
          className={`${
            isDarkColor
              ? "text-white hover:bg-gray-700"
              : "text-black hover:bg-gray-400"
          } m-4 p-8 hover:bg-gray-700 rounded-3xl`}
        >
          {/* title and time */}
          <div className="block md:flex items-end w-full md:w-[80%] lg:w-[60%]">
            <h2 className="mr-12 text-3xl md:text-5xl">{title}</h2>
            <div
              className={`${
                isDarkColor ? "text-[#ADADAD]" : "text-[#7B7B7B]"
              } flex gap-2`}
            >
              <p>{date}</p>
              <p>{time}</p>
            </div>
          </div>
          <hr className="w-[80%]" />
          {/* content */}
          <div className="mt-5 flex items-center">
            <p className="">{content}</p>
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
      </div>
    </>
  );
}
