export type Level='gubernatura'|'municipio'|'distrito_local'|'distrito_federal';
export interface Position {level:Level;targetId:string|number;positionName:string}
export interface Candidate {id:string;name:string;photoUrl:string;party:'PAN'|'MORENA'|'PRI'|'MC'|'PVEM'|'PT'|'IND'|string;aspirations:Position[];confirmedPosition?:Position;bio?:string}
export type Locks=Record<string,string>;
export const key=(p:Position,party:string)=>`${p.level}:${Number(p.targetId)}:${party}`;
