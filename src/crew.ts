import type { CrewMember } from "./types/CrewMember";
import { teams } from "./data/teams";
import type { Team } from "./types/Team";
import type { CrewCard } from "./types/CrewCard";
import { crewMembers } from "./data/crewMembers";

export const getDisplayName = (crewMember: CrewMember): string => {
    return `${crewMember.name} : ${crewMember.role ?? 'Sans rôle'}`;
};

export const hasSkills = (crewMember: CrewMember, skill: string): boolean => {
    return (crewMember.skills.includes(skill));
};

export const isAvailable = (crewMember: CrewMember): boolean => {
    return (crewMember.status === "disponible");
};

export const findTeamById = (teamId: number): Team | undefined => {
    const idTeam = teams.find(c => c.id === teamId);
    return idTeam;
};

export const getTeamName = (crewMember: CrewMember): string => {
    const teamName = findTeamById(crewMember.teamId);
    return `${teamName?.name ?? 'Equipe inconnue'}`;
};

export const createCrewCards = (members: Array<CrewMember>): Array<CrewCard> => {
    return members.map(c => ({ id: c.id, label: getDisplayName(c), teamName: getTeamName(c), isAvailable: isAvailable(c) }));
};

export const crewCards: Array<CrewCard> = createCrewCards(crewMembers);    