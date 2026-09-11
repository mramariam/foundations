import { teams } from "./data/teams";
import { crewMembers } from "./data/crewMembers";
import { crewCards, getDisplayName, hasSkills, isAvailable, } from "./crew";
import { addPartner } from "./partnerships";


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
}