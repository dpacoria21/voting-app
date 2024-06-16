import { redirect } from 'next/navigation';

export default function VotingLayout({children}: Readonly<{children: React.ReactNode}>) {

    console.log('HOla');

    redirect('/auth/login');

    return (
        <main>
            {children}
        </main>
    );
}