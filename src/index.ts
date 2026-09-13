import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { crewCards, getDisplayName, hasSkills, isAvailable, } from "./crew";
import { addPartner, updateTeamPartnership } from "./partnerships";
import type { Team } from "./types/Team";
import type { MissionState } from "./types/MissionState";
import { describeMissionState } from "./mission";
import { findById, replaceById } from "./collections";
import type { CrewMember } from "./types/CrewMember";

let premiereEquipe = teams[0];
if (premiereEquipe !== undefined) {
    const { name, title } = premiereEquipe;
    console.log(name + " : \" " + title + " \"");
} else { console.log("La team n'existe pas.") }
console.table(teams)


const nameDisplay = crewMembers.find(c => c.name === "Alonzo Church");
if (nameDisplay) {
    console.log(getDisplayName(nameDisplay));
} else {
    console.log('No member found');
};

const memberDispo = crewMembers.filter(c => isAvailable(c));
if (memberDispo.length !== 0) {
    console.table(memberDispo);
} else {
    console.log('Aucun membre n\'est disponible.');
};

const nomDesMembres = crewMembers.map(c => c.name);
console.log(nomDesMembres);

const communicationSkill = crewMembers.filter(c => hasSkills(c, "communication"));
console.table(communicationSkill);

console.table(crewCards);

if (teams[0]) {
    console.log(teams[0]);
    const nouvelle = addPartner(teams[0], 2)
    console.log(nouvelle)
} else {
    console.log("Pas d'équipe")
};

const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);
const partnerTeams: Array<Team> = updateTeamPartnership(withAurorePartnership, 2, 1);
console.table(partnerTeams);
console.table(teams);


const loadingState: MissionState = { status: "loading" };
const successState: MissionState = { status: "success", data: crewCards };
const errorState: MissionState = { status: "error", message: "Communication avec la base interrompue" };
console.log(describeMissionState(loadingState));
console.log(describeMissionState(successState));
console.log(describeMissionState(errorState));

const findByIdEquipe = findById(teams, 3);
console.log(findByIdEquipe);
const findByIdMembre = findById(crewMembers, 5);
console.log(findByIdMembre);
const findByIdFicheEquipage = findById(crewCards, 2);
console.log(findByIdFicheEquipage);

const membreRemplacement: CrewMember = { id: 2, name: "Membre De Remplacement", teamId: 3, status: "disponible", role: undefined, skills: ["communication"] };
const replaceByIdMembre = replaceById(crewMembers, membreRemplacement);
console.log(replaceByIdMembre);
const equipeRemplacement: Team = {id: 3,name: "Equipe De Remplacement",base: "Europe",title: "Remplace l'equipe avec id 3 ???",memberCount: 19,partners: [] };
const remplaceByIdTeam=replaceById(teams,equipeRemplacement);
console.log(remplaceByIdTeam);