import NextAuth from 'next-auth';
import authConfig from './auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/auth/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 10
    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.user = user;
                // console.log({token});
            }

            return token;
        },
        async session({session, token}) {
            session.user = token.user as any;
            // console.log({session});
            return session;
        }

    },
    secret: process.env.AUTH_SECRET,
    ...authConfig
});