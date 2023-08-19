import { verifyEmail, verifyPassword } from "@/handlers/handlers";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            
            async authorize({email, password}) {
                const user = verifyEmail(email);
                console.log(user);
                
                if (!user) {
                    throw new Error("Not Found")
                }

                const validPassword = await verifyPassword(user.password, password);

                if (!validPassword) {
                    throw new Error("Password Not Matched")
                }

                return {
                    email: user.email,
                    id : user.id,
                    firstname: user.firstName,
                    lastname: user.lastName,
                }
            }
        })
    ],
    callbacks: {
        jwt(params) {
            if (params.user?.id) {
                params.token.id = params.user.id;
                params.token.firstname = params.user.firstname;
                params.token.lastname = params.user.lastname;
            }

            return params.token;
        },

        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
            }

            return session;
        }
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }