import React, { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/solid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Stories from '../Stories/Stories';
import PostForm from './PostForm/PostForm';
import { rooms } from '../../../utils/data';
import Post from '../Post/Post';
import { Props } from '../../../pages';
import { Facebook } from '../../../utils/typing';

const MainFeed = ({ posts: postsProps }: Props) => {
  const [posts, setPosts] = useState<Facebook[]>(postsProps);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
  };
  return (
    <div className="xl:col-span-6 lg:col-span-7 md:col-span-7 col-span-12 max-h-screen overflow-scroll scrollbar-hide">
      <div className="story_slider">
        <Stories />
      </div>

      {/* Post Form */}
      <PostForm setPosts={setPosts} />

      {/* Create Room */}
      <div className="grid-cols-12 hidden lg:grid bg-gray-2 p-2 my-4 rounded-lg slider">
        <div className="md:col-span-4 flex  items-center">
          <div className="flex items-center border max-w-fit rounded-full py-1 px-4">
            <VideoCameraIcon className="w-8 h-8 text-blue-400 hidden lg:inline-block" />
            <span className="font-semibold text-facebook ">Create room</span>
          </div>
        </div>
        <div className="md:col-span-8 flex-grow">
          <Slider {...settings}>
            {rooms.map((room) => (
              <div key={room.id}>
                <img
                  src={room.url}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Facebook Post */}
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MainFeed;
