'use client';

import { useEffect, useState } from "react";
import { ResourcesHeader } from "@/components/resources/resources-header";
import { ResourcesGridOptimized } from "@/components/resources/resources-grid-super-optimized";
import { resourcesMetadata } from "@/components/resources/resources-data";

// Shimmer loading component for main page elements
function MainPageShimmer() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header shimmer */}
        <div className="text-center mb-8">
          <div className="h-12 md:h-16 lg:h-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-4 mx-auto w-3/4 bg-animate-shimmer"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2 mx-auto w-2/3 bg-animate-shimmer"></div>
          <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mx-auto w-1/2 bg-animate-shimmer"></div>
        </div>
        
        {/* Cards shimmer */}
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-t-2xl bg-animate-shimmer"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 bg-animate-shimmer"></div>
                  <div className="space-y-2 pt-2">
                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"></div>
                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Client component to support dynamic data fetching
export default function Resources() {
  const [isLoading, setIsLoading] = useState(true);

  // Set page title and meta description for client-side routing
  useEffect(() => {
    document.title = resourcesMetadata.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', resourcesMetadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = resourcesMetadata.description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', resourcesMetadata.keywords.join(", "));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = resourcesMetadata.keywords.join(", ");
      document.head.appendChild(meta);
    }

    // Simulate loading time for shimmer effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds of shimmer

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <MainPageShimmer />;
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ResourcesHeader />
        <ResourcesGridOptimized />
      </div>
    </main>
  );
}
