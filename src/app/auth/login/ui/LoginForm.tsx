'use client';

import { authenticate } from '@/actions/auth/login';
import InputForm from '@/components/Forms/InputForm';
import { useFormState, useFormStatus } from 'react-dom';


export default function LoginForm() {

    const [state, dispatch] = useFormState(authenticate, undefined);

    return (
        <section className='break-words sm:break-normal'>
            <form action={dispatch}>

                <InputForm placeholder='example@gmail.com' label='Correo Electrónico' type='email' name='email'/>

                <InputForm label='Contraseña' name='password' type='password'/>

                <LoginButton />

                {state && (
                    <div className='flex justify-center items-center mt-3'>
                        <span className="bg-red-500 px-2 py-1 text-center text-md font-medium text-red-50">⚠ {state}</span>
                    </div>
                )}


            </form>
        </section>
    );
}

function LoginButton() {
    const {pending} = useFormStatus();

    return(
        <div className='w-full flex'>
            <button type='submit' className={`w-full mt-2 font-semibold text-xl  ${pending ? 'bg-blue-200 text-slate-700': 'bg-blue-800 text-slate-200'}  py-2 rounded-sm`} disabled={pending}>
                Ingresar
            </button>
        </div>
    );
}
