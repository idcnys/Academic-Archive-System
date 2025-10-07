(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/drive/bookmarks.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Bookmarks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function Bookmarks({ bookmarks = [], onOpen, onDelete, onCopy, onClose }) {
    const getFileIcon = (mimeType, type, fileName)=>{
        if (type === 'folder' || mimeType?.includes("folder")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-folder text-yellow-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 9,
                columnNumber: 14
            }, this);
        }
        // Image files
        if (mimeType?.includes("image") || fileName?.toLowerCase().match(/\.(png|jpg|jpeg|gif|bmp|webp)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-image text-cyan-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 15,
                columnNumber: 14
            }, this);
        }
        // Video files
        if (mimeType?.includes("video") || fileName?.toLowerCase().match(/\.(mp4|avi|mov|wmv|flv|webm|mkv)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-video text-indigo-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 21,
                columnNumber: 14
            }, this);
        }
        // Audio files
        if (mimeType?.includes("audio") || fileName?.toLowerCase().match(/\.(mp3|wav|flac|aac|ogg|wma)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-audio text-purple-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 27,
                columnNumber: 14
            }, this);
        }
        // PDF files
        if (mimeType?.includes("pdf") || fileName?.toLowerCase().endsWith('.pdf')) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-pdf text-red-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        }
        // Word documents
        if (mimeType?.includes("document") || mimeType?.includes("msword") || mimeType?.includes("wordprocessingml") || fileName?.toLowerCase().match(/\.(doc|docx|rtf)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-word text-blue-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 38,
                columnNumber: 14
            }, this);
        }
        // Excel spreadsheets
        if (mimeType?.includes("spreadsheet") || mimeType?.includes("excel") || mimeType?.includes("spreadsheetml") || fileName?.toLowerCase().match(/\.(xls|xlsx|csv)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-excel text-green-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        }
        // PowerPoint presentations
        if (mimeType?.includes("presentation") || mimeType?.includes("powerpoint") || mimeType?.includes("presentationml") || fileName?.toLowerCase().match(/\.(ppt|pptx)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-powerpoint text-orange-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
        }
        // Text files
        if (mimeType?.includes("text/plain") || fileName?.toLowerCase().match(/\.(txt|log|md|readme)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-alt text-gray-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 56,
                columnNumber: 14
            }, this);
        }
        // Code files
        if (fileName?.toLowerCase().match(/\.(js|jsx|ts|tsx|html|css|scss|json|xml|py|java|cpp|c|php|rb|go|rs)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-code text-emerald-500 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 61,
                columnNumber: 14
            }, this);
        }
        // Archive files
        if (fileName?.toLowerCase().match(/\.(zip|rar|7z|tar|gz|bz2)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-file-archive text-yellow-600 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 66,
                columnNumber: 14
            }, this);
        }
        // Executable files
        if (fileName?.toLowerCase().match(/\.(exe|msi|deb|rpm|dmg|app)$/)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "fas fa-cog text-gray-600 text-lg"
            }, void 0, false, {
                fileName: "[project]/components/drive/bookmarks.jsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        }
        // Default file icon
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fas fa-file text-gray-500 text-lg"
        }, void 0, false, {
            fileName: "[project]/components/drive/bookmarks.jsx",
            lineNumber: 75,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl w-[90%] max-w-md max-h-[70vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-800 dark:text-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fas fa-bookmark mr-2 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                "Bookmarks (",
                                bookmarks.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/drive/bookmarks.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-times"
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/drive/bookmarks.jsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/drive/bookmarks.jsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto max-h-[50vh]",
                    children: bookmarks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center text-gray-500 dark:text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-bookmark text-4xl mb-3 text-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No bookmarks yet."
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-1",
                                children: "Bookmark files and folders to access them quickly."
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drive/bookmarks.jsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y dark:divide-gray-700",
                        children: bookmarks.map((bookmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: getFileIcon(bookmark.mimeType, bookmark.type, bookmark.name)
                                        }, void 0, false, {
                                            fileName: "[project]/components/drive/bookmarks.jsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-800 dark:text-gray-200 truncate",
                                                    children: bookmark.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: [
                                                        bookmark.type === 'folder' ? 'Folder' : 'File',
                                                        " •",
                                                        bookmark.createdAt && new Date(bookmark.createdAt).toLocaleDateString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/drive/bookmarks.jsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (bookmark.type === 'folder') {
                                                            // For folders, navigate to the drive path
                                                            onOpen(bookmark);
                                                        } else {
                                                            // For files, navigate to the folder containing the file
                                                            onOpen(bookmark);
                                                        }
                                                    },
                                                    className: "px-2 py-1 text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 rounded transition-colors",
                                                    title: bookmark.type === 'folder' ? 'Open folder' : 'Open folder containing file',
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-folder-open"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/drive/bookmarks.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 23
                                                }, this),
                                                onCopy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onCopy(bookmark),
                                                    className: "px-2 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded transition-colors",
                                                    title: "Copy link",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-copy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/drive/bookmarks.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onDelete(bookmark.id),
                                                    className: "px-2 py-1 text-xs bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 rounded transition-colors",
                                                    title: "Delete bookmark",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-trash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/drive/bookmarks.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/drive/bookmarks.jsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/drive/bookmarks.jsx",
                                    lineNumber: 107,
                                    columnNumber: 19
                                }, this)
                            }, bookmark.id, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/drive/bookmarks.jsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/drive/bookmarks.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                bookmarks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 dark:text-gray-400 text-center",
                        children: [
                            "Click ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-folder-open mx-1"
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this),
                            " to open folders or folder containing files, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-copy mx-1"
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 171,
                                columnNumber: 109
                            }, this),
                            " to copy link, or ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-trash mx-1"
                            }, void 0, false, {
                                fileName: "[project]/components/drive/bookmarks.jsx",
                                lineNumber: 171,
                                columnNumber: 163
                            }, this),
                            " to delete"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drive/bookmarks.jsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/drive/bookmarks.jsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/drive/bookmarks.jsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/drive/bookmarks.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c = Bookmarks;
