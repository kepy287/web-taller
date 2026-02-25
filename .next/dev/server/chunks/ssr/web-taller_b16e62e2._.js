module.exports = [
"[project]/web-taller/src/app/dashboard/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web-taller/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "es",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2d$taller$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: children
        }, void 0, false, {
            fileName: "[project]/web-taller/src/app/dashboard/layout.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web-taller/src/app/dashboard/layout.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
} // import { createServerClient } from '@supabase/ssr'
 // import { cookies } from 'next/headers'
 // import { redirect } from 'next/navigation'
 // export default async function DashboardLayout({
 //   children,
 // }: {
 //   children: React.ReactNode
 // }) {
 //   const cookieStore = await cookies()
 //   const supabase = createServerClient(
 //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
 //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
 //     {
 //       cookies: {
 //         getAll() {
 //           return cookieStore.getAll()
 //         },
 //         setAll() {},
 //       },
 //     }
 //   )
 //   const {
 //     data: { session },
 //   } = await supabase.auth.getSession()
 //   if (!session) {
 //     redirect('/login')
 //   }
 //   return <>{children}</>
 // }
 // import { redirect } from "next/navigation"
 // import { createServerClient } from "@supabase/ssr"
 // import { cookies } from "next/headers"
 // export default async function DashboardLayout({
 //   children,
 // }: {
 //   children: React.ReactNode
 // }) {
 //   const cookieStore = await cookies()
 //   const supabase = createServerClient(
 //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
 //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
 //     {
 //       cookies: {
 //         get(name: string) {
 //           return cookieStore.get(name)?.value
 //         },
 //       },
 //     }
 //   )
 //   const {
 //     data: { session },
 //   } = await supabase.auth.getSession()
 //   if (!session) {
 //     redirect("/login")
 //   }
 //   // 🔹 Buscar rol del usuario
 //   const {
 //     data: profile,
 //     error,
 //   } = await supabase
 //     .from("profiles")
 //     .select("role")
 //     .eq("id", session.user.id)
 //     .single()
 //   if (!profile || error) {
 //     redirect("/login")
 //   }
 //   return <>{children}</>
 // }
}),
"[project]/web-taller/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/web-taller/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=web-taller_b16e62e2._.js.map