'use client';

import { useState, useEffect } from 'react';
import { addComment, getComments, Comment } from '@/lib/supabase';

interface CommentSectionProps {
  version: string;
}

export default function CommentSection({ version }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadComments();
  }, [version]);

  const loadComments = async () => {
    setIsLoading(true);
    try {
      const loadedComments = await getComments(version);
      setComments(loadedComments);
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Using a demo user ID - in production, this would come from authentication
      const userId = 'demo-user-' + Math.random().toString(36).substring(7);
      const result = await addComment(version, userId, newComment);
      
      if (result.success) {
        // Add comment to local state (in production, this would come from Supabase)
        const demoComment: Comment = {
          id: Math.random().toString(36).substring(7),
          prototype_version: version,
          user_id: userId,
          content: newComment,
          created_at: new Date().toISOString(),
        };
        setComments([demoComment, ...comments]);
        setNewComment('');
      }
    } catch (error) {
      console.error('Failed to add comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
        Comments
      </h3>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts on this prototype..."
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          rows={3}
        />
        <button
          type="submit"
          disabled={!newComment.trim() || isSubmitting}
          className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      <div className="space-y-4">
        {isLoading ? (
          <div className="text-gray-500 dark:text-gray-400">Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {comment.user_id.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    User {comment.user_id.substring(0, 8)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
