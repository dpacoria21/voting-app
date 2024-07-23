import { Election } from '@/interfaces/Election';
import { create } from 'zustand';

interface State {
    currentElection: Election | undefined,

    saveElection: (election: Election) => void,
    clearElection: () => void,
}

export const useElectionStore= create<State>()((set) => ({
    currentElection: undefined,

    saveElection: (election: Election) => set({currentElection: election}),
    clearElection: () => set({currentElection: undefined}),

}));