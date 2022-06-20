import React, { useEffect, useRef, useState } from 'react';
import {
  VideoCameraIcon,
  PhotographIcon,
  EmojiHappyIcon,
} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { Facebook, FacebookBody } from '../../../../utils/typing';
import { fetchPostApi } from '../../../../utils/FetchApi/FetchPosts';
import toast from 'react-hot-toast';
interface Props {
  setPosts: React.Dispatch<React.SetStateAction<Facebook[]>>;
}

const PostForm = ({ setPosts }: Props) => {
  const [showUrlBox, setShowUrlBox] = useState(false);
  const postRef = useRef<HTMLInputElement>(null);

  const [textPost, setTextPost] = useState<string>('');
  const [imgUrl, setImageUrl] = useState<string>('');
  useEffect(() => {
    postRef.current?.focus();
  }, []);
  const { data: session } = useSession();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    if (!textPost && !imgUrl) return;
    const posted = toast.loading('Posting ...');
    const postInfo: FacebookBody = {
      post: textPost,
      username: session?.user?.name || 'Unknown User',
      profileImage: session?.user?.image || 'https://links.papareact.com/gll',
      postImage: imgUrl,
    };
    const result = await fetch(`/api/addPost`, {
      body: JSON.stringify(postInfo),
      method: 'POST',
    });
    const json = await result.json();

    const newPosts = await fetchPostApi();

    setPosts(newPosts);
    toast.success('Posted!', {
      id: posted,
    });
    setTextPost('');
    setImageUrl('');
    setShowUrlBox(false);
    return json;
  };
  return (
    <div className="bg-gray-2 mt-6 rounded-lg p-3">
      <form>
        <div className="flex items-center space-x-2 pb-2">
          <div className="flex items-center flex-grow space-x-2">
            <img
              src={session?.user?.image || 'https://links.papareact.com/gll'}
              alt={session?.user?.name || 'Unknown User'}
              className="w-10 h-10 rounded-full object-cover "
            />
            <input
              ref={postRef}
              value={textPost}
              onChange={(e) => setTextPost(e.target.value)}
              type="text"
              placeholder="What's on your mind, Kichirou?"
              className="bg-gray-1 w-full py-2 px-3 outline-none rounded-full text-primary"
            />
          </div>
          <button
            className="px-4 py-1 text-primary font-semibold rounded-full bg-facebook"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
        {imgUrl && (
          <div>
            <img
              src={imgUrl}
              alt="..."
              className="h-32 w-full object-contain"
            />
          </div>
        )}

        {showUrlBox && (
          <div className="flex items-center space-x-2 pb-3">
            <input
              value={imgUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              placeholder="Enter Image URL..."
              className="bg-gray-1 w-full py-2 px-3 outline-none rounded-full text-primary"
            />
          </div>
        )}
      </form>
      <div className="flex items-center justify-around pt-3 border-t border-gray-500">
        <div className="cursor-pointer flex items-center space-x-2">
          <VideoCameraIcon className="w-7 h-7 text-red-500" />
          <span className="font-semibold text-primary lg:text-md text-sm">
            Live video
          </span>
        </div>
        <div
          className="cursor-pointer flex items-center space-x-2"
          onClick={() => setShowUrlBox((prev) => !prev)}
        >
          <PhotographIcon className="w-7 h-7 text-green-500" />
          <span className="font-semibold text-primary lg:text-md text-sm">
            Photo/video
          </span>
        </div>
        <div className="cursor-pointer flex items-center space-x-2">
          <EmojiHappyIcon className="w-7 h-7 text-yellow-500" />
          <span className="font-semibold text-primary  lg:text-md text-sm">
            Feeling/Activity
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
