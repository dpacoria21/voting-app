'use server';

export const getWinner = async(token: string, id: string) => {

    try {

        const winner = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/votes/party/winner/${id}`, {
            method: 'GET',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    
        return await winner.json();

    }catch(e) {
        console.log(`${e}`);
        return [];
    }
};