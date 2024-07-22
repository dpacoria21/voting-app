'use server';

export const getUsers = async(token: string) => {
    try {

        const users = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/keycloak/user/search`, {
            method: 'GET',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    
        return await users.json();
    }catch(e) {
        console.log(`${e}`);
        return [];
    }
};