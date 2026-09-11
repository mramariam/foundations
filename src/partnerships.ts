import type { Team } from "./types/Team";

export const addPartner = (team: Team, partnerId: number): Team => {
    const partnersPresents = team.partners ?? [];
    if (partnersPresents.includes(partnerId)) {
        return team;
    }
    return { ...team, partners: [...partnersPresents, partnerId] };
};

export const updateTeamPartnership = (
    allTeams: Array<Team>,
    teamId: number,
    partnerId: number
): Array<Team> => {
    
};