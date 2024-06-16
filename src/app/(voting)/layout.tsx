import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Voting App',
    description: 'Página para realizar votaciones'
};

export default function VotingLayout({children}: Readonly<{children: React.ReactNode}>) {

    return (
        <main>
            {children}
        </main>
    );
}