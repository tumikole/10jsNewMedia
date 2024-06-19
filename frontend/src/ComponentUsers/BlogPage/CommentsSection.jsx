import React, { useState } from 'react';

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    // Add new comment to the comments state (you would typically send this to your backend)
    setComments((prevComments) => [...prevComments, newComment]);
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button onClick={handleAddComment} className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Comment
      </button>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded mb-2">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;