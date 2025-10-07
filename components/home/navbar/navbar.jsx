'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";
import {title} from "@/details/details.js";
import {nodename} from "@/details/details.js";
import { useRouter } from "next/navigation";
import NavbarBookmarks from "@/components/drive/navbar-bookmarks";
import { getBookmarks, removeBookmark } from "@/lib/bookmarks";

import { inter } from "@/app/ui/fonts";

const NODE_NAME = nodename;

//bg-[#ffffff]/80 dark:bg-[#071a26]/80
export function Navbar() {
  const [brandImageUrl, setBrandImageUrl] = useState("/images/logo.png");
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadNavbarData = async () => {
      try {
        const navbarRef = ref(db, `resources/${NODE_NAME}/pageData/navbar`);
        const snapshot = await get(navbarRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.brandImageUrl && data.brandImageUrl.trim()) {
            setBrandImageUrl(data.brandImageUrl);
          }
        }
      } catch (error) {
        console.error('Failed to load navbar data:', error);
        // Keep default image
      }
    };
    
    const loadBookmarks = () => {
      try {
        const b = getBookmarks();
        setBookmarks(b || []);
      } catch (e) {
        console.warn("Failed to load bookmarks in navbar", e);
      }
    };

    // Listen for localStorage changes to sync bookmarks
    const handleStorageChange = (e) => {
      if (e.key === 'driveBookmarks') {
        loadBookmarks();
      }
    };

    // Listen for custom bookmark events for same-tab sync
    const handleBookmarkUpdate = () => {
      loadBookmarks();
    };

    loadNavbarData();
    loadBookmarks();
    
    // Add storage event listener for cross-tab sync
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('bookmarks-updated', handleBookmarkUpdate);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('bookmarks-updated', handleBookmarkUpdate);
      };
    }
  }, []);
  return (
    <nav
      className={`${inter.className} bg-gray-200/80 dark:bg-[#071a26f1]/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 font-normal text-md navbar sticky top-0 w-full z-50`}
    >
      <div className="w-full mx-auto px-3 md:px-5 lg:px-8 xl:px-10 flex items-center justify-between h-[70px]">
        {/* <!-- Logo  --> */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            {brandImageUrl.startsWith('http') ? (
              <img
                src={brandImageUrl}
                alt="RUET CSE Archive Logo"
                className="h-[80px] w-[80px] object-contain"
                onError={(e) => {
                  e.target.src = "/images/logo.png";
                }}
              />
            ) : (
              <Image
                src={brandImageUrl}
                priority
                alt="RUET CSE Archive Logo"
                height={80}
                width={80}
                className="object-contain"
              />
            )}
            <div className="ml-3">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                {title}
              </span>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Powered by CSE Archive
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3 relative">
          <button
            onClick={() => setShowBookmarks((s) => !s)}
            title="Bookmarks"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <i className="fas fa-bookmark text-gray-700 dark:text-gray-200"></i> <span className="text-gray-700 dark:text-gray-200"> Bookmark List</span>
          </button>
          
          {showBookmarks && (
            <NavbarBookmarks
              bookmarks={bookmarks}
              onOpen={(b) => {
                setShowBookmarks(false);
                if (b.type === 'folder' && b.id) {
                  // Navigate to the folder
                  router.push(`/drive/${b.id}`);
                } else if (b.type === 'file' && b.parentFolderId) {
                  // Navigate to the folder containing the file
                  router.push(`/drive/${b.parentFolderId}`);
                }
              }}
              onDelete={(id) => {
                try {
                  const updated = removeBookmark(id);
                  setBookmarks(updated);
                  
                  // Trigger custom event for same-tab sync
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('bookmarks-updated'));
                  }
                } catch (e) {
                  console.error(e);
                }
              }}
              onCopy={async (b) => {
                const url = `${typeof window !== "undefined" ? window.location.origin : ""}/drive/${b.id}`;
                
                let copySuccess = false;
                
                // Try to copy to clipboard first
                try {
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(url);
                    copySuccess = true;
                  } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = url;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    copySuccess = document.execCommand('copy');
                    document.body.removeChild(textArea);
                  }
                } catch (e) {
                  console.error("Clipboard copy failed:", e);
                  // Try fallback method
                  try {
                    const textArea = document.createElement('textarea');
                    textArea.value = url;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    copySuccess = document.execCommand('copy');
                    document.body.removeChild(textArea);
                  } catch (fallbackError) {
                    console.error("Fallback copy also failed:", fallbackError);
                  }
                }
                
                // Then try native share if available
                if (navigator.share && copySuccess) {
                  try {
                    await navigator.share({
                      title: b.name || 'Bookmark',
                      text: `Check out this ${b.type === 'folder' ? 'folder' : 'file'}: ${b.name || 'Bookmark'}`,
                      url: url
                    });
                    console.log("Shared successfully");
                    return;
                  } catch (shareError) {
                    if (shareError.name === 'AbortError') {
                      console.log("Share cancelled - Link copied to clipboard");
                    } else {
                      console.log('Native share failed, but link copied');
                    }
                  }
                } else if (copySuccess) {
                  console.log("Link copied to clipboard");
                } else {
                  console.log("Share not available - Please copy the URL manually");
                }
              }}
              onClose={() => setShowBookmarks(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
