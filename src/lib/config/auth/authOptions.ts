import { AuthOptions } from 'next-auth';
import { encode, decode } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/config/db/prisma';
import type { User } from '@/lib/types/definitions';
import bcrypt from 'bcrypt';
import { UserSignInSchema } from '@/lib/types/schemas';

async function getUser(email: string): Promise<User | null> {
  try {
    return await prisma.users.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    throw new Error('Failed to fetch user.');
  }
}

export default {
  session: {
    strategy: 'jwt',
  },
  jwt: { encode, decode },
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = UserSignInSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} as AuthOptions;
