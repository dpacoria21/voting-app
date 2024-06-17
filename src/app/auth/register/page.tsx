import Image from 'next/image';
import RegisterForm from './ui/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
    return(
        <section className='transition-all bg-slate-400 md:w-2/5 sm:w-3/5 w-4/5 px-5 py-10 rounded-sm mx-8 my-8'>

            <Image 
                src={'/login-img.webp'}
                alt='voting-image'
                width={300}
                height={300}
                className='mx-auto'
            />

            <h1 className='break-words text-center my-6 text-3xl font-bold'>Registrarse</h1>


            <div>
                <RegisterForm />
            </div>

            <div className='flex mt-2 justify-end'>
                <Link className='break-words text-[#454545]' href={'/auth/login'}>
                    ¿Ya tienes una cuenta?
                </Link>
            </div>


        </section>
    );
}