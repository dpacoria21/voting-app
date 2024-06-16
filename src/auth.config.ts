import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Credentials({
            authorize: async(credentials) => {

                const parsedCredentials = z.object({
                    email: z.string().email(),
                    password: z.string().min(6)
                }).safeParse(credentials);

                const user = parsedCredentials.data;

                if(!user) {
                    return null;
                }
                console.log(user);
                if(user.email==='dpacoria@unsa.edu.pe' && user.password==='123456') {
                    return user;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig;