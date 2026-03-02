module.exports = [
"[project]/web-taller/src/app/favicon.ico.mjs { IMAGE => \"[project]/web-taller/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/web-taller/src/app/favicon.ico.mjs { IMAGE => \"[project]/web-taller/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/web-taller/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/web-taller/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/web-taller/src/app/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/web-taller/src/app/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/web-taller/src/app/dashboard/productos/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web-taller/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function ProductosPage() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://gvaunpnjzfetajbbjszj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2YXVucG5qemZldGFqYmJqc3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExNDQwMzcsImV4cCI6MjA4NjcyMDAzN30.8FPIG4ELnrUCWLEoUh27bvZocKwEmopJ3DYhvNW8Uvw"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll () {}
        }
    });
    // 🔐 Verificar sesión
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    }
    // 📦 Obtener productos (RLS filtra automáticamente por tenant)
    const { data: productos, error } = await supabase.from("producto").select("*").order("created_at", {
        ascending: false
    });
    if (error) {
        console.error("Error cargando productos:", error);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Productos"
            }, void 0, false, {
                fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            productos?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No hay productos registrados."
            }, void 0, false, {
                fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                lineNumber: 44,
                columnNumber: 35
            }, this),
            productos?.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        border: "1px solid #ddd",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "6px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: prod.nombre
                        }, void 0, false, {
                            fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Tipo: ",
                                prod.tipo
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Precio Venta: $",
                                prod.precio_venta
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Stock Actual: ",
                                prod.stock_actual
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, prod.id_producto, true, {
                    fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/web-taller/src/app/dashboard/productos/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/web-taller/src/app/dashboard/productos/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/web-taller/src/app/dashboard/productos/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f5a5b4a1._.js.map