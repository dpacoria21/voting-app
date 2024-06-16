export default function AuthLayout ({children}: Readonly<{children: React.ReactNode}>) {
    
    return (
        <main className="flex flex-col justify-center items-center h-screen">
            {children}
        </main>
    );
}