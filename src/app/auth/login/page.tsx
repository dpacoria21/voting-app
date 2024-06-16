import Image from 'next/image';
import LoginForm from './ui/LoginForm';

export default function LoginPage() {
    return(
        <section className='transition-all bg-slate-400 md:w-2/5 sm:w-3/5 w-4/5 px-5 py-10 rounded-sm mx-8 my-8'>

            <Image 
                src={'/login-img.webp'}
                alt='voting-image'
                width={300}
                height={300}
                className='mx-auto'
            />

            <div>
                <LoginForm />
            </div>


        </section>
    );
}