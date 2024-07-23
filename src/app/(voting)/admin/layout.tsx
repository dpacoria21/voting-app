import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout ({children}: Readonly<{children: React.ReactNode}>) {

    const session = await auth();

    if(!session?.user.roles.find((role => role==='admin'))) {
        redirect('/');
    }

    return (
        <>

            {children}

        </>
    );
}