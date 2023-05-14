import * as React from 'react';
import { useColorMode } from '@/store';
import clsx from 'clsx';
import NavBar from './NavBar';
import Footer from './Footer'

export interface LayoutProps {
  children: React.ReactNode,
  pageLoading: Boolean
}

export default function Layout(props: LayoutProps) {
  const { children, pageLoading } = props
  const { mode: colorMode }: { mode: string } = useColorMode()
  const isDarkColor = colorMode === 'dark'

  return (
    <div className={`${clsx(
      'min-h-[100vh]',
      {
        'bg-gray-800': isDarkColor,
        'bg-white': !isDarkColor,
        'h-[50vh] overflow-hidden': pageLoading,
      },
    )} relative`}
    >
      {pageLoading && <div className=" fixed z-10 h-[100vh] w-[100vw] bg-gray-400 opacity-60" />}
      <div className="mx-auto max-w-5xl overflow-hidden">
        <NavBar />
        <div>
          {children}
        </div>
        <Footer colorMode={colorMode} />
      </div>
    </div>
  );
}
