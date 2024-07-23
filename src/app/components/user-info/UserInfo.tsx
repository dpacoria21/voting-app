// 'use client';

import { auth } from '@/auth';
import Image from 'next/image';

export default async function UserInfo() {

    const session = await auth();

    const fp = session?.user?.firstName[0].toLocaleUpperCase() ?? '';
    const sp = session?.user?.firstName.slice(1) ?? '';

    return (
        <section className='flex flex-col gap-3 justify-center items-center'>
            <Image
                alt="User-Photo"
                src={'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}
                width={75}
                height={75}
                className='rounded-md'
            />

            {/* <FaUserCircle size={85}/> */}

            <p className='break-words'>
                {fp+sp}
            </p>
        </section>
    );
}
