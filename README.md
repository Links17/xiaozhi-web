# Xiaozhi

A beautifully designed iOS-inspired web application built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- **iOS Design System**: Clean, minimal, and elegant design following iOS design guidelines
- **Authentication**: Complete user authentication flow with login, registration, and password reset
- **Dashboard**: Beautifully designed dashboard with stats and recent tasks
- **Task Management**: Comprehensive task management interface
- **Responsive Design**: Fully responsive design that works on all devices

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **Lucide Icons**: Beautiful open-source icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Structure

- `/src/app`: Next.js App Router pages
- `/src/components`: React components
  - `/src/components/ui`: UI components
  - `/src/components/auth`: Authentication components
  - `/src/components/dashboard`: Dashboard-specific components
- `/src/styles`: Global styles
- `/src/lib`: Utility functions

## Mock Data

This version of the application uses mock data. In a production environment, you would connect to a real backend service or API. 