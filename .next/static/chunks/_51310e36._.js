(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/resources/resources-header.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResourcesHeader": (()=>ResourcesHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$details$2f$nodename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/details/nodename.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NODE_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$details$2f$nodename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function ResourcesHeader() {
    _s();
    const [headerData, setHeaderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "Academic Resources",
        description: "Access comprehensive study materials, course resources, and academic guides for all years of your CSE journey at RUET."
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesHeader.useEffect": ()=>{
            const loadHeaderData = {
                "ResourcesHeader.useEffect.loadHeaderData": async ()=>{
                    try {
                        const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `resources/${NODE_NAME}/pageData/header`);
                        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(pageRef);
                        if (snapshot.exists()) {
                            const data = snapshot.val();
                            setHeaderData(data);
                        }
                    } catch (error) {
                        console.error('Failed to load header data:', error);
                    // Keep default data
                    }
                }
            }["ResourcesHeader.useEffect.loadHeaderData"];
            loadHeaderData();
        }
    }["ResourcesHeader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-nowrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-gray-500 dark:to-neutral-400 dark:from-neutral-200",
                    children: headerData.title
                }, void 0, false, {
                    fileName: "[project]/components/resources/resources-header.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/resources/resources-header.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-md font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-3xl mx-auto",
                children: headerData.description
            }, void 0, false, {
                fileName: "[project]/components/resources/resources-header.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/resources/resources-header.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ResourcesHeader, "P2ELMhQ188cMwHZTcyEt9XX0vGM=");
_c = ResourcesHeader;
var _c;
__turbopack_context__.k.register(_c, "ResourcesHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/resource-card-links.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResourceCardLinks": (()=>ResourceCardLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ResourceCardLinks({ links }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3",
        children: links.map((link, index)=>{
            const isDisabled = !link.url || link.url === "";
            const baseClasses = "w-full rounded-md px-3 py-2 text-center font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";
            if (isDisabled) {
                // Render a non-interactive button for disabled state for better a11y
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `${baseClasses} bg-transparent border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed`,
                    "aria-disabled": "true",
                    tabIndex: -1,
                    "aria-label": `${link.label} (coming soon)`,
                    onClick: (e)=>{
                        e.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Link not ready yet!");
                    },
                    children: link.label
                }, index, false, {
                    fileName: "[project]/components/resources/resource-card-links.jsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: link.url,
                className: `${baseClasses} bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-blue-400 dark:focus:ring-blue-600`,
                "aria-label": link.label,
                children: link.label
            }, index, false, {
                fileName: "[project]/components/resources/resource-card-links.jsx",
                lineNumber: 36,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/resources/resource-card-links.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ResourceCardLinks;
var _c;
__turbopack_context__.k.register(_c, "ResourceCardLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/resource-card-optimized.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResourceCard": (()=>ResourceCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resource$2d$card$2d$links$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/resource-card-links.jsx [app-client] (ecmascript)");
;
;
;
function ResourceCard({ id, title, description, image, links }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "resource-card mx-auto lg:max-w-[350px] md:max-w-[300px] h-[485px] max-w-full bg-white dark:bg-[#071a26]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "w-full h-48 object-cover rounded-t",
                src: image,
                alt: title,
                sizes: "(max-width: 768px) 290px, (max-width: 1024px) 300px, 330px",
                placeholder: "blur",
                priority: id <= 2
            }, void 0, false, {
                fileName: "[project]/components/resources/resource-card-optimized.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-gray-200",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/resources/resource-card-optimized.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 max-h-[150px] text-justify text-gray-700 dark:text-gray-400 leading-relaxed text-sm",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/resources/resource-card-optimized.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resource$2d$card$2d$links$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceCardLinks"], {
                        links: links
                    }, void 0, false, {
                        fileName: "[project]/components/resources/resource-card-optimized.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/resources/resource-card-optimized.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/resources/resource-card-optimized.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ResourceCard;
var _c;
__turbopack_context__.k.register(_c, "ResourceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/resources/image0.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/image0.eca5cfc6.jpg");}}),
"[project]/public/images/resources/image0.jpg.mjs { IMAGE => \"[project]/public/images/resources/image0.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/resources/image0.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 1280,
    height: 719,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AHlrP3mShXq83YO51ZK/2KzE142cn0ZlZQCbhWGwmneelHl6eFuimIBvbld8eGBBTzsAwptqi3lahnpfXGNMc3ReQlI/TlpIZmVKAGxmUCs2IlhZTnp9dWhzbU9lYTZZVCdQR31xKyGQnAB/AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/resources/image1.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/image1.1235bf9f.jpg");}}),
"[project]/public/images/resources/image1.jpg.mjs { IMAGE => \"[project]/public/images/resources/image1.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/resources/image1.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 881,
    height: 495,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCZGZEO13BGRu3nJ4HvWSV5WJi9j//Z",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/resources/image2.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/image2.8922e7ff.jpg");}}),
"[project]/public/images/resources/image2.jpg.mjs { IMAGE => \"[project]/public/images/resources/image2.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/resources/image2.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 1280,
    height: 719,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDE1uRrWzVo8E+b5YLD+HFJwVi6UnOfK/M//9k=",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/resources/image3.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/image3.762bf8ed.jpg");}}),
"[project]/public/images/resources/image3.jpg.mjs { IMAGE => \"[project]/public/images/resources/image3.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/resources/image3.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 620,
    height: 348,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDRl1G4m0NtRJVbn7Y6b1GMANgfoB+VeNVpQWHVkdE2+ex//9k=",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/resources/image4.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/image4.17a539a8.jpg");}}),
"[project]/public/images/resources/image4.jpg.mjs { IMAGE => \"[project]/public/images/resources/image4.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/resources/image4.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 498,
    height: 280,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AH7Y222vplVTTXJoYGlkW01aQyU7JhMoGwBdhW1SX0ljSUeWd3O4rqCenYtEQzQ4SjQAg4Z0eHNhYFFLfFtWn2Rot4yOkH5phJB1AHV0d4B7eXhsYl9XVmsnLoNKVKSKfrKgjMdWKMkUARv7AAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/resources-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getResourcesData": (()=>getResourcesData),
    "resourcesData": (()=>resourcesData),
    "resourcesMetadata": (()=>resourcesMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/resources/image0.jpg.mjs { IMAGE => "[project]/public/images/resources/image0.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/resources/image1.jpg.mjs { IMAGE => "[project]/public/images/resources/image1.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/resources/image2.jpg.mjs { IMAGE => "[project]/public/images/resources/image2.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/resources/image3.jpg.mjs { IMAGE => "[project]/public/images/resources/image3.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/resources/image4.jpg.mjs { IMAGE => "[project]/public/images/resources/image4.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$details$2f$nodename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/details/nodename.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// Static images mapping
const resourceImages = [
    __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
];
const NODE_NAME = __TURBOPACK__imported__module__$5b$project$5d2f$details$2f$nodename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Fallback static data (used if Firebase fails) - Updated structure
const fallbackResourcesData = [
    {
        id: 1,
        title: "1st Year Resources",
        description: "Just entered the matrix? Here's your starter pack: C programming, logic gates, and enough math to question your existence. Escape infinite loops early!",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image0$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        links: [
            {
                label: "1 - 1",
                url: "/drive/1xbyCdj3XQ9AsCCF8ImI13HCo25JEhgUJ"
            },
            {
                label: "1 - 2",
                url: ""
            }
        ]
    },
    {
        id: 2,
        title: "2nd Year Resources",
        description: "You've compiled your basics — now get ready for bugs that don't show errors! Dive into 'why won't this code run?!' energy.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image1$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        links: [
            {
                label: "2 - 1",
                url: ""
            },
            {
                label: "2 - 2",
                url: ""
            }
        ]
    },
    {
        id: 3,
        title: "3rd Year Resources",
        description: "Code is life now. OS deadlocks, Git merge conflicts, and your first real project where 'it works on my machine' is a valid excuse. Enjoy the chaos!",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        links: [
            {
                label: "3 - 1",
                url: ""
            },
            {
                label: "3 - 2",
                url: ""
            }
        ]
    },
    {
        id: 4,
        title: "4th Year Resources",
        description: "You're almost out! But wait — there's ML models, thesis panic, final year projects, and last-minute internship hunts. Now's the time to pretend you know everything.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image3$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        links: [
            {
                label: "4 - 1",
                url: ""
            },
            {
                label: "4 - 2",
                url: ""
            }
        ]
    },
    {
        id: 5,
        title: "Higher Studies & Internship Details",
        description: "Want to escape the 9-to-5 matrix? Whether it's GRE stress or internship ghosting — we got the hacks. Also, don't forget to update your LinkedIn.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$resources$2f$image4$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        links: [
            {
                label: "Read more",
                url: ""
            }
        ]
    }
];
async function getResourcesData() {
    try {
        const resourcesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `resources/${NODE_NAME}/resources`);
        const pageDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `resources/${NODE_NAME}/pageData/cards`);
        const [resourcesSnapshot, pageDataSnapshot] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(resourcesRef),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(pageDataRef)
        ]);
        // Get card titles and descriptions from pageData if available
        let cardData = [
            {
                title: "1st Year Resources",
                description: "Just entered the matrix? Here's your starter pack: C programming, logic gates, and enough math to question your existence. Escape infinite loops early!"
            },
            {
                title: "2nd Year Resources",
                description: "You've compiled your basics — now get ready for bugs that don't show errors! Dive into 'why won't this code run?!' energy."
            },
            {
                title: "3rd Year Resources",
                description: "Code is life now. OS deadlocks, Git merge conflicts, and your first real project where 'it works on my machine' is a valid excuse. Enjoy the chaos!"
            },
            {
                title: "4th Year Resources",
                description: "You're almost out! But wait — there's ML models, thesis panic, final year projects, and last-minute internship hunts. Now's the time to pretend you know everything."
            },
            {
                title: "Higher Studies & Internship Details",
                description: "Want to escape the 9-to-5 matrix? Whether it's GRE stress or internship ghosting — we got the hacks. Also, don't forget to update your LinkedIn."
            }
        ];
        // Override with admin-edited data if available
        if (pageDataSnapshot.exists()) {
            const adminCardData = pageDataSnapshot.val();
            cardData = adminCardData;
        }
        if (resourcesSnapshot.exists()) {
            const firebaseData = resourcesSnapshot.val();
            // Convert Firebase structure (resources/1-1/A) to resources data
            const resourcesWithLinks = cardData.map((cardInfo, index)=>({
                    id: index + 1,
                    title: cardInfo.title,
                    description: cardInfo.description,
                    image: resourceImages[index],
                    links: []
                }));
            // Map Firebase data to resources structure
            // 1st Year: 1-1, 1-2
            const firstYearSemesters = [
                '1-1',
                '1-2'
            ];
            firstYearSemesters.forEach((semester)=>{
                if (firebaseData[semester]) {
                    [
                        'A',
                        'B',
                        'C'
                    ].forEach((variant)=>{
                        if (firebaseData[semester][variant]) {
                            resourcesWithLinks[0].links.push({
                                label: `${semester} - ${variant}`,
                                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
                            });
                        }
                    });
                }
            });
            // 2nd Year: 2-1, 2-2  
            const secondYearSemesters = [
                '2-1',
                '2-2'
            ];
            secondYearSemesters.forEach((semester)=>{
                if (firebaseData[semester]) {
                    [
                        'A',
                        'B',
                        'C'
                    ].forEach((variant)=>{
                        if (firebaseData[semester][variant]) {
                            resourcesWithLinks[1].links.push({
                                label: `${semester} - ${variant}`,
                                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
                            });
                        }
                    });
                }
            });
            // 3rd Year: 3-1, 3-2
            const thirdYearSemesters = [
                '3-1',
                '3-2'
            ];
            thirdYearSemesters.forEach((semester)=>{
                if (firebaseData[semester]) {
                    [
                        'A',
                        'B',
                        'C'
                    ].forEach((variant)=>{
                        if (firebaseData[semester][variant]) {
                            resourcesWithLinks[2].links.push({
                                label: `${semester} - ${variant}`,
                                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
                            });
                        }
                    });
                }
            });
            // 4th Year: 4-1, 4-2
            const fourthYearSemesters = [
                '4-1',
                '4-2'
            ];
            fourthYearSemesters.forEach((semester)=>{
                if (firebaseData[semester]) {
                    [
                        'A',
                        'B',
                        'C'
                    ].forEach((variant)=>{
                        if (firebaseData[semester][variant]) {
                            resourcesWithLinks[3].links.push({
                                label: `${semester} - ${variant}`,
                                url: `/drive/${firebaseData[semester][variant]}` // Convert to internal drive URL
                            });
                        }
                    });
                }
            });
            // Higher Studies
            if (firebaseData['higher-studies']) {
                [
                    'A',
                    'B',
                    'C'
                ].forEach((variant)=>{
                    if (firebaseData['higher-studies'][variant]) {
                        resourcesWithLinks[4].links.push({
                            label: variant === 'A' ? 'Higher Studies' : variant === 'B' ? 'Internships' : 'Career Guide',
                            url: `/drive/${firebaseData['higher-studies'][variant]}` // Convert to internal drive URL
                        });
                    }
                });
            }
            // Add fallback empty links if no links found
            resourcesWithLinks.forEach((resource, index)=>{
                if (resource.links.length === 0) {
                    if (index < 4) {
                        const year = index + 1;
                        resource.links = [
                            {
                                label: `${year} - 1`,
                                url: ""
                            },
                            {
                                label: `${year} - 2`,
                                url: ""
                            }
                        ];
                    } else {
                        resource.links = [
                            {
                                label: "Read more",
                                url: ""
                            }
                        ];
                    }
                }
            });
            return resourcesWithLinks;
        } else {
            console.warn('No resources data found in Firebase, using fallback data');
            return cardData.map((cardInfo, index)=>({
                    id: index + 1,
                    title: cardInfo.title,
                    description: cardInfo.description,
                    image: resourceImages[index],
                    links: index < 4 ? [
                        {
                            label: `${index + 1} - 1`,
                            url: ""
                        },
                        {
                            label: `${index + 1} - 2`,
                            url: ""
                        }
                    ] : [
                        {
                            label: "Read more",
                            url: ""
                        }
                    ]
                }));
        }
    } catch (error) {
        console.error('Error fetching resources from Firebase:', error);
        return fallbackResourcesData;
    }
}
const resourcesData = fallbackResourcesData;
const resourcesMetadata = {
    title: "Academic Resources || RUET CSE Archive",
    description: "Access comprehensive study materials, course resources, and academic guides for all years of your CSE journey at RUET.",
    keywords: [
        "RUET",
        "CSE",
        "academic resources",
        "study materials",
        "computer science",
        "engineering"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/resources/resources-grid-super-optimized.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ResourcesGridOptimized": (()=>ResourcesGridOptimized)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resource$2d$card$2d$optimized$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/resource-card-optimized.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/resources-data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ResourcesGridOptimized() {
    _s();
    const [resources, setResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourcesData"]); // Start with static data
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesGridOptimized.useEffect": ()=>{
            const fetchResources = {
                "ResourcesGridOptimized.useEffect.fetchResources": async ()=>{
                    try {
                        const dynamicResources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourcesData"])();
                        setResources(dynamicResources);
                    } catch (error) {
                        console.error('Failed to fetch resources:', error);
                    // Keep static data as fallback
                    } finally{
                        setLoading(false);
                    }
                }
            }["ResourcesGridOptimized.useEffect.fetchResources"];
            fetchResources();
        }
    }["ResourcesGridOptimized.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5",
                children: Array.from({
                    length: 5
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-sm border animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-48 bg-gray-200 rounded-t-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-200 rounded mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-200 rounded mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 bg-gray-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-8 bg-gray-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 animate-fade-in",
            children: resources.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "opacity-0 animate-slide-up",
                    style: {
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resource$2d$card$2d$optimized$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceCard"], {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        image: item.image,
                        links: item.links
                    }, void 0, false, {
                        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                }, item.id, false, {
                    fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/resources/resources-grid-super-optimized.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ResourcesGridOptimized, "03oB2hQ9azJV/+xfkgYNdi0QryU=");
_c = ResourcesGridOptimized;
var _c;
__turbopack_context__.k.register(_c, "ResourcesGridOptimized");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Resources)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/resources-header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$grid$2d$super$2d$optimized$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/resources-grid-super-optimized.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/resources/resources-data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Shimmer loading component for main page elements
function MainPageShimmer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen animate-pulse",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-12 md:h-16 lg:h-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-4 mx-auto w-3/4 bg-animate-shimmer"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2 mx-auto w-2/3 bg-animate-shimmer"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mx-auto w-1/2 bg-animate-shimmer"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5",
                        children: Array.from({
                            length: 5
                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-sm border",
                                style: {
                                    animationDelay: `${index * 200}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-t-2xl bg-animate-shimmer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 bg-animate-shimmer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 37,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded bg-animate-shimmer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 38,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.jsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = MainPageShimmer;
function Resources() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Set page title and meta description for client-side routing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Resources.useEffect": ()=>{
            document.title = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourcesMetadata"].title;
            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourcesMetadata"].description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourcesMetadata"].description;
                document.head.appendChild(meta);
            }
            // Update meta keywords
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourcesMetadata"].keywords.join(", "));
            } else {
                const meta = document.createElement('meta');
                meta.name = 'keywords';
                meta.content = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resourcesMetadata"].keywords.join(", ");
                document.head.appendChild(meta);
            }
            // Simulate loading time for shimmer effect
            const timer = setTimeout({
                "Resources.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Resources.useEffect.timer"], 1500); // 1.5 seconds of shimmer
            return ({
                "Resources.useEffect": ()=>clearTimeout(timer)
            })["Resources.useEffect"];
        }
    }["Resources.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainPageShimmer, {}, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 89,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourcesHeader"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$resources$2f$resources$2d$grid$2d$super$2d$optimized$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourcesGridOptimized"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(Resources, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c1 = Resources;
var _c, _c1;
__turbopack_context__.k.register(_c, "MainPageShimmer");
__turbopack_context__.k.register(_c1, "Resources");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_51310e36._.js.map