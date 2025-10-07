(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/bookmarks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Simple localStorage helpers for drive bookmarks
__turbopack_context__.s({
    "addBookmark": (()=>addBookmark),
    "default": (()=>__TURBOPACK__default__export__),
    "getBookmarks": (()=>getBookmarks),
    "isBookmarked": (()=>isBookmarked),
    "removeBookmark": (()=>removeBookmark)
});
const KEY = "driveBookmarks";
function safeParse(raw) {
    try {
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.warn("Failed to parse bookmarks", e);
        return [];
    }
}
function getBookmarks() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const raw = localStorage.getItem(KEY);
    return safeParse(raw);
}
function addBookmark(bookmark) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const current = getBookmarks();
    // prevent duplicates by id
    const exists = current.find((b)=>b.id === bookmark.id);
    if (exists) return current;
    const updated = [
        bookmark,
        ...current
    ];
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
}
function removeBookmark(id) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const current = getBookmarks();
    const updated = current.filter((b)=>b.id !== id);
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
}
function isBookmarked(id) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const current = getBookmarks();
    return current.some((b)=>b.id === id);
}
const __TURBOPACK__default__export__ = {
    getBookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked
};
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
(()=>{
    const e = new Error("Cannot find module '@/components/drive/bookmarks'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
            try {
                const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookmarks"])();
                setBookmarks(stored || []);
            } catch (e) {
                console.warn("Failed to load bookmarks:", e);
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
            path: `/drive/${currentFolder.id}`,
            createdAt: new Date().toISOString()
        };
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBookmark"])(bookmark);
        setBookmarks(updated);
        setToast("Bookmark saved");
        setTimeout(()=>setToast(null), 1800);
    };
    const handleToggleBookmarks = ()=>setShowBookmarks((s)=>!s);
    const handleShareCurrent = async ()=>{
        if (!currentFolder || "object" === "undefined") return;
        const url = `${window.location.origin}/drive/${currentFolder.id}`;
        try {
            await navigator.clipboard.writeText(url);
            setToast("Link copied to clipboard");
            setTimeout(()=>setToast(null), 1800);
        } catch (e) {
            console.error("Clipboard error", e);
            setToast("Failed to copy link");
            setTimeout(()=>setToast(null), 1800);
        }
    };
    const handleOpenBookmark = (bookmark)=>{
        setShowBookmarks(false);
        if (bookmark && bookmark.id) {
            router.push(`/drive/${bookmark.id}`);
        }
    };
    const handleDeleteBookmark = (id)=>{
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$bookmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBookmark"])(id);
        setBookmarks(updated);
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
            lineNumber: 187,
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
                lineNumber: 193,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/drive/[id]/page.jsx",
            lineNumber: 192,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 201,
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
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Drive"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        breadcrumb && breadcrumb.length > 0 && breadcrumb.map((folder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fas fa-chevron-right mx-1 text-gray-400 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this),
                                                    index === breadcrumb.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[12px] lg:text-[13px] font-medium text-gray-900 dark:text-gray-100 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-folder mr-1 text-blue-600 dark:text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 226,
                                                                columnNumber: 25
                                                            }, this),
                                                            folder.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 225,
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
                                                                lineNumber: 239,
                                                                columnNumber: 25
                                                            }, this),
                                                            folder.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, folder.id, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl text-center font-bold mb-6 text-gray-700 dark:text-gray-300",
                                children: currentFolder ? currentFolder.name : "Drive Files"
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl text-center text-gray-700 dark:text-gray-300",
                                children: "No files found in this folder."
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 253,
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
                                                            (file.mimeType.includes("image/png") || file.mimeType.includes("image/jpeg")) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-image text-cyan-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 282,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("mp4") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-video text-indigo-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 285,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("pdf") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-pdf text-red-500  "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 288,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("documentml") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-word text-blue-500  "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 291,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("spreadsheetml") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-excel text-green-500  "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 294,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("presentationml") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-file-powerpoint text-orange-500  "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 297,
                                                                columnNumber: 27
                                                            }, this),
                                                            file.mimeType.includes("folder") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/folder.svg",
                                                                alt: "File Icon",
                                                                width: 80,
                                                                height: 80
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                                lineNumber: 300,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-lg text-gray-700 dark:text-gray-300 text-wrap truncate",
                                                        children: file.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 269,
                                                columnNumber: 21
                                            }, this),
                                            file.webContentLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 w-full px-6 lg:px-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2 lg:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: file.webContentLink,
                                                            className: "flex-1 text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-1 py-1.5 rounded-full text-center cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-download mr-1 text-xs font-medium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Download"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                                            lineNumber: 317,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPreviewId(previewID === file.id ? null : file.id),
                                                            className: "flex-1 text-[12px] border-2 border-gray-500 active:scale-95 transition-transform duration-300 text-gray-700 dark:text-gray-200 px-1 py-1.5 rounded-full text-center cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-eye text-xs mr-1 font-medium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 29
                                                                }, this),
                                                                file.mimeType.includes("mp4") ? "Play" : "Preview"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/drive/[id]/page.jsx",
                                                            lineNumber: 324,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/drive/[id]/page.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/drive/[id]/page.jsx",
                                                lineNumber: 315,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, file.id, true, {
                                        fileName: "[project]/app/drive/[id]/page.jsx",
                                        lineNumber: 259,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/drive/[id]/page.jsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/drive/[id]/page.jsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/drive/[id]/page.jsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 347,
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
                            lineNumber: 356,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/drive/[id]/page.jsx",
                        lineNumber: 352,
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
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/drive/[id]/page.jsx",
                lineNumber: 351,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__5f26fe75._.js.map