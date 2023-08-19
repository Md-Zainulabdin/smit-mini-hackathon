import { verifyEmail, verifyPassword } from "@/handlers/handlers";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize({ email, password }) {
                const user = verifyEmail(email);

                if (!user) {
                    throw new Error("User not Found")
                }

                const validPassword = await verifyPassword(user.password, password);

                if (!validPassword) {
                    throw new Error("Incorrect Password")
                }

                return {
                    id: user.id,
                    name: user.username,
                    email: user.email
                }
            }
        })
    ],
    callbacks: {
        jwt(params) {
            if (params.user?.id) {
                params.token.id = params.user.id;
                params.token.name = params.user.name;
            }

            return params.token;
        },

        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
            }

            return session;
        }
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }