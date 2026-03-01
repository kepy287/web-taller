module.exports = [
"[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60436a1e7c8eb2fe460148635d2f0dea2e650e64ae":"changeUserRole"},"",""] */ __turbopack_context__.s([
    "changeUserRole",
    ()=>changeUserRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web-taller/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function changeUserRole(userId, newRole) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://gvaunpnjzfetajbbjszj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2YXVucG5qemZldGFqYmJqc3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExNDQwMzcsImV4cCI6MjA4NjcyMDAzN30.8FPIG4ELnrUCWLEoUh27bvZocKwEmopJ3DYhvNW8Uvw"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll () {}
        }
    });
    // 🔐 Verificar usuario actual
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        throw new Error("No autenticado");
    }
    // 🔐 Verificar que sea admin
    const { data: profile } = await supabase.from("profiles").select("rol").eq("id", session.user.id).single();
    if (profile?.rol !== "admin") {
        throw new Error("No autorizado");
    }
    // 🔄 Cambiar rol del usuario objetivo
    const { error } = await supabase.from("profiles").update({
        rol: newRole
    }).eq("id", userId);
    if (error) {
        throw new Error("Error actualizando rol");
    }
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    changeUserRole
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeUserRole, "60436a1e7c8eb2fe460148635d2f0dea2e650e64ae", null);
}),
"[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>UsuariosAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40f25a1aa8ad74f97849d3d5bb4e585711aec40e0d":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web-taller/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$lib$2f$actions$2f$changeUserRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function action($$ACTION_CLOSURE_BOUND) {
    var [$$ACTION_ARG_0, $$ACTION_ARG_1] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("40f25a1aa8ad74f97849d3d5bb4e585711aec40e0d", $$ACTION_CLOSURE_BOUND);
    const newRole = $$ACTION_ARG_0 === "admin" ? "user" : "admin";
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$lib$2f$actions$2f$changeUserRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeUserRole"])($$ACTION_ARG_1, newRole);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40f25a1aa8ad74f97849d3d5bb4e585711aec40e0d", null);
async function UsuariosAdminPage() {
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
    // 🔐 Verificar que sea admin
    const { data: currentUser } = await supabase.from("profiles").select("rol").eq("id", session.user.id).single();
    if (currentUser?.rol !== "admin") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
    }
    // 📋 Obtener todos los usuarios
    const { data: users } = await supabase.rpc("get_all_profiles");
    // const { data: users } = await supabase
    //   .from("profiles")
    //   .select("id, nombre, rol")
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Administración de Usuarios"
            }, void 0, false, {
                fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                border: 1,
                cellPadding: 8,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Nombre"
                                }, void 0, false, {
                                    fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Rol"
                                }, void 0, false, {
                                    fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Cambiar Rol"
                                }, void 0, false, {
                                    fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: users?.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: user.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: user.rol
                                    }, void 0, false, {
                                        fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            action: $$RSC_SERVER_ACTION_0.bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("40f25a1aa8ad74f97849d3d5bb4e585711aec40e0d", user.rol, user.id)),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                style: {
                                                    padding: "6px 12px",
                                                    backgroundColor: user.rol === "admin" ? "#dc2626" : "#2563eb",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    cursor: "pointer",
                                                    fontWeight: "bold"
                                                },
                                                children: [
                                                    "Convertir en ",
                                                    user.rol === "admin" ? "User" : "Admin"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, user.id, true, {
                                fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/web-taller/.next-internal/server/app/dashboard/admin/usuarios/page/actions.js { ACTIONS_MODULE0 => \"[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$app$2f$dashboard$2f$admin$2f$usuarios$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$lib$2f$actions$2f$changeUserRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/web-taller/.next-internal/server/app/dashboard/admin/usuarios/page/actions.js { ACTIONS_MODULE0 => \"[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40f25a1aa8ad74f97849d3d5bb4e585711aec40e0d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$app$2f$dashboard$2f$admin$2f$usuarios$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "60436a1e7c8eb2fe460148635d2f0dea2e650e64ae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$lib$2f$actions$2f$changeUserRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeUserRole"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$admin$2f$usuarios$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$web$2d$taller$2f$src$2f$app$2f$dashboard$2f$admin$2f$usuarios$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$web$2d$taller$2f$src$2f$lib$2f$actions$2f$changeUserRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/web-taller/.next-internal/server/app/dashboard/admin/usuarios/page/actions.js { ACTIONS_MODULE0 => "[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$app$2f$dashboard$2f$admin$2f$usuarios$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/src/app/dashboard/admin/usuarios/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$src$2f$lib$2f$actions$2f$changeUserRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/src/lib/actions/changeUserRole.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=web-taller_5cb99c32._.js.map