var _c;
__turbopack_context__.k.register(_c, "Bookmarks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/lato_eabde2b4.js [app-client] (ecmascript) <export default as lato>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "lato": (()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$lato_eabde2b4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$lato_eabde2b4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/lato_eabde2b4.js [app-client] (ecmascript)");
}}),
"[project]/app/loading.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Loading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-lg text-gray-800 dark:text-gray-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        display: "inline-block",
                        position: "relative",
                        background: "linear-gradient(0deg, rgba(0, 140, 255, 0.2) 33%, #0084ff 100%)",
                        boxSizing: "border-box",
                        animation: "rotation 1s linear infinite"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#fff] dark:bg-[#263238]",
                        style: {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            boxSizing: "border-box"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/loading.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/loading.jsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
                    @keyframes rotation {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `
                }, void 0, false, {
                    fileName: "[project]/app/loading.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/loading.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/loading.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/drive/[id]/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DrivePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drive$2f$bookmarks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/drive/bookmarks.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/bookmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$fonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/ui/fonts.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$lato_eabde2b4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__lato$3e$__ = __turbopack_context__.i("[next]/internal/font/google/lato_eabde2b4.js [app-client] (ecmascript) <export default as lato>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loading.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function DrivePage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewID, setPreviewId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [breadcrumb, setBreadcrumb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFolder, setCurrentFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bookmarks, setBookmarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showBookmarks, setShowBookmarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Helper functions for localStorage breadcrumb management
    const getBreadcrumbFromStorage = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const stored = localStorage.getItem("driveBreadcrumb");
            return stored ? JSON.parse(stored) : [];
        }
        "TURBOPACK unreachable";
    };
    const saveBreadcrumbToStorage = (breadcrumbPath)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem("driveBreadcrumb", JSON.stringify(breadcrumbPath));
        }
    };
    const addToBreadcrumb = (folder)=>{
        const currentBreadcrumb = getBreadcrumbFromStorage();
        // Check if this folder is already in the breadcrumb (going back)
        const existingIndex = currentBreadcrumb.findIndex((item)=>item.id === folder.id);
        if (existingIndex !== -1) {
            // User went back to a previous folder, truncate breadcrumb
            const newBreadcrumb = currentBreadcrumb.slice(0, existingIndex + 1);
            saveBreadcrumbToStorage(newBreadcrumb);
            return newBreadcrumb;
        } else {
            // New folder, add to breadcrumb
            const newBreadcrumb = [
                ...currentBreadcrumb,
                folder
            ];
            saveBreadcrumbToStorage(newBreadcrumb);
            return newBreadcrumb;
        }
    };
    const clearBreadcrumb = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem("driveBreadcrumb");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrivePage.useEffect": ()=>{
            // load bookmarks from localStorage on mount
            const loadBookmarks = {
                "DrivePage.useEffect.loadBookmarks": ()=>{
                    try {
                        const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookmarks"])();
                        setBookmarks(stored || []);
                    } catch (e) {
                        console.warn("Failed to load bookmarks:", e);
                    }
                }
            }["DrivePage.useEffect.loadBookmarks"];
            // Listen for localStorage changes to sync bookmarks
            const handleStorageChange = {
                "DrivePage.useEffect.handleStorageChange": (e)=>{
                    if (e.key === 'driveBookmarks') {
                        loadBookmarks();
                    }
                }
            }["DrivePage.useEffect.handleStorageChange"];
            // Listen for custom bookmark events for same-tab sync
            const handleBookmarkUpdate = {
                "DrivePage.useEffect.handleBookmarkUpdate": ()=>{
                    loadBookmarks();
                }
            }["DrivePage.useEffect.handleBookmarkUpdate"];
            loadBookmarks();
            // Add storage event listener for cross-component sync
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('storage', handleStorageChange);
                window.addEventListener('bookmarks-updated', handleBookmarkUpdate);
            }
            const fetchFiles = {
                "DrivePage.useEffect.fetchFiles": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch(`/api/drive/`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                folderId: resolvedParams.id
                            })
                        });
                        if (!response.ok) {
                            // Try to get the error message from the response
                            const errorData = await response.json().catch({
                                "DrivePage.useEffect.fetchFiles": ()=>({})
                            }["DrivePage.useEffect.fetchFiles"]);
                            const errorMessage = errorData.error || `HTTP ${response.status}: ${response.statusText}`;
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
                    } finally{
                        setLoading(false);
                    }
                }
            }["DrivePage.useEffect.fetchFiles"];
            if (resolvedParams.id) {
                fetchFiles();
            }
            // Cleanup function
            return ({
                "DrivePage.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('storage', handleStorageChange);
                        window.removeEventListener('bookmarks-updated', handleBookmarkUpdate);
                    }
                }
            })["DrivePage.useEffect"];
        }
    }["DrivePage.useEffect"], [
        resolvedParams.id
    ]);
    // helper handlers for bookmarks and sharing
    const handleAddBookmark = ()=>{
        if (!currentFolder) return;
        const bookmark = {
            id: currentFolder.id,
            name: currentFolder.name || `Folder ${currentFolder.id}`,
            type: 'folder',
            mimeType: 'application/vnd.google-apps.folder',
            path: `/drive/${currentFolder.id}`,
            createdAt: new Date().toISOString()
        };
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookmark"])(bookmark);
        setBookmarks(updated);
        // Trigger custom event for same-tab sync
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('bookmarks-updated'));
        }
        setToast("Folder bookmarked");
        setTimeout(()=>setToast(null), 1800);
    };
    const handleToggleBookmarks = ()=>setShowBookmarks((s)=>!s);
    const handleShareCurrent = async ()=>{
        if (!currentFolder || "object" === "undefined") return;
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
                setTimeout(()=>setToast(null), 1800);
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
        setTimeout(()=>setToast(null), 1800);
    };
    const handleOpenBookmark = (bookmark)=>{
        setShowBookmarks(false);
        if (bookmark.type === 'folder' && bookmark.id) {
            // Navigate to the folder
            router.push(`/drive/${bookmark.id}`);
        } else if (bookmark.type === 'file' && bookmark.parentFolderId) {
            // Navigate to the folder containing the file
            router.push(`/drive/${bookmark.parentFolderId}`);
        }
    };
    const handleDeleteBookmark = (id)=>{
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBookmark"])(id);
        setBookmarks(updated);
        // Trigger custom event for same-tab sync
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new CustomEvent('bookmarks-updated'));
        }
    };
    // Initialize breadcrumb from localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DrivePage.useEffect": ()=>{
            const storedBreadcrumb = getBreadcrumbFromStorage();
            setBreadcrumb(storedBreadcrumb);
        }
    }["DrivePage.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/drive/[id]/page.jsx",
            lineNumber: 287,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500",
                children: [
                    "Error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 293,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/drive/[id]/page.jsx",
            lineNumber: 292,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$lato_eabde2b4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__lato$3e$__["lato"].className + " px-4 lg:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#ffffff78] dark:bg-[#071a26] px-4 lg:px-6 py-8 rounded-lg shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "mb-6 p-1",
                                "aria-label": "Breadcrumb",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "flex items-center flex-wrap space-x-1 text-sm text-gray-600 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/drive",
                                                onClick: ()=>clearBreadcrumb(),
                                                className: "text-[12px] lg:text-[13px] flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-home mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Drive"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this),
                                        breadcrumb && breadcrumb.length > 0 && breadcrumb.map((folder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-chevron-right mx-1 text-gray-400 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this),
                                                    index === breadcrumb.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[12px] lg:text-[13px] font-medium text-gray-900 dark:text-gray-100 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-folder mr-1 text-blue-600 dark:text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25
                                                            }, this),
                                                            folder.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/drive/${folder.id}`,
                                                        onClick: ()=>{
                                                            // Truncate breadcrumb when clicking on a parent folder
                                                            const newBreadcrumb = breadcrumb.slice(0, index + 1);
                                                            saveBreadcrumbToStorage(newBreadcrumb);
                                                        },
                                                        className: "text-[12px] lg:text-[13px] flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-folder mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 339,
                                                                columnNumber: 25
                                                            }, this),
                                                            folder.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, folder.id, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl text-left font-bold text-gray-700 dark:text-gray-300",
                                        children: currentFolder ? currentFolder.name : "Drive Files"
                                    }, void 0, false, {
                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddBookmark,
                                                className: "text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-center cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-bookmark mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Bookmark"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleShareCurrent,
                                                className: "text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-center cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-share mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Share"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleToggleBookmarks,
                                                className: "text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-center cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-bookmark"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl text-center text-gray-700 dark:text-gray-300",
                                children: "No files found in this folder."
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 380,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                                children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 0.1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "p-4 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-pointer text-6xl",
                                                        onClick: ()=>{
                                                            if (file.mimeType.includes("folder")) {
                                                                // Don't add to breadcrumb here, let the useEffect handle it
                                                                router.push(`/drive/${file.id}`);
                                                            }
                                                        },
                                                        children: [
                                                            (file.mimeType.includes("image/png") || file.mimeType.includes("image/jpeg") || file.mimeType.includes("image/jpg") || file.mimeType.includes("image/gif") || file.mimeType.includes("image/bmp") || file.mimeType.includes("image/webp") || file.name?.toLowerCase().endsWith('.png') || file.name?.toLowerCase().endsWith('.jpg') || file.name?.toLowerCase().endsWith('.jpeg') || file.name?.toLowerCase().endsWith('.gif') || file.name?.toLowerCase().endsWith('.bmp') || file.name?.toLowerCase().endsWith('.webp')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-image text-cyan-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 420,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("video") || file.mimeType.includes("mp4") || file.name?.toLowerCase().endsWith('.mp4') || file.name?.toLowerCase().endsWith('.avi') || file.name?.toLowerCase().endsWith('.mov') || file.name?.toLowerCase().endsWith('.wmv') || file.name?.toLowerCase().endsWith('.flv') || file.name?.toLowerCase().endsWith('.webm') || file.name?.toLowerCase().endsWith('.mkv')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-video text-indigo-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 433,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("audio") || file.name?.toLowerCase().endsWith('.mp3') || file.name?.toLowerCase().endsWith('.wav') || file.name?.toLowerCase().endsWith('.flac') || file.name?.toLowerCase().endsWith('.aac') || file.name?.toLowerCase().endsWith('.ogg') || file.name?.toLowerCase().endsWith('.wma')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-audio text-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 444,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("pdf") || file.name?.toLowerCase().endsWith('.pdf')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-pdf text-red-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 450,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("document") || file.mimeType.includes("msword") || file.mimeType.includes("wordprocessingml") || file.name?.toLowerCase().endsWith('.doc') || file.name?.toLowerCase().endsWith('.docx') || file.name?.toLowerCase().endsWith('.rtf')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-word text-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 460,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("spreadsheet") || file.mimeType.includes("excel") || file.mimeType.includes("spreadsheetml") || file.name?.toLowerCase().endsWith('.xls') || file.name?.toLowerCase().endsWith('.xlsx') || file.name?.toLowerCase().endsWith('.csv')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-excel text-green-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 470,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("presentation") || file.mimeType.includes("powerpoint") || file.mimeType.includes("presentationml") || file.name?.toLowerCase().endsWith('.ppt') || file.name?.toLowerCase().endsWith('.pptx')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-powerpoint text-orange-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 479,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.mimeType.includes("text/plain") || file.name?.toLowerCase().endsWith('.txt') || file.name?.toLowerCase().endsWith('.log') || file.name?.toLowerCase().endsWith('.md') || file.name?.toLowerCase().endsWith('.readme')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-alt text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 488,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.name?.toLowerCase().endsWith('.js') || file.name?.toLowerCase().endsWith('.jsx') || file.name?.toLowerCase().endsWith('.ts') || file.name?.toLowerCase().endsWith('.tsx') || file.name?.toLowerCase().endsWith('.html') || file.name?.toLowerCase().endsWith('.css') || file.name?.toLowerCase().endsWith('.scss') || file.name?.toLowerCase().endsWith('.json') || file.name?.toLowerCase().endsWith('.xml') || file.name?.toLowerCase().endsWith('.py') || file.name?.toLowerCase().endsWith('.java') || file.name?.toLowerCase().endsWith('.cpp') || file.name?.toLowerCase().endsWith('.c') || file.name?.toLowerCase().endsWith('.php') || file.name?.toLowerCase().endsWith('.rb') || file.name?.toLowerCase().endsWith('.go') || file.name?.toLowerCase().endsWith('.rs')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-code text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 509,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.name?.toLowerCase().endsWith('.zip') || file.name?.toLowerCase().endsWith('.rar') || file.name?.toLowerCase().endsWith('.7z') || file.name?.toLowerCase().endsWith('.tar') || file.name?.toLowerCase().endsWith('.gz') || file.name?.toLowerCase().endsWith('.bz2')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-archive text-yellow-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 519,
                                                                columnNumber: 27
                                                            }, this),
                                                            (file.name?.toLowerCase().endsWith('.exe') || file.name?.toLowerCase().endsWith('.msi') || file.name?.toLowerCase().endsWith('.deb') || file.name?.toLowerCase().endsWith('.rpm') || file.name?.toLowerCase().endsWith('.dmg') || file.name?.toLowerCase().endsWith('.app')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-cog text-gray-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 529,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("folder") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/folder.svg",
                                                                alt: "File Icon",
                                                                width: 80,
                                                                height: 80
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 534,
                                                                columnNumber: 27
                                                            }, this),
                                                            !file.mimeType.includes("image") && !file.mimeType.includes("video") && !file.mimeType.includes("audio") && !file.mimeType.includes("pdf") && !file.mimeType.includes("document") && !file.mimeType.includes("msword") && !file.mimeType.includes("wordprocessingml") && !file.mimeType.includes("spreadsheet") && !file.mimeType.includes("excel") && !file.mimeType.includes("spreadsheetml") && !file.mimeType.includes("presentation") && !file.mimeType.includes("powerpoint") && !file.mimeType.includes("presentationml") && !file.mimeType.includes("text/plain") && !file.mimeType.includes("folder") && !file.name?.toLowerCase().match(/\.(png|jpg|jpeg|gif|bmp|webp|mp4|avi|mov|wmv|flv|webm|mkv|mp3|wav|flac|aac|ogg|wma|pdf|doc|docx|rtf|xls|xlsx|csv|ppt|pptx|txt|log|md|readme|js|jsx|ts|tsx|html|css|scss|json|xml|py|java|cpp|c|php|rb|go|rs|zip|rar|7z|tar|gz|bz2|exe|msi|deb|rpm|dmg|app)$/) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 559,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-lg text-gray-700 dark:text-gray-300 text-wrap truncate",
                                                        children: file.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 563,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 396,
                                                columnNumber: 21
                                            }, this),
                                            !file.mimeType.includes("folder") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 w-full px-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1",
                                                    children: [
                                                        file.webContentLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: file.webContentLink,
                                                            className: "flex-1 text-center py-2 px-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 group",
                                                            title: "Download",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-download text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 579,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                                            lineNumber: 574,
                                                            columnNumber: 29
                                                        }, this),
                                                        file.webContentLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPreviewId(previewID === file.id ? null : file.id),
                                                            className: "flex-1 text-center py-2 px-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 group",
                                                            title: file.mimeType.includes("mp4") ? "Play" : "Preview",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-eye text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 594,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                                            lineNumber: 585,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                // bookmark individual file
                                                                const bookmark = {
                                                                    id: file.id,
                                                                    name: file.name,
                                                                    type: 'file',
                                                                    mimeType: file.mimeType,
                                                                    path: file.webContentLink || `/drive/${file.id}`,
                                                                    parentFolderId: currentFolder?.id || resolvedParams.id,
                                                                    createdAt: new Date().toISOString()
                                                                };
                                                                const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookmark"])(bookmark);
                                                                setBookmarks(updated);
                                                                // Trigger custom event for same-tab sync
                                                                if ("TURBOPACK compile-time truthy", 1) {
                                                                    window.dispatchEvent(new CustomEvent('bookmarks-updated'));
                                                                }
                                                                setToast("File bookmarked");
                                                                setTimeout(()=>setToast(null), 1500);
                                                            },
                                                            className: "flex-1 text-center py-2 px-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 group",
                                                            title: "Bookmark",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-bookmark text-gray-600 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 625,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                                            lineNumber: 599,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: async ()=>{
                                                                const url = file.webContentLink || `${("TURBOPACK compile-time truthy", 1) ? window.location.origin : ("TURBOPACK unreachable", undefined)}/drive/${file.id}`;
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
                                                                        setTimeout(()=>setToast(null), 1500);
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
                                                                setTimeout(()=>setToast(null), 1500);
                                                            },
                                                            className: "flex-1 text-center py-2 px-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 group",
                                                            title: "Share",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-share text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 698,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                                            lineNumber: 629,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                                    lineNumber: 571,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 570,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, file.id, true, {
                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                        lineNumber: 386,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 384,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/drive/[id]/page.jsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/drive/[id]/page.jsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 712,
                columnNumber: 7
            }, this),
            previewID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-75 flex items-center justify-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPreviewId(null),
                        className: "absolute top-4 lg:top-7 left-3 lg:left-9 size-10 bg-slate-800 rounded-full text-gray-300 text-2xl cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fas fa-times"
                        }, void 0, false, {
                            fileName: "[project]/app/drive/[id]/page.jsx",
                            lineNumber: 721,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/drive/[id]/page.jsx",
                        lineNumber: 717,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: `https://drive.google.com/file/d/${previewID}/preview`,
                        width: "100%",
                        height: "100%",
                        allow: "autoplay",
                        className: "rounded-lg shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/app/drive/[id]/page.jsx",
                        lineNumber: 723,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 716,
                columnNumber: 9
            }, this),
            showBookmarks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drive$2f$bookmarks$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bookmarks: bookmarks,
                onOpen: handleOpenBookmark,
                onDelete: handleDeleteBookmark,
                onCopy: async (b)=>{
                    const url = `${("TURBOPACK compile-time truthy", 1) ? window.location.origin : ("TURBOPACK unreachable", undefined)}/drive/${b.id}`;
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
                            setTimeout(()=>setToast(null), 1600);
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
                    setTimeout(()=>setToast(null), 1600);
                },
                onClose: ()=>setShowBookmarks(false)
            }, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 735,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-1/2 -translate-x-1/2 bottom-8 z-50 bg-black text-white px-4 py-2 rounded",
                children: toast
            }, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 810,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DrivePage, "GW4E4wrh1gihS9QKL3sdJnrzpO4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DrivePage;
var _c;
__turbopack_context__.k.register(_c, "DrivePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__61c5457f._.js.map