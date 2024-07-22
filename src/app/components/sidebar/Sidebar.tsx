import UserInfo from '../user-info/UserInfo';
import { SidebarItems } from './SidebarItems';

export default function Sidebar() {
    return (
        <nav
            className={'p-5 w-[200px] min-h-screen bg-gradient-to-br from-blue-400 to-blue-200 z-20 transform transition-all duration-300'}
        >

            <UserInfo />

            <SidebarItems />
        </nav>
    );
}
