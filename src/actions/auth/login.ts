'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirectTo: '/'
        });
        return 'Success';
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Credenciales inválidas';
                default:
                    return '¡Ops!, Algo malo ha pasado';
            }
        }
        throw error;
    }
}