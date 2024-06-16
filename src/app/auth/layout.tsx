import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Autenticación',
    description: 'Antes de votar debe iniciar sesión'
};

export default function AuthLayout ({children}: Readonly<{children: React.ReactNode}>) {
    
    return (
        <main className="flex flex-col bg-slate-100 justify-center items-center min-h-screen">
            {children}
        </main>
    );
}