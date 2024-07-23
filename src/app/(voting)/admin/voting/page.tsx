import { getElections } from '@/actions/elections/getElections';
import { auth } from '@/auth';
import { Election } from '@/interfaces/Election';
import clsx from 'clsx';

export default async function VotingPage() {

    const session = await auth();
    const elections = await getElections(session?.user.access_token || '') as Election[];

    return (
        <section className='p-5 flex flex-col  items-center w-full'>

            <h1 className="text-xl mb-2 text-center font-bold">Elecciones</h1>

            <div className="overflow-auto rounded-lg shadow">
                <table className="table-auto">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Creador</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Fecha Inicio</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Fecha Fin</th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">

                        {elections.map((election, i) => (
                            <tr key={election.idProceso} className="bg-white">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <a href="#" className="font-bold text-blue-500 hover:underline">{election.idProceso}</a>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {election.nombreProceso}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {election.emailAdmin}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{new Date(election.fechaInicio).toLocaleDateString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{new Date(election.fechaFin).toLocaleDateString('es-ES', {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span className={clsx('py-2 px-3 rounded-md text-white cursor-pointer hover:shadow-xl transition-all duration-300', {
                                        'bg-green-500': election.estadoProceso === 'active',
                                        'bg-red-500': election.estadoProceso !== 'active',
                                    })}>
                                        {election.estadoProceso === 'active' ? 'Disponible' : 'Terminado'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    );
}
