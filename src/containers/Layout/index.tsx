import * as React from 'react';
import NavBar from './NavBar';
import Footer from "./Footer"
import { useColorMode } from '@/store';
export interface LayoutProps {
  children: JSX.Element
}

export default function Layout(props: LayoutProps) {
  const { mode: colorMode }: { mode: string } = useColorMode()
  return (
    <div className={`${colorMode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className='max-w-5xl mx-auto'>
        <NavBar />
        <div>
          {props.children}
        </div>
        <Footer colorMode={colorMode} />
      </div>
    </div>
  );
}
