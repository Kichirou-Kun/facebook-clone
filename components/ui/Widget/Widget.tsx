import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import React from 'react';
import { stories } from '../../../utils/data';

const Widget = () => {
  return (
    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-5 hidden md:inline-block">
      <div className="flex justify-between mb-4 items-center text-gray-3">
        <h1 className="font-semibold text-lg">Contacts</h1>
        <div className="flex items-center space-x-2">
          <VideoCameraIcon className="w-6 h-6" />
          <SearchIcon className="w-6 h-6" />
          <DotsHorizontalIcon className="w-6 h-6" />
        </div>
      </div>
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex items-center text-gray-3 font-semibold space-x-4 py-2 cursor-pointer hover:bg-gray-1 my-1 rounded-lg px-2 "
        >
          <img src={story.url} className="w-8 h-8 rounded-full object-cover" />
          <h1>{story.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Widget;
