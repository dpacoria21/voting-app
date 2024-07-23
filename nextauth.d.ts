import NextAuth, {DefaultSession} from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string,
            userId: string,
            username: string,
            email: string,
            // emailVerified: boolean,
            roles: string[],
            firstName: string,
            lastName: string,
            image?: string,
            access_token: string,
            
        } & DefaultSession['user']
    }
}