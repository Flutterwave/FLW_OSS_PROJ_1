import NextAuthMiddleware from 'next-auth/middleware';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - api (API routes)
     * - $ (home page)
     * - auth (authentication page)
     * - manifest.json (webpage manifest file)
     * - icon.png (icon image file referenced in the manifest file)
     * - favicon.ico (favicon file)
     */
    '/((?!api|$|auth|_next/static|_next/image|manifest.json|icon.png|favicon.ico).*)',
  ],
};

export default NextAuthMiddleware;
