// 'use client';

import { auth } from '@/auth';
import Image from 'next/image';

export default async function UserInfo() {

    const session = await auth();
    
    return (
        <section className='flex flex-col gap-3 justify-center items-center'>
            <Image
                alt="User-Photo"
                src={'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}
                width={75}
                height={75}
                className='rounded-md'
            />
            <p className='break-words'>
                {session?.user?.email?.split('@')[0]}
                {/* Hola a todos */}
            </p>
        </section>
    );
}
