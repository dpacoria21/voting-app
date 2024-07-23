
'use client';

import { confirmVote } from '@/actions/elections/confirmVote';
import { PartidoProceso } from '@/interfaces/Election';
import { useElectionStore } from '@/store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function PartiesPage() {


    const {currentElection, clearElection} = useElectionStore();
    const {data: session} = useSession();
    const router = useRouter();

    if(currentElection === undefined) router.push('/voting');

    const goVote = async(partido: PartidoProceso) => {
        Swal.fire({
            title: `¿Estás seguro de elegir al ${partido.nombrePartido} y ${partido.nombrePostulante} ?`,
            text: '¡No podrás cambiar tu voto luego!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, votar!'
        }).then(async(result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    title: '!Votado¡',
                    text: '¡Tu voto ha sido guardado!',
                    icon: 'success'
                });

                await confirmVote(session!.user.access_token, session!.user.email, currentElection!.idProceso+'', partido.idPartido+'');
                clearElection();
                router.push('/voting');
            }
        });
    };

    return (

        <section className='p-5 flex flex-col items-center w-full gap-10'>
            <h1 className="text-xl mb-2 text-center font-bold">Deberá elegir un partido 🗳️</h1>

            <div className='flex flex-wrap gap-5 h-fit'>

                {/* Partido */}

                {currentElection?.partidoProceso.map((party) => (
                    <div onClick={() => goVote(party)} key={party.idPartido} className="max-w-sm rounded overflow-hidden cursor-pointer shadow-lg bg-slate-300 h-fit hover:bg-slate-50 transition-all">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{party.nombrePartido}</div>
                            <p className="text-gray-700 text-base">
                                <strong>Representante: </strong>{party.nombrePostulante}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </section>

    );
}
