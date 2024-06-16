import { redirect } from 'next/navigation';

export default function VotingLayout({children}: Readonly<{children: React.ReactNode}>) {

    return (
        <main>
            {children}
        </main>
    );
}