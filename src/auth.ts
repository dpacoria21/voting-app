import NextAuth from 'next-auth';
import authConfig from './auth.config';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/auth/login',
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.user = user;
            }
            return token;
        },
        async session({session, token}) {
            session.user = token.user as any;
            console.log({session, token});
            return session;
        }

    },
    secret: process.env.AUTH_SECRET,
    ...authConfig
});