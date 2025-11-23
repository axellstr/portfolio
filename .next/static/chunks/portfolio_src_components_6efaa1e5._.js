(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/components/About/About.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bentoBox": "About-module__Vd__5a__bentoBox",
  "cardTitle": "About-module__Vd__5a__cardTitle",
  "carousel": "About-module__Vd__5a__carousel",
  "carouselContainer": "About-module__Vd__5a__carouselContainer",
  "carouselTrack": "About-module__Vd__5a__carouselTrack",
  "container": "About-module__Vd__5a__container",
  "cvButton": "About-module__Vd__5a__cvButton",
  "cvIcon": "About-module__Vd__5a__cvIcon",
  "experienceCard": "About-module__Vd__5a__experienceCard",
  "experienceCompany": "About-module__Vd__5a__experienceCompany",
  "experienceDate": "About-module__Vd__5a__experienceDate",
  "experienceItem": "About-module__Vd__5a__experienceItem",
  "experienceLabel": "About-module__Vd__5a__experienceLabel",
  "experienceList": "About-module__Vd__5a__experienceList",
  "experienceNumber": "About-module__Vd__5a__experienceNumber",
  "experienceTitle": "About-module__Vd__5a__experienceTitle",
  "funFactCard": "About-module__Vd__5a__funFactCard",
  "highlight": "About-module__Vd__5a__highlight",
  "highlightIcon": "About-module__Vd__5a__highlightIcon",
  "language": "About-module__Vd__5a__language",
  "languagesCard": "About-module__Vd__5a__languagesCard",
  "languagesList": "About-module__Vd__5a__languagesList",
  "learningCard": "About-module__Vd__5a__learningCard",
  "learningItem": "About-module__Vd__5a__learningItem",
  "learningList": "About-module__Vd__5a__learningList",
  "profileActions": "About-module__Vd__5a__profileActions",
  "profileAvatar": "About-module__Vd__5a__profileAvatar",
  "profileBody": "About-module__Vd__5a__profileBody",
  "profileCard": "About-module__Vd__5a__profileCard",
  "profileContent": "About-module__Vd__5a__profileContent",
  "profileDescription": "About-module__Vd__5a__profileDescription",
  "profileFooter": "About-module__Vd__5a__profileFooter",
  "profileHeader": "About-module__Vd__5a__profileHeader",
  "profileHighlights": "About-module__Vd__5a__profileHighlights",
  "profileSubtitle": "About-module__Vd__5a__profileSubtitle",
  "profileTextColumn": "About-module__Vd__5a__profileTextColumn",
  "profileTitle": "About-module__Vd__5a__profileTitle",
  "profileTitleRow": "About-module__Vd__5a__profileTitleRow",
  "scroll": "About-module__Vd__5a__scroll",
  "skillIcon": "About-module__Vd__5a__skillIcon",
  "skillItem": "About-module__Vd__5a__skillItem",
  "skillName": "About-module__Vd__5a__skillName",
  "skillsCard": "About-module__Vd__5a__skillsCard",
  "skillsGrid": "About-module__Vd__5a__skillsGrid",
});
}),
"[project]/portfolio/src/components/About/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/portfolio/src/components/About/About.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function About(param) {
    let { className } = param;
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleOpenCV = ()=>{
        router.push('/cv');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about, " ").concat(className || ''),
        id: "about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bentoBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCard,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContent,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTextColumn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeader,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTitleRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatar,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/ppf3.png",
                                                        alt: "Alexandros Soteriou",
                                                        width: 100,
                                                        height: 100,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatar,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '0.5rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileTitle,
                                                            children: "Alexandros Soteriou"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileSubtitle,
                                                            children: "Full-Stack Developer & UI/UX Designer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileBody,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDescription,
                                            children: [
                                                "Specialized in building scalable web applications with modern technologies. I combine technical expertise with design thinking to create digital experiences that are both beautiful and performant.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 21
                                                }, this),
                                                "With a passion for clean code and innovative solutions, I focus on delivering exceptional user experiences through thoughtful development and design."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileFooter,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileActions,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleOpenCV,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cvButton,
                                                    "aria-label": "View CV",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cvIcon,
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "7,10 12,15 17,10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    x1: "12",
                                                                    y1: "15",
                                                                    x2: "12",
                                                                    y2: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                                    lineNumber: 82,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 23
                                                        }, this),
                                                        "CV"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/portfolio/src/components/About/About.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillsCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Techstack"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselTrack,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/react.svg",
                                                        alt: "React",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "React"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/Nextjs.svg",
                                                        alt: "Next.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Next.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/typescript (1).svg",
                                                        alt: "TypeScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "TypeScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/node.svg",
                                                        alt: "Node.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Node.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/css (1).svg",
                                                        alt: "CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "CSS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/javascript (1).svg",
                                                        alt: "JavaScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "JavaScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/html5.svg",
                                                        alt: "HTML5",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "HTML5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/tailwindcss.svg",
                                                        alt: "Tailwind CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Tailwind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/git (1).svg",
                                                        alt: "Git",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Git"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/github_dark.svg",
                                                        alt: "GitHub",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/figma (2).svg",
                                                        alt: "Figma",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Figma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/supabase.svg",
                                                        alt: "Supabase",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Supabase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/react.svg",
                                                        alt: "React",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "React"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/Nextjs.svg",
                                                        alt: "Next.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Next.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/typescript (1).svg",
                                                        alt: "TypeScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "TypeScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/node.svg",
                                                        alt: "Node.js",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Node.js"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/css (1).svg",
                                                        alt: "CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "CSS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/javascript (1).svg",
                                                        alt: "JavaScript",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "JavaScript"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/html5.svg",
                                                        alt: "HTML5",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "HTML5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/tailwindcss.svg",
                                                        alt: "Tailwind CSS",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Tailwind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/git (1).svg",
                                                        alt: "Git",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Git"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/github_dark.svg",
                                                        alt: "GitHub",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/figma (2).svg",
                                                        alt: "Figma",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Figma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons/supabase.svg",
                                                        alt: "Supabase",
                                                        width: 32,
                                                        height: 32,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillIcon
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillName,
                                                        children: "Supabase"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/src/components/About/About.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "3+"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Years Coding"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "20+"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "10+"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Technologies"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceNumber,
                                                children: "5+"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].experienceLabel,
                                                children: "Clients"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].languagesCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Languages"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].languagesList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "Greek"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "English"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "Russian"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 379,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].language,
                                        children: "German"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: "Currently Learning"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "Three.js"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "WebGL"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "After Effects"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "Shaders"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "Blender"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].learningItem,
                                        children: "Unreal Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/About/About.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].funFactCard
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/About/About.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/src/components/About/About.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/About/About.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/About/About.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(About, "WoZadmVgHGVrJ+uqvWVQ3r2U2jA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/Contact/Contact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "contact": "Contact-module__ySZ5lq__contact",
  "contactDetails": "Contact-module__ySZ5lq__contactDetails",
  "contactInfo": "Contact-module__ySZ5lq__contactInfo",
  "contactItem": "Contact-module__ySZ5lq__contactItem",
  "contactLabel": "Contact-module__ySZ5lq__contactLabel",
  "contactValue": "Contact-module__ySZ5lq__contactValue",
  "container": "Contact-module__ySZ5lq__container",
  "content": "Contact-module__ySZ5lq__content",
  "form": "Contact-module__ySZ5lq__form",
  "formGroup": "Contact-module__ySZ5lq__formGroup",
  "formSection": "Contact-module__ySZ5lq__formSection",
  "header": "Contact-module__ySZ5lq__header",
  "infoSection": "Contact-module__ySZ5lq__infoSection",
  "infoText": "Contact-module__ySZ5lq__infoText",
  "infoTitle": "Contact-module__ySZ5lq__infoTitle",
  "input": "Contact-module__ySZ5lq__input",
  "label": "Contact-module__ySZ5lq__label",
  "socialGrid": "Contact-module__ySZ5lq__socialGrid",
  "socialLink": "Contact-module__ySZ5lq__socialLink",
  "socialLinks": "Contact-module__ySZ5lq__socialLinks",
  "socialTitle": "Contact-module__ySZ5lq__socialTitle",
  "subjectTab": "Contact-module__ySZ5lq__subjectTab",
  "subjectTabActive": "Contact-module__ySZ5lq__subjectTabActive",
  "subjectTabs": "Contact-module__ySZ5lq__subjectTabs",
  "submitButton": "Contact-module__ySZ5lq__submitButton",
  "subtitle": "Contact-module__ySZ5lq__subtitle",
  "textarea": "Contact-module__ySZ5lq__textarea",
  "title": "Contact-module__ySZ5lq__title",
});
}),
"[project]/portfolio/src/components/Contact/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/portfolio/src/components/Contact/Contact.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Icon components
const GitHubIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GitHubIcon;
const LinkedInIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = LinkedInIcon;
const EmailIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
            lineNumber: 24,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = EmailIcon;
const XIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        fill: "none",
        viewBox: "0 0 1200 1227",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = XIcon;
function Contact(param) {
    let { className } = param;
    _s();
    const [submitStatus, setSubmitStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('idle');
    const [selectedSubject, setSelectedSubject] = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('Job Inquiry');
    const subjectOptions = [
        'Job Inquiry',
        'Collaboration',
        'General Question',
        'Other'
    ];
    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: String(formData.get('name') || ''),
            email: String(formData.get('email') || ''),
            subject: selectedSubject,
            message: String(formData.get('message') || '')
        };
        try {
            setSubmitStatus('sending');
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) {
                setSubmitStatus('idle');
                return; // Keep silent per request
            }
            setSubmitStatus('sent');
            form.reset();
        } catch (err) {
            setSubmitStatus('idle'); // Keep silent per request
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contact, " ").concat(className || ''),
        id: "contact",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Let's talk about it"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSection,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectTabs,
                                                children: subjectOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectTab, " ").concat(selectedSubject === option ? __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subjectTabActive : ''),
                                                        onClick: ()=>setSelectedSubject(option),
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "message",
                                                name: "message",
                                                rows: 5,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                        disabled: submitStatus !== 'idle',
                                        children: submitStatus === 'sent' ? 'Sent ✓' : submitStatus === 'sending' ? 'Sending...' : 'Send Message'
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoTitle,
                                            children: "Get In Touch"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoText,
                                            children: "I'm always interested in new opportunities and exciting projects. Whether you're a company looking for a web developer or an individual with a cool idea, I'd love to hear from you."
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactDetails,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:soterioudev@gmail.com",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                                            children: "soterioudev@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                                            children: "Phone"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+35796302800",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                                            children: "+357 96302800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                                            children: "Cyprus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactValue,
                                                            children: "Available for work"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialTitle,
                                            children: "Connect With Me"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialGrid,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/axellstr",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {}, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "GitHub"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/in/alexandros-soteriou-4aa690229/",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedInIcon, {}, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "LinkedIn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://x.com/7Afterlife",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                                                        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:soterioudev@gmail.com",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$Contact$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailIcon, {}, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/Contact/Contact.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(Contact, "IVyKa8e+9OWltTBn9qxnh5TjDMQ=");
