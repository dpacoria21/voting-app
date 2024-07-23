'use server';

interface User {
    username: string
    email: string
    firstName: string,
    lastName: string,
    password: string,
    roles: string[],
}

export const createUser = async(user: User) => {
    try {

        const createdUser = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/keycloak/user/create`, {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
    
        return await createdUser.json();
    }catch(e) {
        console.log(`${e}`);
        return e;
    }
};