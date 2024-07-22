'use server';


export const getBearerToken = async(email:string = '', password:string = '') => {

    try{
        const urlEncoded = new URLSearchParams({
            'client_id': process.env.NEXT_PUBLIC_CLIENT_ID || '',
            'client_secret': process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
            'grant_type': 'password',
            'username': email || '',
            'password': password || '',
        });
        const dataUser = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/realms/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic e3tjdXN0b21lcl9rZXl9fTp7e2N1c3RvbWVyX3NlY3JldH19'
            },
            body: urlEncoded,
            redirect: 'follow'
        });
    
        return await dataUser.json();

    }catch(e) {
        console.log(e);
    }

};