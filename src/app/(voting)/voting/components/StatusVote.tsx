'use client';

import { Election } from '@/interfaces/Election';
import { useElectionStore } from '@/store';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface Props {
    estadoVoto: string,
    proceso: Election
}

export default function StatusVote({estadoVoto, proceso}: Props) {

    const {saveElection} = useElectionStore();

    const router = useRouter();

    const goVote = () => {
        if(estadoVoto === 'Votado') {
            // saveElection(proceso);
            // router.push('/winner');
        }else {
            saveElection(proceso);
            router.push('/voting/parties');
        }
    };
    
    return (
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            <span onClick={() => goVote()} className={clsx('py-2 px-3 rounded-md text-white cursor-pointer hover:shadow-xl transition-all duration-300', {
                'bg-green-500': estadoVoto === 'sin votar',
                'bg-red-500': estadoVoto === 'Votado',
            })}>
                {/* hola a todos */}
                {estadoVoto === 'sin votar' ? 'Ir a votar' : 'Ya votado'}
            </span>
        </td>
    );
}
