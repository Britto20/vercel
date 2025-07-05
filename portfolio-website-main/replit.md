# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React and TypeScript, featuring a sophisticated design system powered by shadcn/ui components. The application showcases a full-stack architecture with an Express.js backend and a React frontend, designed to present professional experience, skills, and projects in an engaging manner.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth interactions and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas shared between frontend and backend

### Design System
- **Component Library**: Custom implementation using shadcn/ui
- **Theme**: CSS variables-based theming with light/dark mode support
- **Typography**: Responsive typography scale
- **Color Palette**: Professional gradient-based color scheme
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Animated typewriter effect with particle background
- **About Section**: Animated counters and intersection observer triggers
- **Projects Section**: Card-based project showcase with technology badges
- **Skills Section**: Progress bars with animated skill levels
- **Education Section**: Timeline-based education history
- **Contact Section**: Form with real-time validation and submission handling
- **Footer**: Links and contact information

### Backend Components
- **Route Handlers**: Modular route registration system
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom logging middleware for API requests
- **Vite Integration**: Development server integration with HMR support

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Messages Table**: Storage for contact form submissions
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

## Data Flow

1. **Client Request**: Frontend makes API requests using TanStack React Query
2. **Backend Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with error handling
5. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **UI Framework**: Radix UI primitives
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict mode
- **Linting**: ESBuild for production builds
- **Error Handling**: Replit error overlay for development

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Express serves frontend assets in production
- **Environment**: Production mode detection for optimizations

### Development Workflow
- **Hot Reload**: Vite HMR for frontend development
- **Server Restart**: tsx for backend development with auto-restart
- **Database Management**: Drizzle Kit for schema migrations
- **Type Checking**: Continuous TypeScript compilation checking

### Database Management
- **Migrations**: Drizzle Kit manages database schema changes
- **Connection**: Environment-based DATABASE_URL configuration
- **Schema**: Shared schema definitions between frontend and backend

## Changelog
- July 05, 2025: Initial portfolio setup with React, TypeScript, and Tailwind CSS
- July 05, 2025: Added dark mode toggle with theme provider and updated color scheme
- July 05, 2025: Implemented new vibrant color theme (purple primary, pink secondary, yellow accent)
- July 05, 2025: Updated all components to use semantic color tokens for theme support
- July 05, 2025: Removed demo and code buttons from projects section per user request
- July 05, 2025: Implemented resume download functionality with user's uploaded resume file
- July 05, 2025: Updated all social media links with actual LinkedIn, GitHub, and LeetCode profiles

## User Preferences

Preferred communication style: Simple, everyday language.