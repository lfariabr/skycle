'use client';

import { useState } from 'react';
import ModelViewer from '@/components/ModelViewer';
import VersionSwitcher from '@/components/VersionSwitcher';
import UpvoteButton from '@/components/UpvoteButton';
import CommentSection from '@/components/CommentSection';

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState('v1');

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Skycle
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            The Future of Personal Transportation: Electric Skate-Bike Hybrid
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Revolutionary Design
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Skycle combines the agility of an electric skateboard with the stability 
                and control of a bicycle. Our innovative prototypes push the boundaries 
                of personal electric mobility.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Electric-powered for eco-friendly transportation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compact design for urban commuting</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Innovative hybrid control system</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lightweight and portable</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Project Highlights
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Top Speed</div>
                  <div className="text-2xl font-bold text-blue-600">25 mph</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Range</div>
                  <div className="text-2xl font-bold text-blue-600">15 miles</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Weight</div>
                  <div className="text-2xl font-bold text-blue-600">18 lbs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Viewer Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Explore Our Prototypes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Interact with our 3D models and see the evolution of the Skycle design
            </p>
          </div>

          <div className="space-y-8">
            {/* Version Switcher */}
            <VersionSwitcher 
              currentVersion={selectedVersion} 
              onVersionChange={setSelectedVersion}
            />

            {/* 3D Model Viewer */}
            <div>
              <ModelViewer version={selectedVersion} />
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                Drag to rotate • Scroll to zoom • Right-click to pan
              </div>
            </div>

            {/* Upvote Section */}
            <div className="flex items-center justify-center gap-4 py-4">
              <UpvoteButton version={selectedVersion} initialVotes={42} />
              <span className="text-gray-600 dark:text-gray-400">
                Show your support for this prototype!
              </span>
            </div>

            {/* Comments Section */}
            <CommentSection version={selectedVersion} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-gray-400">
            &copy; 2024 Skycle. All rights reserved. | Prototype viewer powered by React Three Fiber
          </p>
        </div>
      </footer>
    </main>
  );
}
