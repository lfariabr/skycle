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
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
        Prototype Versions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => onVersionChange(version.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              currentVersion === version.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
            }`}
          >
            <div className="font-semibold text-gray-900 dark:text-white">
              {version.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {version.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
