import { useUIStore } from '@/store';
import Link from 'next/link';

interface Props {
    path: string,
    icon: React.ReactElement,
    label: string,
}

export const SidebarItem = ({path, icon, label}: Props) => {

    return (
        <Link
            href={path}
            className='flex gap-3 items-center mt-5 p-2 hover:bg-blue-200 rounded transition-all'
        >
            <div className='scale-0 w-0 sm:scale-100 sm:w-fit transition-all'>
                {icon}
            </div>

            <span>{label}</span>
        </Link>
    );
};
