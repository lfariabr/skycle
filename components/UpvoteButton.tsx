'use client';

import { useState } from 'react';
import { upvotePrototype } from '@/lib/supabase';

interface UpvoteButtonProps {
  version: string;
  initialVotes?: number;
}

export default function UpvoteButton({ version, initialVotes = 0 }: UpvoteButtonProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpvote = async () => {
    if (hasVoted || isLoading) return;
    
    setIsLoading(true);
    try {
      // Using a demo user ID - in production, this would come from authentication
      const userId = 'demo-user-' + Math.random().toString(36).substring(7);
      const result = await upvotePrototype(version, userId);
      
      if (result.success) {
        setVotes(votes + 1);
        setHasVoted(true);
      }
    } catch (error) {
      console.error('Failed to upvote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpvote}
      disabled={hasVoted || isLoading}
      className={`group relative flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium shadow-sm transition-all duration-200 ${
        hasVoted
          ? 'cursor-not-allowed bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800'
          : isLoading
            ? 'cursor-wait bg-slate-400 text-white'
            : 'bg-emerald-500 text-white shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/30 active:scale-95 active:shadow-sm'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
          hasVoted ? 'scale-110' : 'group-hover:scale-110 group-hover:-translate-y-0.5'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm font-semibold">{isLoading ? 'Voting...' : hasVoted ? 'Voted' : 'Upvote'}</span>
      <span className="ml-0.5 rounded-full bg-white/20 px-2 py-0.5 text-sm font-bold">{votes}</span>
      {hasVoted && (
        <svg
          className="ml-1 h-4 w-4 flex-shrink-0 animate-bounce"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
