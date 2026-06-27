# Cognizant-style IT Website (React + Vite)

This project is a modern, responsive IT services website built with React and Vite. It is designed to look like a professional consulting-style landing site and is ready to host on Vercel, Netlify, GitHub Pages, or any static hosting platform.

## Features
- Responsive home page
- Services, Industries, and Contact sections
- Modern UI with a dark blue professional theme
- React Router navigation
- Production-ready build with Vite

## Project Architecture

src/
- main.jsx: application entry point
- App.jsx: route setup and layout
- index.css: global styles and design system
- components/
  - Header.jsx: navigation bar
  - Footer.jsx: site footer
- pages/
  - Home.jsx: hero section and capabilities
  - Services.jsx: service offerings
  - Industries.jsx: industry solutions
  - Contact.jsx: contact form

## Run Locally
1. Install dependencies:
   npm install
2. Start the dev server:
   npm run dev
3. Open http://localhost:3000

## Build for Production
npm run build

The build output will be created in the dist folder.

## Hosting Options
- Vercel: connect the repository and deploy automatically
- Netlify: drag and drop the dist folder or connect GitHub
- GitHub Pages: publish the dist folder from the repository

## Recommended Deployment
For a fast deployment, use Vercel or Netlify.

### Vercel
1. Push the project to GitHub
2. Import the repository in Vercel
3. Set build command to npm run build
4. Set output directory to dist

### Netlify
1. Build the project with npm run build
2. Upload the dist folder to Netlify

## Notes
The current website is a polished starter template for a Cognizant-style IT consulting brand and can be customized with real branding, images, case studies, and team pages.
