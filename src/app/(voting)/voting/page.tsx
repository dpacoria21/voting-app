import { getElectionsByUser } from '@/actions/elections/getElectionsByUser';
import { auth } from '@/auth';
import StatusVote from './components/StatusVote';

export default async function page() {

    const session = await auth();

    const elections = await getElectionsByUser(session!.user.access_token, session!.user.email);

    return (
        <section className='p-5 flex flex-col  items-center w-full'>

            <h1 className="text-xl mb-2 text-center font-bold">Mis Votaciones</h1>

            <div className="overflow-auto rounded-lg shadow">
                <table className="table-auto">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Fecha Inicio</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Fecha Fin</th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Estado del Voto</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">

                        {elections.map((election, i) => (
                            <tr key={election.idUP} className="bg-white">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <p className="font-bold text-blue-500 hover:underline">{election.idUP}</p>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{election.proceso.nombreProceso}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{new Date(election.proceso.fechaInicio).toLocaleDateString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{new Date(election.proceso.fechaFin).toLocaleDateString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</td>
                                
                                <StatusVote estadoVoto={election.estadoVoto} proceso={election.proceso}/>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    );
}
