(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/portfolio/src/contexts/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTheme = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ThemeProvider = (param)=>{
    let { children } = param;
    _s1();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            // Check for saved theme preference or default to 'dark'
            const savedTheme = localStorage.getItem('theme');
            const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const initialTheme = savedTheme || systemPreference;
            setThemeState(initialTheme);
            setIsInitialized(true);
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (isInitialized) {
                // Apply theme to document
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
        }
    }["ThemeProvider.useEffect"], [
        theme,
        isInitialized
    ]);
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[setTheme]": (newTheme)=>{
            setThemeState(newTheme);
        }
    }["ThemeProvider.useCallback[setTheme]"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeProvider.useCallback[toggleTheme]": ()=>{
            setThemeState({
                "ThemeProvider.useCallback[toggleTheme]": (prevTheme)=>prevTheme === 'light' ? 'dark' : 'light'
            }["ThemeProvider.useCallback[toggleTheme]"]);
        }
    }["ThemeProvider.useCallback[toggleTheme]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[value]": ()=>({
                theme,
                toggleTheme,
                setTheme
            })
    }["ThemeProvider.useMemo[value]"], [
        theme,
        toggleTheme,
        setTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/portfolio/src/contexts/ThemeContext.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ThemeProvider, "dPBv1OfwKM/ea3IKBI3kQ5Ll6n8=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/FaultyTerminal/FaultyTerminal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaultyTerminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const vertexShader = "\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n";
const fragmentShader = "\nprecision mediump float;\n\nvarying vec2 vUv;\n\nuniform float iTime;\nuniform vec3  iResolution;\nuniform float uScale;\n\nuniform vec2  uGridMul;\nuniform float uDigitSize;\nuniform float uScanlineIntensity;\nuniform float uGlitchAmount;\nuniform float uFlickerAmount;\nuniform float uNoiseAmp;\nuniform float uChromaticAberration;\nuniform float uDither;\nuniform float uCurvature;\nuniform vec3  uTint;\nuniform vec2  uMouse;\nuniform float uMouseStrength;\nuniform float uUseMouse;\nuniform float uPageLoadProgress;\nuniform float uUsePageLoadAnimation;\nuniform float uBrightness;\n\nfloat time;\n\nfloat hash21(vec2 p){\n  p = fract(p * 234.56);\n  p += dot(p, p + 34.56);\n  return fract(p.x * p.y);\n}\n\nfloat noise(vec2 p)\n{\n  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2; \n}\n\nmat2 rotate(float angle)\n{\n  float c = cos(angle);\n  float s = sin(angle);\n  return mat2(c, -s, s, c);\n}\n\nfloat fbm(vec2 p)\n{\n  p *= 1.1;\n  float f = 0.0;\n  float amp = 0.5 * uNoiseAmp;\n  \n  mat2 modify0 = rotate(time * 0.02);\n  f += amp * noise(p);\n  p = modify0 * p * 2.0;\n  amp *= 0.454545;\n  \n  mat2 modify1 = rotate(time * 0.02);\n  f += amp * noise(p);\n  p = modify1 * p * 2.0;\n  amp *= 0.454545;\n  \n  mat2 modify2 = rotate(time * 0.08);\n  f += amp * noise(p);\n  \n  return f;\n}\n\nfloat pattern(vec2 p, out vec2 q, out vec2 r) {\n  vec2 offset1 = vec2(1.0);\n  vec2 offset0 = vec2(0.0);\n  mat2 rot01 = rotate(0.1 * time);\n  mat2 rot1 = rotate(0.1);\n  \n  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));\n  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));\n  return fbm(p + r);\n}\n\nfloat digit(vec2 p){\n    vec2 grid = uGridMul * 15.0;\n    vec2 s = floor(p * grid) / grid;\n    p = p * grid;\n    vec2 q, r;\n    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;\n    \n    if(uUseMouse > 0.5){\n        vec2 mouseWorld = uMouse * uScale;\n        float distToMouse = distance(s, mouseWorld);\n        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;\n        intensity += mouseInfluence;\n        \n        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;\n        intensity += ripple;\n    }\n    \n    if(uUsePageLoadAnimation > 0.5){\n        float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);\n        float cellDelay = cellRandom * 0.8;\n        float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);\n        \n        float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);\n        intensity *= fadeAlpha;\n    }\n    \n    p = fract(p);\n    p *= uDigitSize;\n    \n    float px5 = p.x * 5.0;\n    float py5 = (1.0 - p.y) * 5.0;\n    float x = fract(px5);\n    float y = fract(py5);\n    \n    float i = floor(py5) - 2.0;\n    float j = floor(px5) - 2.0;\n    float n = i * i + j * j;\n    float f = n * 0.0625;\n    \n    float isOn = step(0.1, intensity - f);\n    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);\n    \n    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;\n}\n\nfloat onOff(float a, float b, float c)\n{\n	return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;\n}\n\nfloat displace(vec2 look)\n{\n    float y = look.y - mod(iTime * 0.25, 1.0);\n    float window = 1.0 / (1.0 + 50.0 * y * y);\n	  return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;\n}\n\nvec3 getColor(vec2 p){\n    \n    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;\n    bar *= uScanlineIntensity;\n    \n    float displacement = displace(p);\n    p.x += displacement;\n\n    if (uGlitchAmount != 1.0) {\n      float extra = displacement * (uGlitchAmount - 1.0);\n      p.x += extra;\n    }\n\n    float middle = digit(p);\n    \n    const float off = 0.002;\n    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +\n                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +\n                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));\n    \n    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;\n    return baseColor;\n}\n\nvec2 barrel(vec2 uv){\n  vec2 c = uv * 2.0 - 1.0;\n  float r2 = dot(c, c);\n  c *= 1.0 + uCurvature * r2;\n  return c * 0.5 + 0.5;\n}\n\nvoid main() {\n    time = iTime * 0.333333;\n    vec2 uv = vUv;\n\n    if(uCurvature != 0.0){\n      uv = barrel(uv);\n    }\n    \n    vec2 p = uv * uScale;\n    vec3 col = getColor(p);\n\n    if(uChromaticAberration != 0.0){\n      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;\n      col.r = getColor(p + ca).r;\n      col.b = getColor(p - ca).b;\n    }\n\n    col *= uTint;\n    col *= uBrightness;\n\n    if(uDither > 0.0){\n      float rnd = hash21(gl_FragCoord.xy);\n      col += (rnd - 0.5) * (uDither * 0.003922);\n    }\n\n    gl_FragColor = vec4(col, 1.0);\n}\n";
function hexToRgb(hex) {
    let h = hex.replace('#', '').trim();
    if (h.length === 3) h = h.split('').map((c)=>c + c).join('');
    const num = parseInt(h, 16);
    return [
        (num >> 16 & 255) / 255,
        (num >> 8 & 255) / 255,
        (num & 255) / 255
    ];
}
function FaultyTerminal(param) {
    let { scale = 1, gridMul = [
        2,
        1
    ], digitSize = 1.5, timeScale = 0.3, pause = false, scanlineIntensity = 0.3, glitchAmount = 1, flickerAmount = 1, noiseAmp = 1, chromaticAberration = 0, dither = 0, curvature = 0.2, tint = '#ffffff', mouseReact = true, mouseStrength = 0.2, dpr = ("TURBOPACK compile-time truthy", 1) ? Math.min(window.devicePixelRatio || 1, 2) : "TURBOPACK unreachable", pageLoadAnimation = true, brightness = 1, className, style, ...rest } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const programRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const smoothMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const frozenTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadAnimationStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timeOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.random() * 100);
    const tintVec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FaultyTerminal.useMemo[tintVec]": ()=>hexToRgb(tint)
    }["FaultyTerminal.useMemo[tintVec]"], [
        tint
    ]);
    const ditherValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FaultyTerminal.useMemo[ditherValue]": ()=>typeof dither === 'boolean' ? dither ? 1 : 0 : dither
    }["FaultyTerminal.useMemo[ditherValue]"], [
        dither
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FaultyTerminal.useCallback[handleMouseMove]": (e)=>{
            const ctn = containerRef.current;
            if (!ctn) return;
            const rect = ctn.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = 1 - (e.clientY - rect.top) / rect.height;
            mouseRef.current = {
                x,
                y
            };
        }
    }["FaultyTerminal.useCallback[handleMouseMove]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaultyTerminal.useEffect": ()=>{
            const ctn = containerRef.current;
            if (!ctn) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                dpr
            });
            rendererRef.current = renderer;
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 1);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
                    },
                    uScale: {
                        value: scale
                    },
                    uGridMul: {
                        value: new Float32Array(gridMul)
                    },
                    uDigitSize: {
                        value: digitSize
                    },
                    uScanlineIntensity: {
                        value: scanlineIntensity
                    },
                    uGlitchAmount: {
                        value: glitchAmount
                    },
                    uFlickerAmount: {
                        value: flickerAmount
                    },
                    uNoiseAmp: {
                        value: noiseAmp
                    },
                    uChromaticAberration: {
                        value: chromaticAberration
                    },
                    uDither: {
                        value: ditherValue
                    },
                    uCurvature: {
                        value: curvature
                    },
                    uTint: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](tintVec[0], tintVec[1], tintVec[2])
                    },
                    uMouse: {
                        value: new Float32Array([
                            smoothMouseRef.current.x,
                            smoothMouseRef.current.y
                        ])
                    },
                    uMouseStrength: {
                        value: mouseStrength
                    },
                    uUseMouse: {
                        value: mouseReact ? 1 : 0
                    },
                    uPageLoadProgress: {
                        value: pageLoadAnimation ? 0 : 1
                    },
                    uUsePageLoadAnimation: {
                        value: pageLoadAnimation ? 1 : 0
                    },
                    uBrightness: {
                        value: brightness
                    }
                }
            });
            programRef.current = program;
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            function resize() {
                if (!ctn || !renderer) return;
                renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
                program.uniforms.iResolution.value = new __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
            }
            const resizeObserver = new ResizeObserver({
                "FaultyTerminal.useEffect": ()=>resize()
            }["FaultyTerminal.useEffect"]);
            resizeObserver.observe(ctn);
            resize();
            const update = {
                "FaultyTerminal.useEffect.update": (t)=>{
                    rafRef.current = requestAnimationFrame(update);
                    if (pageLoadAnimation && loadAnimationStartRef.current === 0) {
                        loadAnimationStartRef.current = t;
                    }
                    if (!pause) {
                        const elapsed = (t * 0.001 + timeOffsetRef.current) * timeScale;
                        program.uniforms.iTime.value = elapsed;
                        frozenTimeRef.current = elapsed;
                    } else {
                        program.uniforms.iTime.value = frozenTimeRef.current;
                    }
                    if (pageLoadAnimation && loadAnimationStartRef.current > 0) {
                        const animationDuration = 2000;
                        const animationElapsed = t - loadAnimationStartRef.current;
                        const progress = Math.min(animationElapsed / animationDuration, 1);
                        program.uniforms.uPageLoadProgress.value = progress;
                    }
                    if (mouseReact) {
                        const dampingFactor = 0.08;
                        const smoothMouse = smoothMouseRef.current;
                        const mouse = mouseRef.current;
                        smoothMouse.x += (mouse.x - smoothMouse.x) * dampingFactor;
                        smoothMouse.y += (mouse.y - smoothMouse.y) * dampingFactor;
                        const mouseUniform = program.uniforms.uMouse.value;
                        mouseUniform[0] = smoothMouse.x;
                        mouseUniform[1] = smoothMouse.y;
                    }
                    renderer.render({
                        scene: mesh
                    });
                }
            }["FaultyTerminal.useEffect.update"];
            rafRef.current = requestAnimationFrame(update);
            ctn.appendChild(gl.canvas);
            if (mouseReact) ctn.addEventListener('mousemove', handleMouseMove);
            return ({
                "FaultyTerminal.useEffect": ()=>{
                    var _gl_getExtension;
                    cancelAnimationFrame(rafRef.current);
                    resizeObserver.disconnect();
                    if (mouseReact) ctn.removeEventListener('mousemove', handleMouseMove);
                    if (gl.canvas.parentElement === ctn) ctn.removeChild(gl.canvas);
                    (_gl_getExtension = gl.getExtension('WEBGL_lose_context')) === null || _gl_getExtension === void 0 ? void 0 : _gl_getExtension.loseContext();
                    loadAnimationStartRef.current = 0;
                    timeOffsetRef.current = Math.random() * 100;
                }
            })["FaultyTerminal.useEffect"];
        }
    }["FaultyTerminal.useEffect"], [
        dpr,
        pause,
        timeScale,
        scale,
        gridMul,
        digitSize,
        scanlineIntensity,
        glitchAmount,
        flickerAmount,
        noiseAmp,
        chromaticAberration,
        ditherValue,
        curvature,
        tintVec,
        mouseReact,
        mouseStrength,
        pageLoadAnimation,
        brightness,
        handleMouseMove
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "faulty-terminal-container ".concat(className || ''),
        style: style,
        ...rest
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/FaultyTerminal/FaultyTerminal.tsx",
        lineNumber: 424,
        columnNumber: 10
    }, this);
}
_s(FaultyTerminal, "MlHVrkEC4HXzBbJ45PK/VJdaK5Y=");
_c = FaultyTerminal;
var _c;
__turbopack_context__.k.register(_c, "FaultyTerminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/FaultyTerminal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$FaultyTerminal$2f$FaultyTerminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/src/components/FaultyTerminal/FaultyTerminal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/src/components/BackgroundWrapper/BackgroundWrapper.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backgroundWrapper": "BackgroundWrapper-module__CKjYea__backgroundWrapper",
});
}),
"[project]/portfolio/src/components/BackgroundWrapper/BackgroundWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$FaultyTerminal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/src/components/FaultyTerminal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$FaultyTerminal$2f$FaultyTerminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/src/components/FaultyTerminal/FaultyTerminal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$BackgroundWrapper$2f$BackgroundWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/portfolio/src/components/BackgroundWrapper/BackgroundWrapper.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function BackgroundWrapper() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundWrapper.useEffect": ()=>{
            setMounted(true);
        }
    }["BackgroundWrapper.useEffect"], []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$BackgroundWrapper$2f$BackgroundWrapper$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$src$2f$components$2f$FaultyTerminal$2f$FaultyTerminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            scale: 4,
            gridMul: [
                2,
                1
            ],
            digitSize: 2,
            timeScale: 1,
            pause: false,
            scanlineIntensity: 0.2,
            glitchAmount: 3,
            flickerAmount: 1,
            noiseAmp: 1,
            chromaticAberration: 0,
            dither: 3,
            curvature: 0,
            tint: "#0E1116",
            mouseReact: true,
            mouseStrength: 5,
            pageLoadAnimation: true,
            brightness: 1
        }, void 0, false, {
            fileName: "[project]/portfolio/src/components/BackgroundWrapper/BackgroundWrapper.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/portfolio/src/components/BackgroundWrapper/BackgroundWrapper.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(BackgroundWrapper, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = BackgroundWrapper;
var _c;
__turbopack_context__.k.register(_c, "BackgroundWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=portfolio_src_70a7c7f2._.js.map