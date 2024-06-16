'use client';

import { authenticate } from '@/actions/auth/login';
import { useFormState, useFormStatus } from 'react-dom';


export default function LoginForm() {

    const [state, dispatch] = useFormState(authenticate, undefined);

    // console.log(state);

    return (
        <div>
            <form action={dispatch}>

                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input id='email' type="email" name='email'/>
                </div>

                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id='password' type="password" name='password'/>
                </div>

                <LoginButton />

                {state && (
                    <>
                        <p className="text-sm text-red-500">{state}</p>
                    </>
                )}


            </form>
        </div>
    );
}

function LoginButton() {
    const {pending} = useFormStatus();

    return(
        <button type='submit' className={`${pending ? 'bg-blue-200': 'bg-blue-500'}  py-1 px-2 rounded-sm`} disabled={pending}>
            Ingresar
        </button>
    );
}
