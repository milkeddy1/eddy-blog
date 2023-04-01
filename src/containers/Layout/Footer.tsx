import * as React from "react";
import Link from "next/link";
import { Instagram, Facebook, Github } from "@/assets/svgs";
export interface FooterProps {
  colorMode: string;
}

export default function App(props: FooterProps) {
  const { colorMode } = props;
  const isDarkMode = colorMode === "dark";
  return (
    <div className="border-t border-slate-600 py-8">
      <div className="flex justify-center gap-4 mb-8">
        <Link
          href="https://www.youtube.com/watch?v=22URjH7HTpM"
          target="_blank"
          className="text-white"
        >
          <Instagram
            className={`${
              isDarkMode
                ? "fill-white hover:fill-slate-400"
                : "fill-black hover:fill-slate-600"
            } w-[32px] h-[32px] hover:scale-125 ease-in duration-100`}
          />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=22URjH7HTpM"
          className="text-white"
          target="_blank"
        >
          <Facebook
            className={`${
              isDarkMode
                ? "fill-white hover:fill-slate-400"
                : "fill-black hover:fill-slate-600"
            } w-[32px] h-[32px] hover:scale-125 ease-in duration-100`}
          />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=22URjH7HTpM"
          className="text-white"
          target="_blank"
        >
          <Github
            className={`${
              isDarkMode
                ? "fill-white hover:fill-slate-400"
                : "fill-black hover:fill-slate-600"
            } w-[32px] h-[32px] hover:scale-125 ease-in duration-100`}
          />
        </Link>
      </div>
      <p className={`text-center ${isDarkMode ? "text-white" : "text-black"}`}>
        Copyright © 2023 Eddy Liao All rights reserved.
      </p>
    </div>
  );
}
