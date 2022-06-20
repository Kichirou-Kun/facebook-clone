import React from 'react';
import {
  UserIcon,
  HeartIcon,
  BookmarkIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ClockIcon,
  GlobeAltIcon,
  FlagIcon,
  SparklesIcon,
  ChevronDownIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/solid';
import SidebarRow from './SidebarRow';
import { signIn, signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="xl:col-span-3 lg:col-span-2 md:col-span-2  hidden md:block">
      <div className="flex flex-col">
        <div className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full cursor-pointer transition-all duration-200 lg:hover:bg-gray-1 group">
          <img
            src={session?.user?.image || 'https://links.papareact.com/gll'}
            alt={session?.user?.name || 'Unknown user'}
            className="h-8 w-8 rounded-full object-cover"
          />
          <p className=" hidden lg:inline-block text-gray-3 font-semibold xl:text-lg">
            {session?.user?.name}
          </p>
        </div>
        <SidebarRow Icon={UserIcon} name="Friends" />
        <SidebarRow Icon={BookmarkIcon} name="Saved" />
        <SidebarRow Icon={HeartIcon} name="Fundraisers" />
        <SidebarRow Icon={GlobeAltIcon} name="Community Help" />
        <SidebarRow Icon={UserGroupIcon} name="Groups" />
        <SidebarRow Icon={VideoCameraIcon} name="Watch" />
        <SidebarRow Icon={ClockIcon} name="Memories" />
        <SidebarRow Icon={FlagIcon} name="Pages" />
        <SidebarRow Icon={SparklesIcon} name="Events" />
        <SidebarRow
          onClick={session ? signOut : signIn}
          Icon={session ? LockOpenIcon : LockClosedIcon}
          name={`${session ? 'Sign out' : 'Sign In'}`}
        />
        <SidebarRow Icon={ChevronDownIcon} name="See more" />
      </div>
    </div>
  );
};

export default Sidebar;
