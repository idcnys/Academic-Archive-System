"use client";

import React from "react";
import Image from "next/image";

export default function Bookmarks({ bookmarks = [], onOpen, onDelete, onCopy, onClose }) {
  const getFileIcon = (mimeType, type, fileName) => {
    if (type === 'folder' || mimeType?.includes("folder")) {
      return <i className="fas fa-folder text-yellow-500 text-lg"></i>;
    }
    
    // Image files
    if (mimeType?.includes("image") || 
        fileName?.toLowerCase().match(/\.(png|jpg|jpeg|gif|bmp|webp)$/)) {
      return <i className="fas fa-file-image text-cyan-500 text-lg"></i>;
    }
    
    // Video files
    if (mimeType?.includes("video") || 
        fileName?.toLowerCase().match(/\.(mp4|avi|mov|wmv|flv|webm|mkv)$/)) {
      return <i className="fas fa-file-video text-indigo-500 text-lg"></i>;
    }
    
    // Audio files
    if (mimeType?.includes("audio") || 
        fileName?.toLowerCase().match(/\.(mp3|wav|flac|aac|ogg|wma)$/)) {
      return <i className="fas fa-file-audio text-purple-500 text-lg"></i>;
    }
    
    // PDF files
    if (mimeType?.includes("pdf") || fileName?.toLowerCase().endsWith('.pdf')) {
      return <i className="fas fa-file-pdf text-red-500 text-lg"></i>;
    }
    
    // Word documents
    if (mimeType?.includes("document") || mimeType?.includes("msword") || mimeType?.includes("wordprocessingml") ||
        fileName?.toLowerCase().match(/\.(doc|docx|rtf)$/)) {
      return <i className="fas fa-file-word text-blue-500 text-lg"></i>;
    }
    
    // Excel spreadsheets
    if (mimeType?.includes("spreadsheet") || mimeType?.includes("excel") || mimeType?.includes("spreadsheetml") ||
        fileName?.toLowerCase().match(/\.(xls|xlsx|csv)$/)) {
      return <i className="fas fa-file-excel text-green-500 text-lg"></i>;
    }
    
    // PowerPoint presentations
    if (mimeType?.includes("presentation") || mimeType?.includes("powerpoint") || mimeType?.includes("presentationml") ||
        fileName?.toLowerCase().match(/\.(ppt|pptx)$/)) {
      return <i className="fas fa-file-powerpoint text-orange-500 text-lg"></i>;
    }
    
    // Text files
    if (mimeType?.includes("text/plain") || 
        fileName?.toLowerCase().match(/\.(txt|log|md|readme)$/)) {
      return <i className="fas fa-file-alt text-gray-500 text-lg"></i>;
    }
    
    // Code files
    if (fileName?.toLowerCase().match(/\.(js|jsx|ts|tsx|html|css|scss|json|xml|py|java|cpp|c|php|rb|go|rs)$/)) {
      return <i className="fas fa-file-code text-emerald-500 text-lg"></i>;
    }
    
    // Archive files
    if (fileName?.toLowerCase().match(/\.(zip|rar|7z|tar|gz|bz2)$/)) {
      return <i className="fas fa-file-archive text-yellow-600 text-lg"></i>;
    }
    
    // Executable files
    if (fileName?.toLowerCase().match(/\.(exe|msi|deb|rpm|dmg|app)$/)) {
      return <i className="fas fa-cog text-gray-600 text-lg"></i>;
    }
    
    // Default file icon
    return <i className="fas fa-file text-gray-500 text-lg"></i>;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-[90%] max-w-md max-h-[70vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            <i className="fas fa-bookmark mr-2 text-blue-500"></i>
            Bookmarks ({bookmarks.length})
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[50vh]">
          {bookmarks.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <i className="fas fa-bookmark text-4xl mb-3 text-gray-300"></i>
              <p>No bookmarks yet.</p>
              <p className="text-sm mt-1">Bookmark files and folders to access them quickly.</p>
            </div>
          ) : (
            <div className="divide-y dark:divide-gray-700">
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-3">
                    {/* File icon */}
                    <div className="flex-shrink-0">
                      {getFileIcon(bookmark.mimeType, bookmark.type, bookmark.name)}
                    </div>
                    
                    {/* File info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                        {bookmark.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {bookmark.type === 'folder' ? 'Folder' : 'File'} • 
                        {bookmark.createdAt && new Date(bookmark.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => {
                          if (bookmark.type === 'folder') {
                            // For folders, navigate to the drive path
                            onOpen(bookmark);
                          } else {
                            // For files, navigate to the folder containing the file
                            onOpen(bookmark);
                          }
                        }} 
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 rounded transition-colors"
                        title={bookmark.type === 'folder' ? 'Open folder' : 'Open folder containing file'}
                      >
                        <i className="fas fa-folder-open"></i>
                      </button>
                      
                      {onCopy && (
                        <button 
                          onClick={() => onCopy(bookmark)} 
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
                          title="Copy link"
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      )}
                      
                      <button 
                        onClick={() => onDelete(bookmark.id)} 
                        className="px-2 py-1 text-xs bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 rounded transition-colors"
                        title="Delete bookmark"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {bookmarks.length > 0 && (
          <div className="p-3 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Click <i className="fas fa-folder-open mx-1"></i> to open folders or folder containing files, <i className="fas fa-copy mx-1"></i> to copy link, or <i className="fas fa-trash mx-1"></i> to delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
