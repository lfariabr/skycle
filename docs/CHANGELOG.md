# Skycle Changelog

> Note: ✅ = Done; 📝 = To Be Done.

---

## [2024-12-14] UX Overhaul

### Fixed
- ✅ Tailwind v4 compatibility (migrated from `@tailwind` to `@import "tailwindcss"`)
- ✅ SVG icon sizing issues (added flex-shrink-0 constraints)
- ✅ Font configuration (Space Grotesk via Tailwind fontFamily.sans)

### Added
- ✅ Mobile-responsive 3D viewer (300px → 400px → 500px breakpoints)
- ✅ Touch-optimized interaction hints (pinch/drag on mobile)
- ✅ Smooth scroll behavior sitewide
- ✅ Loading states and micro-interactions for all buttons
- ✅ Empty state with icon for comments section

### Changed
- ✅ Hero section: Simplified single-column layout with quick specs strip
- ✅ Prototype Lab: Version selector + details panel beside 3D viewer
- ✅ Active prototype card now appears below version selector (context-aware)
- ✅ VersionSwitcher: Vertical stacked layout with selection indicator
- ✅ UpvoteButton: Compact design with vote count badge
- ✅ CommentSection: Enhanced form with spinner and better empty state

---

## Initial Setup

1. Set Up Project Structure:
- ✅ Initialize Next.js and TypeScript.
- ✅ Configure Tailwind CSS.

2. 3D Model Integration:
- ✅ Add React Three Fiber and Three.js.
- 📝 Load the STEP file and render it in the app.
- ✅ Load placeholder models to render in the app.
- ✅ Implement version switching for different prototypes.

3. User Interaction Features:
- ✅ Build a like/upvote button for each prototype version.
- ✅ Create a comment system allowing users to leave feedback.

4. Backend Setup:
- 📝 Set up Supabase project and configure database for comments and votes.
- 📝 Implement API routes in Next.js to handle these interactions.

5. UI Enhancements:
- ✅ Design a responsive layout with Tailwind CSS.
- ✅ Add a form for submitting comments and viewing others' feedback.
- ✅ Mobile-first responsive design
- 📝 UX enhancements to comment form (Name field, Pagination)

6. Testing and Deployment:
- 📝 Write unit tests for key components.
- 📝 Set up a CI/CD pipeline and deploy on Vercel.
