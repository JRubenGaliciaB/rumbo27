import {candidates, parties, position} from './profilesData';
import {key, type Candidate, type Locks, type Position, type Level} from './types';

export interface Scenario {version:2; name:string; profiles:Candidate[]; locks:Locks; bench:string[]}
export const samePosition=(a:Position,b:Position)=>a.level===b.level&&Number(a.targetId)===Number(b.targetId);
export const initialScenario=():Scenario=>({version:2,name:'Escenario base',profiles:structuredClone(candidates),locks:Object.fromEntries(candidates.filter(c=>c.confirmedPosition).map(c=>[key(c.confirmedPosition!,c.party),c.id])),bench:[]});
export const available=(s:Scenario,p:Position,party:string)=>s.profiles.filter(c=>c.party===party&&!s.bench.includes(c.id)&&!Object.values(s.locks).includes(c.id)&&c.aspirations.some(a=>samePosition(a,p)));
export function confirmCandidate(s:Scenario,id:string,p:Position):Scenario {
 const c=s.profiles.find(c=>c.id===id);
 if(!c||!available(s,p,c.party).some(c=>c.id===id)||s.locks[key(p,c.party)])throw Error('Esta posición ya está bloqueada o el perfil no está disponible.');
 const displaced=available(s,p,c.party).filter(c=>c.id!==id).map(c=>c.id);
 return {...s,locks:{...s.locks,[key(p,c.party)]:id},bench:[...new Set([...s.bench,...displaced])],profiles:s.profiles.map(c=>displaced.includes(c.id)?{...c,aspirations:c.aspirations.filter(a=>!samePosition(a,p))}:c)};
}
export function assignCandidate(s:Scenario,id:string,p:Position):Scenario {
 const c=s.profiles.find(c=>c.id===id);
 if(!c||!s.bench.includes(id))throw Error('Selecciona un aspirante de la banca.');
 if(s.locks[key(p,c.party)])throw Error(`La posición de ${c.party} está bloqueada. Libérala antes de asignar otro aspirante.`);
 return {...s,bench:s.bench.filter(x=>x!==id),profiles:s.profiles.map(c=>c.id===id?{...c,aspirations:c.aspirations.some(a=>samePosition(a,p))?c.aspirations:[...c.aspirations,p]}:c)};
}
function validPosition(raw:any):Position {
 const counts:Record<Level,number>={gubernatura:22,municipio:18,distrito_local:15,distrito_federal:6};
 if(!raw||!Object.hasOwn(counts,raw.level)||!Number.isInteger(Number(raw.targetId)))throw Error('Posición inválida.');
 const id=Number(raw.targetId),level=raw.level as Level;
 if(level==='gubernatura'?id!==22:id<1||id>counts[level])throw Error('Territorio inválido.');
 return position(level,id);
}
export function validateScenario(raw:any):Scenario {
 if(raw?.version!==1&&raw?.version!==2)throw Error('Versión de escenario no compatible.');
 const base=initialScenario();
 const profiles:Candidate[]=raw.version===1?base.profiles:raw.profiles;
 if(!Array.isArray(profiles)||profiles.length>5000)throw Error('Perfiles inválidos.');
 const ids=new Set<string>();
 const clean=profiles.map(c=>{
  if(!c||typeof c.id!=='string'||!c.id||ids.has(c.id)||typeof c.name!=='string'||!c.name.trim()||!Object.hasOwn(parties,c.party)||!Array.isArray(c.aspirations))throw Error('Perfil inválido o duplicado.');
  ids.add(c.id);
  const photo=typeof c.photoUrl==='string'?c.photoUrl:'';
  if(photo&&!/^https?:\/\//i.test(photo)&&!/^data:image\/(png|jpeg|webp|gif);base64,/i.test(photo))throw Error('Fotografía inválida.');
  return {id:c.id,name:c.name.trim(),party:c.party,photoUrl:photo,bio:typeof c.bio==='string'?c.bio:'',aspirations:c.aspirations.map(validPosition)};
 });
 if(!raw.locks||typeof raw.locks!=='object'||Array.isArray(raw.locks))throw Error('Bloqueos inválidos.');
 const locks:Locks={},used=new Set<string>();
 for(const[k,v]of Object.entries(raw.locks)){
  const c=clean.find(c=>c.id===v);
  if(!c||used.has(c.id)||!c.aspirations.some(p=>key(p,c.party)===k))throw Error('Bloqueos incompatibles o perfiles duplicados.');
  locks[k]=c.id;used.add(c.id);
 }
 const bench=raw.version===1?[]:raw.bench;
 if(!Array.isArray(bench)||bench.some(id=>!ids.has(id)||used.has(id))||new Set(bench).size!==bench.length)throw Error('Banca inválida.');
 return {version:2,name:typeof raw.name==='string'?raw.name:'Escenario importado',profiles:clean,locks,bench};
}
