import React from 'react';

import {
  SearchIcon,
  HomeIcon,
  UserIcon,
  VideoCameraIcon,
  UserGroupIcon,
  FilmIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  PlusIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import MainFeedIcons from '../../ui/MainFeedIcons/MainFeedIcons';
import WidgetIcons from '../../ui/WidgetIcons/WidgetIcons';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-gray-2 border-b border-gray-600">
      <div className="p-2 md:px-5 max-w-7xl mx-auto grid grid-cols-12">
        <div className="xl:col-span-3 lg:col-span-2 md:col-span-2 col-span-6 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img src="https://links.papareact.com/5me" className="w-10 h-10" />
            <div className="bg-gray-1 flex items-center p-2 rounded-full">
              <SearchIcon className="w-5 h-5 text-gray-3 " />
              <input
                type="text"
                placeholder="Search Facebook"
                className="outline-none bg-transparent placeholder: text-gray-3 placeholder:font-semibold hidden xl:inline-flex ml-2"
              />
            </div>
          </div>
          <MenuIcon className="h-8 w-8 cursor-pointer text-gray-3 md:hidden" />
        </div>
        <div className="xl:col-span-6 lg:col-span-7 md:col-span-7 col-span-1 hidden md:flex justify-around items-center ">
          <MainFeedIcons Icon={HomeIcon} active />
          <MainFeedIcons Icon={UserIcon} />
          <MainFeedIcons Icon={VideoCameraIcon} />
          <MainFeedIcons Icon={UserGroupIcon} />
          <MainFeedIcons Icon={FilmIcon} />
        </div>
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-5 space-x-3 flex items-center justify-end">
          <div className="items-center space-x-2 text-primary font-semibold hidden xl:flex">
            <img
              src={session?.user?.image || 'https://links.papareact.com/gll'}
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm">{session?.user?.name}</span>
          </div>
          <div className="flex space-x-3 items-center">
            <WidgetIcons Icon={PlusIcon} />
            <WidgetIcons Icon={ChatIcon} />
            <WidgetIcons Icon={BellIcon} />
            <WidgetIcons Icon={ChevronDownIcon} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
