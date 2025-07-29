import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ApiAuth } from "./lib/api/auth";
import { LoginSchema } from "./lib/validation/auth";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        try {
          const validatedFields = LoginSchema.parse({email: credentials.email, password: credentials.password});

          const result = await ApiAuth.login(validatedFields);

          if(!result) return null

          return result.data;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
        if(user) {
            token.id = user.id
            token.name = user.name
            token.email = user.email
            token.role = user.role
            token.passport = user.passport
            token.picture = user.image ?? ""
        }

        return token
    },

    async session({session, token}) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.passport = token.passport
        session.user.image = token.picture

        return session
    }
  }
} satisfies NextAuthConfig;
