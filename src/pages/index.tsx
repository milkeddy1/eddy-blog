import { useColorMode } from '@/store';
import profile from '@/assets/profile.jpg';
import Image from 'next/image';

export default function Home() {
  const { mode } = useColorMode();
  const isDarkMode = mode === 'dark';

  return (
    <div className="grid-flow-dense- m-10 grid grid-cols-1 md:m-20 md:grid-flow-row lg:grid-cols-2">
      <div className="order-2">
        <Image
          src={profile}
          alt="Eddy"
          className="rounded-2xl duration-200 ease-linear md:m-auto md:max-w-[70%] md:hover:scale-105 lg:ml-4 lg:max-w-full"
        />
      </div>
      <div
        className={`${
          isDarkMode ? 'text-white' : 'text-black'
        } m-auto mb-8 w-[70vw]`}
      >
        <h1 className="text-6xl  font-bold">
          Hi,
          <br className="md:hidden" />
          {' '}
          I am Eddy.
        </h1>
        <br />
        <div className="">
          <h2>I am a Junior Frontend Developer</h2>
          <br />
          <h2>這個網站主要是紀錄所有我想要寫的文章，</h2>
          <h2>將學到的知識用自己的方式寫出來，</h2>
          <h2>把平常的一些想法寫下來，不局限於軟體技術。</h2>
        </div>
      </div>
    </div>
  );
}
