import * as React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer"
import { useColorMode } from '@/store';
import clsx from 'clsx';
export interface LayoutProps {
  children: JSX.Element,
  pageLoading: Boolean
}

export default function Layout(props: LayoutProps) {
  const { children, pageLoading } = props
  const { mode: colorMode }: { mode: string } = useColorMode()
  const isDarkColor = colorMode === 'dark'
  return (
    <div className={clsx(
      "min-h-[100vh]",
      {
        'bg-gray-800': isDarkColor,
        'bg-white': !isDarkColor,
        'opacity-40': pageLoading
      }
    )}>
      <div className='max-w-5xl mx-auto'>
        <NavBar />
        <div>
          {children}
        </div>
        <Footer colorMode={colorMode} />
      </div>
    </div>
  );
}
