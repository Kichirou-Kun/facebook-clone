import { useSession } from 'next-auth/react';
import { Comment } from '../../../utils/typing';

type Props = {
  comment: Comment;
};

const Comments = ({ comment, }: Props) => {
  const { data: session } = useSession();
  return (
    <div className="flex space-x-2 my-1">
      <img
        src={comment.profileImage || 'https://links.papareact.com/gll'}
        alt={comment.username || 'Unknown User'}
        className="w-10 h-10 rounded-full object-contain"
      />
      <div className="bg-gray-1 px-3 py-1 rounded-lg">
        <h1 className="text-primary">{comment.username || 'Unknown User'}</h1>
        <p className="text-gray-3">{comment?.comment}</p>
      </div>
    </div>
  );
};

export default Comments;
