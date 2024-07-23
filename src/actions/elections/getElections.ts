'use server';

export const getElections = async(token: string) => {

    try {

        const elections = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/votes/get-process-email-admin/${process.env.NEXT_PUBLIC_EMAIL_KEY}`, {
            method: 'GET',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    
        return await elections.json();

    }catch(e) {
        console.log(`${e}`);
        return [];
    }
};