import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../lib'
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'dark',
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'user'
      return token
    },
  },
}

export default NextAuth(authOptions)
