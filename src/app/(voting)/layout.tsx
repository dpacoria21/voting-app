import { Metadata } from 'next';
import Sidebar from '../components/sidebar/Sidebar';

export const metadata: Metadata = {
    title: 'Voting App',
    description: 'Página para realizar votaciones'
};

export default function VotingLayout({children}: Readonly<{children: React.ReactNode}>) {

    return (
        <main className='flex'>

            <Sidebar />
            {children}
        </main>
    );
}