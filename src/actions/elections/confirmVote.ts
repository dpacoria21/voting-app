'use server';

import { revalidatePath } from 'next/cache';

export const confirmVote = async(token: string, email: string, idProceso: string, idPartido: string) => {

    try {

        const data = {
            email,
            idProceso,
            idPartido,
        };

        console.log(data);

        const vote = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/votes/user-process/voting`, {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    
        revalidatePath('/voting');
        return await vote.json();

    }catch(e) {
        console.log(`${e}`);
        return [];
    }
};