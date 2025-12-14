# Skycle - Electric Skate-Bike Hybrid

Skycle is a Next.js application showcasing innovative electric skate-bike hybrid prototypes with interactive 3D visualization. Explore different prototype versions, upvote your favorites, and share your thoughts through comments.

## Features

- 🛹 **Interactive 3D Models**: View and interact with prototype designs using React Three Fiber
- 🔄 **Version Switching**: Compare three different prototype versions (V1, V2, V3)
- 👍 **Upvoting System**: Show support for your favorite prototypes
- 💬 **Comments**: Share feedback and ideas with the community
- 🎨 **Modern UI**: Built with Next.js 14, TypeScript, and Tailwind CSS
- 🌙 **Dark Mode**: Automatic dark mode support
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Backend**: Supabase (integration stubs included)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lfariabr/skycle.git
cd skycle
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials (optional for development).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
skycle/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ModelViewer.tsx    # 3D model viewer
│   ├── PlaceholderModel.tsx # 3D prototype models
│   ├── VersionSwitcher.tsx  # Version selector
│   ├── UpvoteButton.tsx     # Upvote component
│   └── CommentSection.tsx   # Comments component
├── lib/                   # Utilities and integrations
│   └── supabase.ts        # Supabase client and stubs
└── public/                # Static assets
    └── models/            # 3D model files (GLTF)
```

## 3D Models

Currently, the application uses placeholder 3D models built with Three.js primitives. To use custom GLTF models:

1. Convert your STEP files to GLTF format using tools like [Blender](https://www.blender.org/) or online converters
2. Place GLTF files in the `public/models/` directory
3. Update the `PlaceholderModel.tsx` component to load your GLTF files using the `useGLTF` hook from `@react-three/drei`

## Supabase Integration

The app includes stub functions for Supabase integration. To enable full functionality:

1. Create a [Supabase](https://supabase.com) project
2. Create the following tables in your database:

**votes table:**
```sql
create table votes (
  id uuid default gen_random_uuid() primary key,
  prototype_version text not null,
  user_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

**comments table:**
```sql
create table comments (
  id uuid default gen_random_uuid() primary key,
  prototype_version text not null,
  user_id text not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

3. Add your Supabase credentials to `.env.local`
4. Uncomment the actual Supabase queries in `lib/supabase.ts`

## Build for Production

```bash
npm run build
npm start
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- 3D rendering powered by [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- Backend integration with [Supabase](https://supabase.com)
