'use client';
import { createUser } from '@/actions/users/createUser';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  username: string
  email: string
  firstName: string,
  lastName: string,
  password: string,
  roles: string[],
}

export default function CreateUserPage() {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        await createUser(data);
        router.push('/usuarios');
    };
    
    return (
        <div className="p-5 w-full flex flex-col justify-center items-center bg-blue-100">
            <h1 className="text-3xl my-10 font-bold">Crear Usuario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="username" type="text" {...register('username',  {required: true})} placeholder="gunter"/>
                        {errors.username && <span className='text-red-500'>⚠ Este campo es obligatorio</span>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Correo
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register('email', {required: true})} id="email" type="email" placeholder="example@gmail.com"/>
                        {errors.email && <span className='text-red-500'>⚠ Este campo es obligatorio</span>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                            Nombres
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register('firstName', {required: true})} id="firstName" type="text" placeholder="Pepito"/>
                        {errors.firstName && <span className='text-red-500'>⚠ Este campo es obligatorio</span>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                            Apellidos
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register('lastName', {required: true})} id="lastName" type="text" placeholder="Huamani"/>
                        {errors.lastName && <span className='text-red-500'>⚠ Este campo es obligatorio</span>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...register('password', {required: true})} id="password" type="password" placeholder='******'/>
                        {errors.password && <span className='text-red-500'>⚠ Este campo es obligatorio</span>}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Roles
                        </label>

                        <select {...register('roles', {required: true})} multiple className='h-[46px] w-full'>
                            <option value="admin">Administrador</option>
                            <option value="user">Usuario</option>
                        </select>
                        {errors.roles && <span className='text-red-500'>⚠ Este campo es obligatorio</span>}
                    </div>
                </div>
                <button className='px-3 py-1 bg-blue-700 text-slate-50 text-lg rounded-sm w-full' type="submit">
                    Crear
                </button>
            </form>
        </div>
    );
}
