```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Check user credentials (replace with your authentication logic)
        if (credentials?.email === 'test@example.com' && credentials?.password === 'password') {
          return {
            id: '1',
            name: 'Test User',
            email: 'test@example.com',
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: 'your-secret-key',
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user information to token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...session.user, id: token.id };
      return session;
    },
  },
};

export default NextAuth(authOptions);
```
```javascript
// pages/about.js
import { getSession } from 'next-auth/react';

export default async function About() {
  const session = await getSession();

  if (!session) {
    return (
      <div>
        <h1>Please sign in to view this page</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
```