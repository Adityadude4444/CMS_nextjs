import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/signin" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbuser = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            username: true,
            role: true,
          },
        });
        if (dbuser) {
          token.id = dbuser.id;
          token.name = dbuser.name;
          token.email = dbuser.email;
          token.image = dbuser.image;
          token.username = dbuser.username;
          token.role = dbuser.role;
        } else {
          const newUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image,
              username: user.username,
              role: user.role,
            },
          });
          token.id = newUser.id;
          token.name = newUser.name;
          token.email = newUser.email;
          token.image = newUser.image;
          token.username = newUser.username;
          token.role = newUser.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.name = token.name;
      session.email = token.email;
      session.image = token.image;
      session.username = token.username;
      session.role = token.role;
      return session;
    },
    redirect() {
      return "/dashboard";
    },
  },
};
