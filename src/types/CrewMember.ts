import type { Status } from "./Status";

type CrewMember={
    id:number,
    name:string,
    teamId:number,
    status:Status,
    role:string|undefined,
    skills:Array<string>,
}

export type {CrewMember};