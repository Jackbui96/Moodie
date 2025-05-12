import React from 'react';
import PageContainer from './PageContainer';
import { Outlet } from 'react-router-dom';

/**
 * Layout - Main application layout component
 *
 * Wraps all pages with common elements like header, footer, and the standardized
 * page container. Uses React Router's Outlet for rendering page content.
 *
 * Features:
 * - Full background color across entire screen
 * - Content container centered in the middle of the viewport
 * - Fixed header and footer with proper z-index
 *
 * @returns {JSX.Element}
 */
export default function Layout() {
    return (
        // Full page background
        <div className="min-h-screen bg-gray-950 text-white flex flex-col">
            {/* Fixed header */}
            <header className="w-full bg-gray-900 py-4 shadow-md shadow-black/20 sticky top-0 z-10">
                <PageContainer>
                    {/* Header content */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Movie App</h1>
                        <nav>{/* Navigation items */}</nav>
                    </div>
                </PageContainer>
            </header>

            {/* Main content area - centers content vertically when content is less than viewport */}
            <main className="flex-1 flex flex-col justify-center py-8">
                {/* Content container with background */}
                <div className="bg-gray-900 rounded-xl shadow-xl shadow-black/30 my-auto">
                    <PageContainer className="py-6">
                        <Outlet />
                    </PageContainer>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-900 py-6 shadow-inner shadow-black/20">
                <PageContainer>
                    {/* Footer content */}
                    <div className="text-center text-gray-400">
                        <p>© 2025 Movie App. All rights reserved.</p>
                    </div>
                </PageContainer>
            </footer>
        </div>
    );
}
