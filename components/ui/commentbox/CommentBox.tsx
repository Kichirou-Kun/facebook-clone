import { useSession } from 'next-auth/react';
import React, {
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { Comment, Facebook } from '../../../utils/typing';

type Props = {
  post: Facebook;
  setShowComment: React.Dispatch<React.SetStateAction<boolean>>;
  refreshComments: () => void;
};
const CommentBox = ({ post, setShowComment, refreshComments }: Props) => {
  const { data: session } = useSession();
  const [input, setComment] = useState('');
  const commentFocusRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    commentFocusRef.current?.focus();
  }, [setShowComment]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const commentToast = toast.loading('Posting Comment...');
    const commentInfo = {
      comment: input,
      postId: post._id,
      username: session?.user?.name || 'Unknown User',
      profileImage: session?.user?.image || 'https://links.papareact.com/gll',
    };

    const result = await fetch(`/api/addComment`, {
      method: 'POST',
      body: JSON.stringify(commentInfo),
    });
    refreshComments();
    toast.success('Comment Posted', {
      id: commentToast,
    });
    setComment('');
    setShowComment(false);
  };
  return (
    <div className="relative py-3 border-t border-gray-1">
      <form onSubmit={submitHandler} className="flex space-x-2">
        <div className="flex items-center space-x-2 flex-grow">
          <img
            src={session?.user?.image || 'https://links.papareact.com/gll'}
            alt={session?.user?.name || 'Unknown User'}
            className="w-10 rounded-full h-10"
          />
          <input
            ref={commentFocusRef}
            value={input}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Write a comment..."
            className="bg-gray-1 rounded-full p-2 flex-grow outline-none text-gray-3"
          />
        </div>
        <button
          className="bg-facebook text-primary px-4 py-1 rounded-full"
          type="submit"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
