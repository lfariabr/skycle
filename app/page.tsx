'use client';

import { useState } from 'react';
import CommentSection from '@/components/CommentSection';
import ModelViewer from '@/components/ModelViewer';
import UpvoteButton from '@/components/UpvoteButton';
import VersionSwitcher from '@/components/VersionSwitcher';

const versionNotes: Record<
  string,
  { title: string; badge: string; bullets: string[]; focus: string }
> = {
  v1: {
    title: 'V1 • Base deck',
    badge: 'Carve-first stance',
    bullets: [
      'Lightweight electric drivetrain tuned for city sprinting',
      'Wide deck with skateboard-inspired feel',
      'Early battery module with swappable pack concept',
    ],
    focus: 'Dialing in stability at 20+ mph while keeping weight minimal.',
  },
  v2: {
    title: 'V2 • Control bar',
    badge: 'Handlebar stability',
    bullets: [
      'New handlebar geometry for confident steering and braking',
      'Reinforced trucks and vibration-damped mounting',
      'Refined motor curve for smoother low-speed takeoff',
    ],
    focus: 'Balancing steering precision with a compact footprint for commutes.',
  },
  v3: {
    title: 'V3 • Hybrid ride',
    badge: 'Seat + speed',
    bullets: [
      'Seated riding option for longer routes and hills',
      'Larger wheel set for rough pavement and wet grip',
      'Telemetry logging for motor temps and battery health',
    ],
    focus: 'Endurance testing and comfort for 10–15 mile mixed-terrain rides.',
  },
};

const valueProps = [
  {
    title: 'Centered stability',
    copy: 'Staggered stance and bar geometry keep you upright on cobblestones and tram tracks.',
  },
  {
    title: 'Compact by design',
    copy: 'Slides into apartment nooks and under desks; nothing sticks out to catch on doors.',
  },
  {
    title: 'Service-friendly',
    copy: 'Modular battery and wheel sets mean quick swaps, not weeklong shop visits.',
  },
];

const specSnapshot = [
  { label: 'Top speed', value: '25 mph urban-tuned' },
  { label: 'Range', value: '15 miles projected' },
  { label: 'Weight', value: '18 lbs target' },
  { label: 'Charge', value: '~60 min to 80%' },
  { label: 'Frame', value: 'Alloy core, carbon-ready' },
  { label: 'Terrain', value: 'Pavement, light gravel' },
];

