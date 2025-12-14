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
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-emerald-400"
          rows={3}
        />
        <button
          type="submit"
          disabled={!newComment.trim() || isSubmitting}
          className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/25 transition-all duration-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/30 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none dark:disabled:bg-gray-700"
        >
          {isSubmitting ? (
            <>
              <svg className="h-4 w-4 flex-shrink-0 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Posting...</span>
            </>
          ) : (
            <>
              <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span>Post Comment</span>
            </>
          )}
        </button>
      </form>

      <div className="space-y-4">
        {isLoading ? (
          <div className="text-gray-500 dark:text-gray-400">Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/50 px-6 py-12 text-center text-slate-500 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400">
            <svg className="mx-auto mb-3 h-12 w-12 flex-shrink-0 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="font-medium">No comments yet</p>
            <p className="mt-1 text-sm">Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-bold text-white shadow-sm">
                  {comment.user_id.substring(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    User {comment.user_id.substring(0, 8)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(comment.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-200">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
