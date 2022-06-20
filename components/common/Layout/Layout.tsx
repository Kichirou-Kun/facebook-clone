import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Facebook' : 'Facebook'}</title>
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>
      <Toaster/>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className='bg-gray-4'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
