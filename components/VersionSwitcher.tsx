'use client';

interface VersionSwitcherProps {
  currentVersion: string;
  onVersionChange: (version: string) => void;
}

const versions = [
  { id: 'v1', name: 'V1 - Base', description: 'Basic electric skateboard design' },
  { id: 'v2', name: 'V2 - Enhanced', description: 'Added handlebars for better control' },
  { id: 'v3', name: 'V3 - Advanced', description: 'Full skate-bike hybrid with seat' },
];

export default function VersionSwitcher({ currentVersion, onVersionChange }: VersionSwitcherProps) {
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Select Version
      </h3>
      <div className="mt-3 flex flex-col gap-2">
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => onVersionChange(version.id)}
            className={`group relative overflow-hidden rounded-xl p-3 text-left transition-all duration-200 ${
              currentVersion === version.id
                ? 'bg-gradient-to-br from-emerald-50 to-cyan-50 ring-2 ring-emerald-400 dark:from-emerald-900/20 dark:to-cyan-900/20 dark:ring-emerald-500'
                : 'bg-slate-50 ring-1 ring-slate-200 hover:bg-white hover:shadow-sm hover:ring-slate-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:bg-gray-750 dark:hover:ring-gray-600'
            }`}
          >
            {currentVersion === version.id && (
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                <svg className="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              {version.name}
            </div>
            <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {version.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
