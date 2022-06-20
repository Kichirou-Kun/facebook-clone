import React, { useEffect, useState } from 'react';
import {
  GlobeAltIcon,
  ThumbUpIcon,
  ChatAlt2Icon,
  ChatIcon,
} from '@heroicons/react/solid';
import CommentBox from '../commentbox/CommentBox';
import Comments from '../comments/Comments';
import Timeago from 'react-timeago';
import { Comment, Facebook } from '../../../utils/typing';
import { fetchCommentApi } from '../../../utils/FetchApi/FetchComments';

interface Props {
  post: Facebook;
}

const Post = ({ post }: Props) => {
  const [showComment, setShowComment] = useState(false);

  const [comments, setComments] = useState<Comment[]>([]);
  const refreshComments = async () => {
    const comments: Comment[] = await fetchCommentApi(post._id);
    setComments(comments);
  };
  useEffect(() => {
    refreshComments();
  }, []);

  return (
    <div className="bg-gray-2 rounded-lg mt-3">
      <div className="py-3">
        <div className="flex items-center space-x-2 px-3">
          <img
            src={post?.profileImage}
            className="w-10 h-10 rounded-full object-contain"
          />
          <div>
            <h1 className="font-semibold text-primary">{post?.username}</h1>
            <div className="flex items-center space-x-2 mt-1 text-gray-3 ">
              <Timeago date={post?._createdAt} />
              <GlobeAltIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <h1 className="text-primary px-3 pt-1 pb-2 leading-8">{post?.post}</h1>
        {post?.postImage && (
          <div>
            <img
              src={post?.postImage}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        <div className="px-3 pt-2 ">
          <div className="flex py-2 justify-between text-gray-3">
            <span></span>
            <span>
              {comments.length > 0 && comments.length}{' '}
              {comments.length > 0 && 'Comments'}
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2 border-t py-2 border-gray-1 text-gray-3 text-center">
            <div className="col-span-4 hover:bg-gray-1 rounded-lg py-2 cursor-pointer flex justify-center items-center space-x-2">
              <ThumbUpIcon className="w-6 h-6" />
              <span>Like</span>
            </div>
            <div
              className="col-span-4 hover:bg-gray-1 rounded-lg py-2 cursor-pointer flex justify-center items-center space-x-2"
              onClick={() => setShowComment((prev) => !prev)}
            >
              <ChatAlt2Icon className="w-6 h-6" />
              <span>Comment</span>
            </div>
            <div className="col-span-4 hover:bg-gray-1 rounded-lg py-2 cursor-pointer flex justify-center items-center space-x-2">
              <ChatIcon className="w-6 h-6" />
              <span>Share</span>
            </div>
          </div>

          {/* Comments */}
          {showComment && (
            <CommentBox
              post={post}
              setShowComment={setShowComment}
              refreshComments={refreshComments}
            />
          )}
        </div>
        <div className="overflow-y-scroll max-h-60 scrollbar-hide px-3">
          {comments.length > 0 &&
            comments.map((comment) => (
              <Comments key={comment._id} comment={comment} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
