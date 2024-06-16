 
import NextAuth from 'next-auth';
import authConfig from './auth.config';

const {auth} = NextAuth(authConfig);

const protectedRoutes: String[] = [
    '/'
];

export default auth((req) => {

    const {nextUrl} = req;


    const isLoggedIn = !!req.auth;
    // console.log({isLoggedIn});
    // console.log('Route', req.nextUrl.pathname);


    if(nextUrl.pathname.startsWith('/auth')) {
        if(isLoggedIn) {
            return Response.redirect(new URL('/', nextUrl));
        }
    }

    if(protectedRoutes.includes(nextUrl.pathname)) {
        if(!isLoggedIn) {
            return Response.redirect(new URL('/auth/login', nextUrl));
        }
    }

    // if (!req.auth) {
    //     const url = req.url.replace(req.nextUrl.pathname, '/login');
    //     return Response.redirect(url);
    // }
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};