_c4 = Contact;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "LinkedInIcon");
__turbopack_context__.k.register(_c2, "EmailIcon");
__turbopack_context__.k.register(_c3, "XIcon");
__turbopack_context__.k.register(_c4, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/ThemeToggle/ThemeToggle.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "thumb": "ThemeToggle-module__8iqMqW__thumb",
  "thumbDark": "ThemeToggle-module__8iqMqW__thumbDark",
  "thumbLight": "ThemeToggle-module__8iqMqW__thumbLight",
  "toggle": "ThemeToggle-module__8iqMqW__toggle",
  "track": "ThemeToggle-module__8iqMqW__track",
});
}),
"[project]/portfolio/src/components/ThemeToggle/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/portfolio/src/components/ThemeToggle/ThemeToggle.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeToggle(param) {
    let { className } = param;
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle, " ").concat(className || ''),
        "aria-label": "Switch to ".concat(theme === 'light' ? 'dark' : 'light', " mode"),
        title: "Switch to ".concat(theme === 'light' ? 'dark' : 'light', " mode"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb, " ").concat(theme === 'light' ? __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbLight : __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$ThemeToggle$2f$ThemeToggle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbDark)
            }, void 0, false, {
                fileName: "[project]/portfolio/src/components/ThemeToggle/ThemeToggle.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/ThemeToggle/ThemeToggle.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/ThemeToggle/ThemeToggle.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=portfolio_src_components_6efaa1e5._.js.map