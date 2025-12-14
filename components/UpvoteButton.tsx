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
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        hasVoted
          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 text-white active:scale-95'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{hasVoted ? 'Voted' : 'Upvote'}</span>
      <span className="ml-1 font-bold">{votes}</span>
    </button>
  );
}
