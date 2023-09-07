import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken?: any;
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    id_token?: string;
    provider?: string;
    accessToken?: string;
  }
}
