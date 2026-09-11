import type { BaseLocation } from "./BasesLocations"
type Team={
    id:number,//identifiant unique
    name:string,//nom de l'équipe
    base:BaseLocation,//implantation principale
    title:string,//slogan
    memberCount:number,//nombre de membres
    partners:Array<number>
}

export type {Team};