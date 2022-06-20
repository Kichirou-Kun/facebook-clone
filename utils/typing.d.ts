export interface Facebook extends FacebookBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  _rev: string;
  blockPost: boolean;
}

export interface FacebookBody {
  post: string;
  username: string;
  profileImage: string;
  postImage: string;
}

export interface Comment extends CommentBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  _rev: string;
  facebook: {
    _ref: string;
    _type: 'reference';
  };
}

export interface CommentBody {
  comment: string;
  postId: string;
  username: string;
  profileImage: string;
}
