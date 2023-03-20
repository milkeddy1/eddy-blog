import * as React from 'react';
import NavBar from './NavBar';


export interface LayoutProps {
  children: JSX.Element
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <NavBar />
      <div className='bg-gray-800 '>
        {props.children}
      </div>
    </div>
  );
}
