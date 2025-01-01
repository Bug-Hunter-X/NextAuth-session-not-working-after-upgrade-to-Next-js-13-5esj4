# NextAuth Session Issue After Next.js 13 Upgrade

This repository demonstrates a bug encountered after upgrading a Next.js 12 application to Next.js 13.  The application uses NextAuth.js for authentication, and after the upgrade, the session object consistently returns null, even after successful login.

## Problem Description

The application utilizes NextAuth.js for user authentication.  Prior to the upgrade to Next.js 13, the authentication process worked as expected, and the session object was correctly populated.  However, after upgrading, `unstable_getServerSession` consistently returns null, even with successful login credentials.

This causes protected routes to be inaccessible, resulting in unwanted error messages.  The issue persists despite following NextAuth.js and Next.js upgrade instructions.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Attempt to log in.  Observe that the session object remains null even after successful login.

## Expected Behavior

The session object should be populated with user data after successful login.

## Actual Behavior

The session object remains null, preventing access to protected routes.

## Workaround

The provided `solutionContent` shows how to access the session correctly via the API route with NextAuth 15.