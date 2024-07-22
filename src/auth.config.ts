import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getBearerToken } from './actions/auth/login-fetching';

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
                
                const dataUser = await getBearerToken(user?.email, user?.password);
                // console.log({dataUser});


                if(dataUser) {
                    dataUser.email = user?.email;
                    return dataUser;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig;