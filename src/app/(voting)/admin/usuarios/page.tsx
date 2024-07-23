import { getUsers } from '@/actions/users/getUsers';
import { auth } from '@/auth';
import { User } from '@/interfaces/User';
import Link from 'next/link';

export default async function UsuariosPage() {

    const session = await auth();
    const users = await getUsers(session?.user.access_token || '') as User[];
    
    return (
        <section className='p-5 flex flex-col items-center w-full'>
            
            {/* <div className="p-5 h-screen bg-gray-100"> */}
            <h1 className="text-xl mb-2 text-center font-bold">Usuarios</h1>

            <div className="overflow-auto rounded-lg shadow hidden md:block">
                <table className="table-auto">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Verificado</th>
                            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Role</th>
                            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">

                        {users.map((user, i) => (
                            <tr key={user.id} className="bg-white">
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <a href="#" className="font-bold text-blue-500 hover:underline">{user.id.split('-')[0]}</a>
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {user.firstName || user.username}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    {user.email}
                                </td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.emailVerified ? 'Verificado' : 'No verificado'}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.realmRoles ?? 'admin'}</td>
                                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">ninguna</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='w-full flex justify-center'>
                <Link href={'/usuarios/crear-usuario'} className='bg-blue-600 text-white my-3 rounded-md py-1 px-2'>
                            Crear Usuario
                </Link>
            </div>                            

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">

                {users.map((user, i) => (
                    <div key={user.id} className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <a href="#" className="font-bold text-blue-500 hover:underline">{user.id.split('-')[0]}</a>
                        </div>
                        <div className="p-3 text-sm text-gray-700">
                            <strong>Nombre: </strong>{user.firstName || user.username}
                        </div>
                        <div className="p-3 text-sm text-gray-700">
                            <strong>Email: </strong>{user.email}
                        </div>
                        <div className="p-3 text-sm text-gray-700">
                            <strong>Role:</strong> {user.realmRoles ?? 'admin'}
                        </div>
                        <div className="p-3 text-sm text-gray-700">
                            <strong>Acciones:</strong> ninguna
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
