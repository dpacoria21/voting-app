import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getBearerToken } from './actions/auth/login-fetching';
import { getUser } from './actions/users/getUser';

export default {
    providers: [
        Credentials({
            authorize: async(credentials) => {

                const parsedCredentials = z.object({
                    email: z.string().email(),
                    password: z.string().min(6)
                }).safeParse(credentials);

                const user = parsedCredentials.data;
                
                const tokenUser = await getBearerToken(user?.email, user?.password);
                const dataUser = await getUser(tokenUser.access_token, user!.email);


                if(dataUser) {
                    dataUser.access_token = tokenUser.access_token;
                    return dataUser;
                }

                return null;
            }
        })
    ],
} satisfies NextAuthConfig;