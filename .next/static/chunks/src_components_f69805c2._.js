(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/About/About.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "bentoBox": "About-module__S-Ka5a__bentoBox",
  "cardTitle": "About-module__S-Ka5a__cardTitle",
  "carousel": "About-module__S-Ka5a__carousel",
  "carouselContainer": "About-module__S-Ka5a__carouselContainer",
  "carouselTrack": "About-module__S-Ka5a__carouselTrack",
  "container": "About-module__S-Ka5a__container",
  "cvButton": "About-module__S-Ka5a__cvButton",
  "cvIcon": "About-module__S-Ka5a__cvIcon",
  "experienceCard": "About-module__S-Ka5a__experienceCard",
  "experienceCompany": "About-module__S-Ka5a__experienceCompany",
  "experienceDate": "About-module__S-Ka5a__experienceDate",
  "experienceItem": "About-module__S-Ka5a__experienceItem",
  "experienceLabel": "About-module__S-Ka5a__experienceLabel",
  "experienceList": "About-module__S-Ka5a__experienceList",
  "experienceNumber": "About-module__S-Ka5a__experienceNumber",
  "experienceTitle": "About-module__S-Ka5a__experienceTitle",
  "funFactCard": "About-module__S-Ka5a__funFactCard",
  "funFactContent": "About-module__S-Ka5a__funFactContent",
  "funFactLabel": "About-module__S-Ka5a__funFactLabel",
  "funFactNumber": "About-module__S-Ka5a__funFactNumber",
  "funFactText": "About-module__S-Ka5a__funFactText",
  "highlight": "About-module__S-Ka5a__highlight",
  "highlightIcon": "About-module__S-Ka5a__highlightIcon",
  "language": "About-module__S-Ka5a__language",
  "languagesCard": "About-module__S-Ka5a__languagesCard",
  "languagesList": "About-module__S-Ka5a__languagesList",
  "learningCard": "About-module__S-Ka5a__learningCard",
  "learningItem": "About-module__S-Ka5a__learningItem",
  "learningList": "About-module__S-Ka5a__learningList",
  "profileActions": "About-module__S-Ka5a__profileActions",
  "profileAvatar": "About-module__S-Ka5a__profileAvatar",
  "profileBody": "About-module__S-Ka5a__profileBody",
  "profileCard": "About-module__S-Ka5a__profileCard",
  "profileContent": "About-module__S-Ka5a__profileContent",
  "profileDescription": "About-module__S-Ka5a__profileDescription",
  "profileFooter": "About-module__S-Ka5a__profileFooter",
  "profileHeader": "About-module__S-Ka5a__profileHeader",
  "profileHighlights": "About-module__S-Ka5a__profileHighlights",
  "profileSubtitle": "About-module__S-Ka5a__profileSubtitle",
  "profileTextColumn": "About-module__S-Ka5a__profileTextColumn",
  "profileTitle": "About-module__S-Ka5a__profileTitle",
  "profileTitleRow": "About-module__S-Ka5a__profileTitleRow",
  "scroll": "About-module__S-Ka5a__scroll",
  "skillIcon": "About-module__S-Ka5a__skillIcon",
  "skillItem": "About-module__S-Ka5a__skillItem",
  "skillName": "About-module__S-Ka5a__skillName",
  "skillsCard": "About-module__S-Ka5a__skillsCard",
  "skillsGrid": "About-module__S-Ka5a__skillsGrid",
  "vinciInCard": "About-module__S-Ka5a__vinciInCard",
  "vinciSvg": "About-module__S-Ka5a__vinciSvg",
});
}}),
"[project]/src/components/About/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>About)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/About/About.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function About({ className }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleOpenCV = ()=>{
        router.push('/cv');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about} ${className || ''}`,
        id: "about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bentoBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContent,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTextColumn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTitleRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatar,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/ppf3.png",
                                                            alt: "Alexandros Soteriou",
                                                            width: 100,
                                                            height: 100,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatar,
                                                            priority: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/About/About.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTitle,
                                                        children: "Alexandros Soteriou"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSubtitle,
                                                children: "Full-Stack Developer & UI/UX Designer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileBody,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDescription,
                                            children: [
                                                "Specialized in building scalable web applications with modern technologies. I combine technical expertise with design thinking to create digital experiences that are both beautiful and performant.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/About/About.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/About/About.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this),
                                                "With a passion for clean code and innovative solutions, I focus on delivering exceptional user experiences through thoughtful development and design."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About/About.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileFooter,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileActions,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                    fileName: "[project]/src/components/About/About.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleOpenCV,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cvButton,
                                                    "aria-label": "View CV",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cvIcon,
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/About/About.tsx",
                                                                    lineNumber: 77,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "7,10 12,15 17,10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/About/About.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "15",
                                                                    x2: "12",
                                                                    y2: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/About/About.tsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/About/About.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this),
                                                        "CV"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/About/About.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About/About.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/About/About.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/About/About.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillsCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Techstack"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselTrack,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/react.svg",
                                                        alt: "React",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "React"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/Nextjs.svg",
                                                        alt: "Next.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Next.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/typescript (1).svg",
                                                        alt: "TypeScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "TypeScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/node.svg",
                                                        alt: "Node.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Node.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/css (1).svg",
                                                        alt: "CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "CSS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/javascript (1).svg",
                                                        alt: "JavaScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "JavaScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/html5.svg",
                                                        alt: "HTML5",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "HTML5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/tailwindcss.svg",
                                                        alt: "Tailwind CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Tailwind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/git (1).svg",
                                                        alt: "Git",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Git"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/github_dark.svg",
                                                        alt: "GitHub",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/figma (2).svg",
                                                        alt: "Figma",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Figma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/supabase.svg",
                                                        alt: "Supabase",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Supabase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/react.svg",
                                                        alt: "React",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "React"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/Nextjs.svg",
                                                        alt: "Next.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Next.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/typescript (1).svg",
                                                        alt: "TypeScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "TypeScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/node.svg",
                                                        alt: "Node.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Node.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/css (1).svg",
                                                        alt: "CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "CSS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/javascript (1).svg",
                                                        alt: "JavaScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "JavaScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/html5.svg",
                                                        alt: "HTML5",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "HTML5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/tailwindcss.svg",
                                                        alt: "Tailwind CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Tailwind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 292,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/git (1).svg",
                                                        alt: "Git",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Git"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/github_dark.svg",
                                                        alt: "GitHub",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/figma (2).svg",
                                                        alt: "Figma",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Figma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/supabase.svg",
                                                        alt: "Supabase",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Supabase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About/About.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About/About.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About/About.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "3+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Years Coding"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "20+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "10+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Technologies"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "5+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Clients"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About/About.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About/About.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].languagesCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Languages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].languagesList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "Greek"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "English"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "Russian"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "German"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About/About.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Currently Learning"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "Three.js"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "WebGL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "Rust"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About/About.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].funFactCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].funFactContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: "Fun Fact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].funFactText,
                                        children: "I love combining creativity with code to build unique digital experiences! ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About/About.tsx",
                                        lineNumber: 395,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vinciInCard,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Vinci.png",
                                    alt: "Da Vinci Vitruvian Man ornament",
                                    width: 300,
                                    height: 300,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vinciSvg} ${theme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vinciDark : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vinciLight}`,
                                    priority: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About/About.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About/About.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About/About.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About/About.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/About/About.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/About/About.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(About, "WoZadmVgHGVrJ+uqvWVQ3r2U2jA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ThemeToggle/ThemeToggle.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "thumb": "ThemeToggle-module__Z5gSZG__thumb",
  "thumbDark": "ThemeToggle-module__Z5gSZG__thumbDark",
  "thumbLight": "ThemeToggle-module__Z5gSZG__thumbLight",
  "toggle": "ThemeToggle-module__Z5gSZG__toggle",
  "track": "ThemeToggle-module__Z5gSZG__track",
});
}}),
"[project]/src/components/ThemeToggle/ThemeToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ThemeToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle/ThemeToggle.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeToggle({ className }) {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle} ${className || ''}`,
        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        title: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb} ${theme === 'light' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbLight : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbDark}`
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle/ThemeToggle.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle/ThemeToggle.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeToggle/ThemeToggle.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_f69805c2._.js.map