const milestones = [
  {
    phase: 'Now',
    title: 'Rideable alpha loops',
    detail: 'Daily 6% grade commutes + abuse testing on rough pavement.',
    state: 'active',
  },
  {
    phase: 'Q1 2025',
    title: 'Pilot fleet',
    detail: 'Small city pilot with telemetry and rider feedback sessions.',
    state: 'next',
  },
  {
    phase: 'Q3 2025',
    title: 'Urban launch pack',
    detail: 'Preorder batch with quick-swap packs and modular wheel kit.',
    state: 'planned',
  },
];

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState('v2');
  const activeVersion = versionNotes[selectedVersion];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-gray-50">
      {/* Hero - Static brand intro */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[-20%] h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-20%] h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-8 lg:py-14">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span>Prototype program</span>
              <span className="text-emerald-100">Weekly hardware drops</span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              The electric skate-bike built for dense, fast-moving cities.
            </h1>
            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              Lean like a board, steer like a bike. Merging deck agility with handlebar control.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="#lab"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-105 hover:bg-emerald-300"
              >
                Explore prototypes
                <svg className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#community"
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition-all duration-200 hover:bg-white/20"
              >
                Join community
              </a>
            </div>
          </div>

          {/* Quick specs strip */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[{ label: '25 mph', sub: 'top speed' }, { label: '15 mi', sub: 'range' }, { label: '18 lbs', sub: 'weight' }, { label: '60 min', sub: 'to 80%' }].map((s) => (
              <div key={s.label} className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm ring-1 ring-white/10">
                <span className="font-semibold text-white">{s.label}</span>
                <span className="text-slate-400">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Lab - Main interactive section */}
      <section id="lab" className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        {/* Section header */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Prototype Lab</p>
          <h2 className="text-2xl font-semibold md:text-3xl">Pick a version and explore.</h2>
        </div>

        {/* Mobile: stacked layout | Desktop: 3D viewer takes priority */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left panel: Version selector + Active prototype details */}
          <div className="flex flex-col gap-4 lg:w-72 lg:flex-shrink-0">
            {/* Version selector */}
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800">
              <VersionSwitcher currentVersion={selectedVersion} onVersionChange={setSelectedVersion} />
            </div>

            {/* Active prototype details - appears BELOW version selector */}
            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 ring-1 ring-emerald-200 dark:from-emerald-900/20 dark:to-cyan-900/20 dark:ring-emerald-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Selected</span>
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium text-white">{activeVersion.badge}</span>
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{activeVersion.title}</div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{activeVersion.focus}</p>

              <div className="mt-4 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Validating</div>
                <ul className="space-y-1.5">
                  {activeVersion.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right panel: 3D Viewer - priority on all screens */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800">
              <ModelViewer version={selectedVersion} />
            </div>
            {/* Touch hint for mobile, mouse hint for desktop */}
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
              <span className="hidden sm:inline">Drag to rotate • Scroll to zoom • Right-click to pan</span>
              <span className="sm:hidden">Pinch to zoom • Drag to rotate</span>
            </div>
          </div>
        </div>

        {/* Value props row - below the main viewer */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item.title} className="group rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:shadow-md dark:bg-gray-900 dark:ring-gray-800">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="specs" className="bg-white py-14 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Spec snapshot</p>
              <h3 className="text-3xl font-semibold">Purpose-built numbers, not guesses.</h3>
              <p className="text-slate-600 dark:text-slate-300">We tune for nimble urban rides and short, frequent charges.</p>
            </div>
            <a
              href="#community"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Tell us what matters most →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specSnapshot.map((spec) => (
              <div
                key={spec.label}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-emerald-600"
              >
                <div className="text-sm uppercase tracking-wide text-slate-500 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400">{spec.label}</div>
                <div className="mt-2 text-lg font-semibold">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Roadmap</p>
            <h3 className="text-3xl font-semibold">How we are rolling this out.</h3>
            <p className="text-slate-600 dark:text-slate-300">Hardware and ride feel first, then software telemetry.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {milestones.map((item) => (
            <div
              key={item.phase}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
            >
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">{item.phase}</span>
                <span
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-all ${
                    item.state === 'active'
                      ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-100 dark:ring-emerald-800'
                      : item.state === 'next'
                        ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300 dark:bg-amber-900/40 dark:text-amber-100 dark:ring-amber-800'
                        : 'bg-slate-100 text-slate-800 ring-1 ring-slate-300 dark:bg-gray-800 dark:text-slate-200 dark:ring-gray-700'
                  }`}
                >
                  {item.state === 'active' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />}
                  {item.state === 'active' ? 'In progress' : item.state === 'next' ? 'Queued' : 'Planned'}
                </span>
              </div>
              <div className="mt-3 text-lg font-semibold text-slate-900 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">{item.title}</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="community"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black py-14 text-white"
      >
        <div className="absolute left-[-10%] top-[-30%] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-30%] h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-200">Community</p>
              <h3 className="text-3xl font-semibold">Vote, comment, and shape the next ride.</h3>
              <p className="text-slate-200">Your feedback steers geometry tweaks, torque curves, and battery priorities.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 backdrop-blur">
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-50">{activeVersion.title}</span>
              <span className="text-slate-200">Tell us how it rides.</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.5fr,1.5fr]">
            <div className="flex flex-col justify-between gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="text-sm text-slate-200">
                Show support for the current build while we line up the next test fleet.
              </div>
              <UpvoteButton version={selectedVersion} initialVotes={42} />
            </div>

            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <CommentSection version={selectedVersion} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600 dark:border-gray-800 dark:bg-gray-900 dark:text-slate-300">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>&copy; 2024 Skycle. Prototype viewer powered by React Three Fiber.</span>
            <span className="text-slate-500 dark:text-slate-400">Made for dense, fast-moving cities.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
