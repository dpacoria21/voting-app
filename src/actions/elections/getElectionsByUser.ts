'use server';

import { UserElection } from '@/interfaces/Election';

export const getElectionsByUser = async(token: string, email: string) => {

    try {

        //http://localhost:8080/votes/user-process/get-user-process-email/bhanccoco@unsa.edu.pe

        const elections = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/votes/user-process/get-user-process-email/${email}`, {
            method: 'GET',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    
        return await elections.json() as UserElection[];

    }catch(e) {
        console.log(`${e}`);
        return [];
    }
};