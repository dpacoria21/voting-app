import { logout } from '@/actions/auth/logout';

export default function page() {
    return (
        <>
            <div>page</div>
            <form action={logout}>
                <button type="submit">
                    Logout
                </button>
            </form>
        </>
    );
}
