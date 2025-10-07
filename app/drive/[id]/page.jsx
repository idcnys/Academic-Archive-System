"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import Bookmarks from "@/components/drive/bookmarks";
import {
  getBookmarks as loadBookmarksFromStorage,
  addBookmark as addBookmarkToStorage,
  removeBookmark as removeBookmarkFromStorage,
  isBookmarked as checkIsBookmarked,
} from "@/lib/bookmarks";

import { motion } from "framer-motion";
import { lato } from "@/app/ui/fonts";
import Loading from "@/app/loading";

export default function DrivePage({ params }) {
  const router = useRouter();

  const resolvedParams = use(params);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewID, setPreviewId] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [toast, setToast] = useState(null);

  // Helper functions for localStorage breadcrumb management
  const getBreadcrumbFromStorage = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("driveBreadcrumb");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  };

  const saveBreadcrumbToStorage = (breadcrumbPath) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("driveBreadcrumb", JSON.stringify(breadcrumbPath));
    }
  };

  const addToBreadcrumb = (folder) => {
    const currentBreadcrumb = getBreadcrumbFromStorage();
    
    // Check if this folder is already in the breadcrumb (going back)
    const existingIndex = currentBreadcrumb.findIndex(item => item.id === folder.id);
    
    if (existingIndex !== -1) {
      // User went back to a previous folder, truncate breadcrumb
      const newBreadcrumb = currentBreadcrumb.slice(0, existingIndex + 1);
      saveBreadcrumbToStorage(newBreadcrumb);
      return newBreadcrumb;
    } else {
      // New folder, add to breadcrumb
      const newBreadcrumb = [...currentBreadcrumb, folder];
      saveBreadcrumbToStorage(newBreadcrumb);
      return newBreadcrumb;
    }
  };

  const clearBreadcrumb = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("driveBreadcrumb");
    }
  };

  useEffect(() => {
    // load bookmarks from localStorage on mount
    const loadBookmarks = () => {
      try {
        const stored = loadBookmarksFromStorage();
        setBookmarks(stored || []);
      } catch (e) {
        console.warn("Failed to load bookmarks:", e);
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

    loadBookmarks();
    
    // Add storage event listener for cross-component sync
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('bookmarks-updated', handleBookmarkUpdate);
    }

    const fetchFiles = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/drive/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ folderId: resolvedParams.id }),
        });

        if (!response.ok) {
          // Try to get the error message from the response
          const errorData = await response.json().catch(() => ({}));
          const errorMessage =
            errorData.error ||
            `HTTP ${response.status}: ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setFiles(data.files || []);
        setCurrentFolder(data.currentFolder || null);
        
        // Update breadcrumb using localStorage
        if (data.currentFolder) {
          const updatedBreadcrumb = addToBreadcrumb({
            id: data.currentFolder.id,
            name: data.currentFolder.name
          });
          setBreadcrumb(updatedBreadcrumb);
        }
        
        // Debug logging
        console.log("Current folder:", data.currentFolder);
        console.log("Breadcrumb from localStorage:", getBreadcrumbFromStorage());
      } catch (err) {
        setError(err.message);
        console.error("Error fetching files:", err);
      } finally {
        setLoading(false);
      }
    };

    if (resolvedParams.id) {
      fetchFiles();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('bookmarks-updated', handleBookmarkUpdate);
      }
    };
  }, [resolvedParams.id]);

  // helper handlers for bookmarks and sharing
  const handleAddBookmark = () => {
    if (!currentFolder) return;
    const bookmark = {
      id: currentFolder.id,
      name: currentFolder.name || `Folder ${currentFolder.id}`,
      type: 'folder',
      mimeType: 'application/vnd.google-apps.folder',
      path: `/drive/${currentFolder.id}`,
      createdAt: new Date().toISOString(),
    };

    const updated = addBookmarkToStorage(bookmark);
    setBookmarks(updated);
    
    // Trigger custom event for same-tab sync
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('bookmarks-updated'));
    }
    
    setToast("Folder bookmarked");
    setTimeout(() => setToast(null), 1800);
  };

  const handleToggleBookmarks = () => setShowBookmarks((s) => !s);

  const handleShareCurrent = async () => {
    if (!currentFolder || typeof window === "undefined") return;
    const url = `${window.location.origin}/drive/${currentFolder.id}`;
    
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
          title: currentFolder.name || 'Folder',
          text: `Check out this folder: ${currentFolder.name || 'Folder'}`,
          url: url
        });
        setToast("Shared successfully");
        setTimeout(() => setToast(null), 1800);
        return;
      } catch (shareError) {
        if (shareError.name === 'AbortError') {
          setToast("Share cancelled - Link copied to clipboard");
        } else {
          console.log('Native share failed, showing clipboard success');
          setToast("Link copied to clipboard");
        }
      }
    } else if (copySuccess) {
      setToast("Link copied to clipboard");
    } else {
      setToast("Share not available - Please copy the URL manually");
    }
    
    setTimeout(() => setToast(null), 1800);
  };

  const handleOpenBookmark = (bookmark) => {
    setShowBookmarks(false);
    if (bookmark.type === 'folder' && bookmark.id) {
      // Navigate to the folder
      router.push(`/drive/${bookmark.id}`);
    } else if (bookmark.type === 'file' && bookmark.parentFolderId) {
      // Navigate to the folder containing the file
      router.push(`/drive/${bookmark.parentFolderId}`);
    }
  };

  const handleDeleteBookmark = (id) => {
    const updated = removeBookmarkFromStorage(id);
    setBookmarks(updated);
    
    // Trigger custom event for same-tab sync
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('bookmarks-updated'));
    }
  };

  // Initialize breadcrumb from localStorage on component mount
  useEffect(() => {
    const storedBreadcrumb = getBreadcrumbFromStorage();
    setBreadcrumb(storedBreadcrumb);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <br />
      <br />

      <div className={lato.className + " px-4 lg:px-6"}>
        <div className="bg-[#ffffff78] dark:bg-[#071a26] px-4 lg:px-6 py-8 rounded-lg shadow-md">
          <div className="mx-auto ">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 p-1" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap space-x-1 text-sm text-gray-600 dark:text-gray-400">
                {/* Always show back to drive link */}
                <li>
                  <Link
                    href="/drive"
                    onClick={() => clearBreadcrumb()}
                    className="text-[12px] lg:text-[13px] flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <i className="fas fa-home mr-1"></i>
                    Drive
                  </Link>
                </li>
                
                {breadcrumb && breadcrumb.length > 0 && breadcrumb.map((folder, index) => (
                  <li key={folder.id} className="flex items-center">
                    <i className="fas fa-chevron-right mx-1 text-gray-400 text-xs"></i>
                    {index === breadcrumb.length - 1 ? (
                      <span className="text-[12px] lg:text-[13px] font-medium text-gray-900 dark:text-gray-100 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">
                        <i className="fas fa-folder mr-1 text-blue-600 dark:text-blue-400"></i>
                        {folder.name}
                      </span>
                    ) : (
                      <Link
                        href={`/drive/${folder.id}`}
                        onClick={() => {
                          // Truncate breadcrumb when clicking on a parent folder
                          const newBreadcrumb = breadcrumb.slice(0, index + 1);
                          saveBreadcrumbToStorage(newBreadcrumb);
                        }}
                        className="text-[12px] lg:text-[13px] flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <i className="fas fa-folder mr-1"></i>
                        {folder.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl text-left font-bold text-gray-700 dark:text-gray-300">
                {currentFolder ? currentFolder.name : "Drive Files"}
              </h1>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddBookmark}
                  className="text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-center cursor-pointer"
                >
                  <i className="fas fa-bookmark mr-1"></i>
                  Bookmark Folder
                </button>

                <button
                  onClick={handleShareCurrent}
                  className="text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-center cursor-pointer"
                >
                  <i className="fas fa-share mr-1"></i>
      
                </button>

                
              </div>
            </div>

            {files.length === 0 ? (
              <p className="text-2xl text-center text-gray-700 dark:text-gray-300">
                No files found in this folder.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {files.map((file, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={file.id}
                    className="p-4 rounded-lg"

                    // className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center gap-1">
                      {/* File type icon */}
                      <div
                        className="cursor-pointer text-6xl"
                        onClick={() => {
                          if (file.mimeType.includes("folder")) {
                            // Don't add to breadcrumb here, let the useEffect handle it
                            router.push(`/drive/${file.id}`);
                          }
                        }}
                      >
                        {/* Image files */}
                        {(file.mimeType.includes("image/png") ||
                          file.mimeType.includes("image/jpeg") ||
                          file.mimeType.includes("image/jpg") ||
                          file.mimeType.includes("image/gif") ||
                          file.mimeType.includes("image/bmp") ||
                          file.mimeType.includes("image/webp") ||
                          file.name?.toLowerCase().endsWith('.png') ||
                          file.name?.toLowerCase().endsWith('.jpg') ||
                          file.name?.toLowerCase().endsWith('.jpeg') ||
                          file.name?.toLowerCase().endsWith('.gif') ||
                          file.name?.toLowerCase().endsWith('.bmp') ||
                          file.name?.toLowerCase().endsWith('.webp')) && (
                          <i className="fas fa-file-image text-cyan-500"></i>
                        )}
                        
                        {/* Video files */}
                        {(file.mimeType.includes("video") ||
                          file.mimeType.includes("mp4") ||
                          file.name?.toLowerCase().endsWith('.mp4') ||
                          file.name?.toLowerCase().endsWith('.avi') ||
                          file.name?.toLowerCase().endsWith('.mov') ||
                          file.name?.toLowerCase().endsWith('.wmv') ||
                          file.name?.toLowerCase().endsWith('.flv') ||
                          file.name?.toLowerCase().endsWith('.webm') ||
                          file.name?.toLowerCase().endsWith('.mkv')) && (
                          <i className="fas fa-file-video text-indigo-500"></i>
                        )}
                        
                        {/* Audio files */}
                        {(file.mimeType.includes("audio") ||
                          file.name?.toLowerCase().endsWith('.mp3') ||
                          file.name?.toLowerCase().endsWith('.wav') ||
                          file.name?.toLowerCase().endsWith('.flac') ||
                          file.name?.toLowerCase().endsWith('.aac') ||
                          file.name?.toLowerCase().endsWith('.ogg') ||
                          file.name?.toLowerCase().endsWith('.wma')) && (
                          <i className="fas fa-file-audio text-purple-500"></i>
                        )}
                        
                        {/* PDF files */}
                        {(file.mimeType.includes("pdf") ||
                          file.name?.toLowerCase().endsWith('.pdf')) && (
                          <i className="fas fa-file-pdf text-red-500"></i>
                        )}
                        
                        {/* Word documents */}
                        {(file.mimeType.includes("document") ||
                          file.mimeType.includes("msword") ||
                          file.mimeType.includes("wordprocessingml") ||
                          file.name?.toLowerCase().endsWith('.doc') ||
                          file.name?.toLowerCase().endsWith('.docx') ||
                          file.name?.toLowerCase().endsWith('.rtf')) && (
                          <i className="fas fa-file-word text-blue-500"></i>
                        )}
                        
                        {/* Excel spreadsheets */}
                        {(file.mimeType.includes("spreadsheet") ||
                          file.mimeType.includes("excel") ||
                          file.mimeType.includes("spreadsheetml") ||
                          file.name?.toLowerCase().endsWith('.xls') ||
                          file.name?.toLowerCase().endsWith('.xlsx') ||
                          file.name?.toLowerCase().endsWith('.csv')) && (
                          <i className="fas fa-file-excel text-green-500"></i>
                        )}
                        
                        {/* PowerPoint presentations */}
                        {(file.mimeType.includes("presentation") ||
                          file.mimeType.includes("powerpoint") ||
                          file.mimeType.includes("presentationml") ||
                          file.name?.toLowerCase().endsWith('.ppt') ||
                          file.name?.toLowerCase().endsWith('.pptx')) && (
                          <i className="fas fa-file-powerpoint text-orange-500"></i>
                        )}
                        
                        {/* Text files */}
                        {(file.mimeType.includes("text/plain") ||
                          file.name?.toLowerCase().endsWith('.txt') ||
                          file.name?.toLowerCase().endsWith('.log') ||
                          file.name?.toLowerCase().endsWith('.md') ||
                          file.name?.toLowerCase().endsWith('.readme')) && (
                          <i className="fas fa-file-alt text-gray-500"></i>
                        )}
                        
                        {/* Code files */}
                        {(file.name?.toLowerCase().endsWith('.js') ||
                          file.name?.toLowerCase().endsWith('.jsx') ||
                          file.name?.toLowerCase().endsWith('.ts') ||
                          file.name?.toLowerCase().endsWith('.tsx') ||
                          file.name?.toLowerCase().endsWith('.html') ||
                          file.name?.toLowerCase().endsWith('.css') ||
                          file.name?.toLowerCase().endsWith('.scss') ||
                          file.name?.toLowerCase().endsWith('.json') ||
                          file.name?.toLowerCase().endsWith('.xml') ||
                          file.name?.toLowerCase().endsWith('.py') ||
                          file.name?.toLowerCase().endsWith('.java') ||
                          file.name?.toLowerCase().endsWith('.cpp') ||
                          file.name?.toLowerCase().endsWith('.c') ||
                          file.name?.toLowerCase().endsWith('.php') ||
                          file.name?.toLowerCase().endsWith('.rb') ||
                          file.name?.toLowerCase().endsWith('.go') ||
                          file.name?.toLowerCase().endsWith('.rs')) && (
                          <i className="fas fa-file-code text-emerald-500"></i>
                        )}
                        
                        {/* Archive files */}
                        {(file.name?.toLowerCase().endsWith('.zip') ||
                          file.name?.toLowerCase().endsWith('.rar') ||
                          file.name?.toLowerCase().endsWith('.7z') ||
                          file.name?.toLowerCase().endsWith('.tar') ||
                          file.name?.toLowerCase().endsWith('.gz') ||
                          file.name?.toLowerCase().endsWith('.bz2')) && (
                          <i className="fas fa-file-archive text-yellow-600"></i>
                        )}
                        
                        {/* Executable files */}
                        {(file.name?.toLowerCase().endsWith('.exe') ||
                          file.name?.toLowerCase().endsWith('.msi') ||
                          file.name?.toLowerCase().endsWith('.deb') ||
                          file.name?.toLowerCase().endsWith('.rpm') ||
                          file.name?.toLowerCase().endsWith('.dmg') ||
                          file.name?.toLowerCase().endsWith('.app')) && (
                          <i className="fas fa-cog text-gray-600"></i>
                        )}
                        
                        {/* Folders */}
                        {file.mimeType.includes("folder") && (
                          <Image
                            src="/images/folder.svg"
                            alt="File Icon"
                            width={80}
                            height={80}
                          />
                        )}
                        
                        {/* Default file icon for unrecognized types */}
                        {!file.mimeType.includes("image") &&
                         !file.mimeType.includes("video") &&
                         !file.mimeType.includes("audio") &&
                         !file.mimeType.includes("pdf") &&
                         !file.mimeType.includes("document") &&
                         !file.mimeType.includes("msword") &&
                         !file.mimeType.includes("wordprocessingml") &&
                         !file.mimeType.includes("spreadsheet") &&
                         !file.mimeType.includes("excel") &&
                         !file.mimeType.includes("spreadsheetml") &&
                         !file.mimeType.includes("presentation") &&
                         !file.mimeType.includes("powerpoint") &&
                         !file.mimeType.includes("presentationml") &&
                         !file.mimeType.includes("text/plain") &&
                         !file.mimeType.includes("folder") &&
                         !file.name?.toLowerCase().match(/\.(png|jpg|jpeg|gif|bmp|webp|mp4|avi|mov|wmv|flv|webm|mkv|mp3|wav|flac|aac|ogg|wma|pdf|doc|docx|rtf|xls|xlsx|csv|ppt|pptx|txt|log|md|readme|js|jsx|ts|tsx|html|css|scss|json|xml|py|java|cpp|c|php|rb|go|rs|zip|rar|7z|tar|gz|bz2|exe|msi|deb|rpm|dmg|app)$/) && (
                          <i className="fas fa-file text-gray-400"></i>
                        )}
                      </div>

                      <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 text-wrap truncate">
                        {file.name}
                      </h3>
                    </div>

                    {/* Bootstrap-style horizontal button group - only show for files, not folders */}
                    {!file.mimeType.includes("folder") && (
                      <div className="mt-3 flex justify-center">
                        <div className="inline-flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden shadow-sm">
                          {/* Download */}
                          {file.webContentLink && (
                            <Link
                              href={file.webContentLink}
                              className="px-3 py-2 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-150 group"
                              title="Download"
                            >
                              <i className="fas fa-download text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"></i>
                            </Link>
                          )}
                          
                          {/* Preview */}
                          {file.webContentLink && (
                            <button
                              onClick={() =>
                                setPreviewId(
                                  previewID === file.id ? null : file.id
                                )
                              }
                              className="px-3 py-2 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-150 group"
                              title={file.mimeType.includes("mp4") ? "Play" : "Preview"}
                            >
                              <i className="fas fa-eye text-sm text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400"></i>
                            </button>
                          )}
                          
                          {/* Bookmark */}
                          <button
                            onClick={() => {
                              // bookmark individual file
                              const bookmark = {
                                id: file.id,
                                name: file.name,
                                type: 'file',
                                mimeType: file.mimeType,
                                path: file.webContentLink || `/drive/${file.id}`,
                                parentFolderId: currentFolder?.id || resolvedParams.id, // Store parent folder ID
                                createdAt: new Date().toISOString(),
                              };
                              const updated = addBookmarkToStorage(bookmark);
                              setBookmarks(updated);
                              
                              // Trigger custom event for same-tab sync
                              if (typeof window !== 'undefined') {
                                window.dispatchEvent(new CustomEvent('bookmarks-updated'));
                              }
                              
                              setToast("File bookmarked");
                              setTimeout(() => setToast(null), 1500);
                            }}
                            className="px-3 py-2 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-150 group"
                            title="Bookmark"
                          >
                            <i className="fas fa-bookmark text-sm text-gray-600 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400"></i>
                          </button>

                          {/* Share */}
                          <button
                            onClick={async () => {
                              const url = file.webContentLink || `${typeof window !== "undefined" ? window.location.origin : ""}/drive/${file.id}`;
                              
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
                                    title: file.name,
                                    text: `Check out this file: ${file.name}`,
                                    url: url
                                  });
                                  setToast("Shared successfully");
                                  setTimeout(() => setToast(null), 1500);
                                  return;
                                } catch (shareError) {
                                  if (shareError.name === 'AbortError') {
                                    setToast("Share cancelled - Link copied to clipboard");
                                  } else {
                                    console.log('Native share failed, showing clipboard success');
                                    setToast("Link copied to clipboard");
                                  }
                                }
                              } else if (copySuccess) {
                                setToast("Link copied to clipboard");
                              } else {
                                setToast("Share not available - Please copy the URL manually");
                              }
                              
                              setTimeout(() => setToast(null), 1500);
                            }}
                            className="px-3 py-2 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 last:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-150 group"
                            title="Share"
                          >
                            <i className="fas fa-share text-sm text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"></i>
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Preview Modal */}
      {previewID && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={() => setPreviewId(null)}
            className="absolute top-4 lg:top-7 left-3 lg:left-9 size-10 bg-slate-800 rounded-full text-gray-300 text-2xl cursor-pointer"
          >
            <i className="fas fa-times"></i>
          </button>
          <iframe
            src={`https://drive.google.com/file/d/${previewID}/preview`}
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      )}

      {/* Bookmarks panel */}
      {showBookmarks && (
        <Bookmarks
          bookmarks={bookmarks}
          onOpen={handleOpenBookmark}
          onDelete={handleDeleteBookmark}
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
                setToast("Shared successfully");
                setTimeout(() => setToast(null), 1600);
                return;
              } catch (shareError) {
                if (shareError.name === 'AbortError') {
                  setToast("Share cancelled - Link copied to clipboard");
                } else {
                  console.log('Native share failed, showing clipboard success');
                  setToast("Bookmark link copied");
                }
              }
            } else if (copySuccess) {
              setToast("Bookmark link copied");
            } else {
              setToast("Share not available - Please copy the URL manually");
            }
            
            setTimeout(() => setToast(null), 1600);
          }}
          onClose={() => setShowBookmarks(false)}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50 bg-black text-white px-4 py-2 rounded">
          {toast}
        </div>
      )}
    </>
  );
}

