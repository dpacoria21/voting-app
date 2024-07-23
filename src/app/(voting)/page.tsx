export default function page() {

    console.log(new Date().toISOString());
    
    return (
        <section className="break-words flex justify-center items-center w-full">
            <h1 className="font-bold text-2xl text-center">
                ¡Bienvenido a la página para realizar votaciones! 
            </h1>
        </section>
    );
}
