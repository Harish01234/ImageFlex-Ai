import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {
  // Log the request URL and route protection status
  console.log(`Request URL: ${request.nextUrl.pathname}`);
  console.log(`Is Public Route: ${isPublicRoute(request)}`);

  // Protect routes that are not public
  if (!isPublicRoute(request)) {
    console.log('Protecting route');
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|static|favicon.ico).*)', // Protect all routes except static assets and favicon
    '/api/(.*)',                         // Apply middleware to API routes
  ],
};
