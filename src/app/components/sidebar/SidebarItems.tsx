'use client';

import { FaHome } from 'react-icons/fa';
import { SidebarItem } from './SidebarItem';
import { logout } from '@/actions/auth/logout';
import { IoLogOut, IoSettingsSharp } from 'react-icons/io5';
import { MdHowToVote } from 'react-icons/md';

interface Props {
    roles: string[]
}

export const SidebarItems = ({roles}: Props) => {

    return (

        <section
        >

                
            {/* Menu */}

            <div className='py-2' />

            <SidebarItem
                path='/'
                icon={<FaHome size={25} />}
                label='Inicio'
            />

            <SidebarItem 
                path='/voting'
                icon={<MdHowToVote size={25}/>}
                label='Votaciones'
            />

            {roles.some((role) => role==='admin') && (
                <>
                    <SidebarItem
                        path='/admin/voting'
                        icon={<IoSettingsSharp size={25} />}
                        label='Procesos'
                    />

                    <SidebarItem
                        path='/admin/usuarios'
                        icon={<IoSettingsSharp size={25} />}
                        label='Usuarios'
                    />
                </>
            )}



            <div className='flex gap-3 items-center mt-5 p-2 hover:bg-blue-200 rounded transition-all'>
                <form action={logout}>
                    <button className='flex gap-3' type="submit">
                        <IoLogOut 
                            size={25}
                            className='scale-0 w-0 sm:scale-100 sm:w-fit transition-all'
                        />
                        Salir
                    </button>
                </form>
            </div>



        </section>
    );
};
