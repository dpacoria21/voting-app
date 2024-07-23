import { auth } from '@/auth';
import UserInfo from '../user-info/UserInfo';
import { SidebarItems } from './SidebarItems';

export default async function Sidebar() {

    const session = await auth();

    return (
        <nav
            className={'p-5 w-[200px] min-h-screen bg-blue-400 z-20 transform transition-all duration-300'}
        >

            <UserInfo />

            <SidebarItems roles={session?.user.roles ?? []}/>
        </nav>
    );
}
