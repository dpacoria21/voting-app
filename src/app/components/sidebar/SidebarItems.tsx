'use client';

import { FaHome, FaUsersCog } from 'react-icons/fa';
import { SidebarItem } from './SidebarItem';
import { logout } from '@/actions/auth/logout';
import { IoLogOut } from 'react-icons/io5';
// import { useSession } from 'next-auth/react';

export const SidebarItems = () => {

    return (

        <section
            // Efecto de slide
        >

                
            {/* Menu */}

            <div className='py-2' />

            <SidebarItem
                path='/'
                icon={<FaHome size={25} />}
                label='Inicio'
            />

            <SidebarItem
                path='/usuarios'
                icon={<FaUsersCog size={25} />}
                label='Usuarios'
            />

            {/* <SidebarItem
                path='/histories'
                icon={<MdHistoryEdu size={25} />}
                label='Historias'
            />
            <SidebarItem
                path='/ecologic-science'
                icon={<FaTree size={25} />}
                label='Ecología'
            />
            <SidebarItem
                path='/suggestions'
                icon={<MdMapsUgc size={25} />}
                label='Sugerencias'
            /> */}

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
