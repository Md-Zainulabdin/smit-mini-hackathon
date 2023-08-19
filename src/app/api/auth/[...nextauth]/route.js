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
                
                if (!user) {
                    throw new Error("Not Found")
                }

                const validPassword = await verifyPassword(user.password, password);

                if (!validPassword) {
                    throw new Error("Password Not Matched")
                }

                return {
                    email: user.email,
                    id : user.id
                }
            }
        })
    ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }