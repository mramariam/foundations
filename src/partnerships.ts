import { teams } from "./data/teams";
import type { Team } from "./types/Team";
import { findTeamById } from "./crew";

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
    return allTeams.map(c=>{
        if(c.id===teamId){
            return {...c,partners:[partnerId]};
        };
        return c;
    });
};

export const removePartner=(team:Team,partnerId:number):Team=>{
    return {...team,partners:team.partners.filter(c=>c!==partnerId)};
} 