import {test} from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
const {outputFiles}=await build({entryPoints:['src/data/scenario.ts'],bundle:true,platform:'node',format:'esm',write:false});
const {available,confirmCandidate,assignCandidate,validateScenario,initialScenario}=await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
const p={level:'gubernatura',targetId:22,positionName:'Gubernatura de Querétaro'};
const q={level:'municipio',targetId:14,positionName:'Alcaldía de Querétaro'};
const make=(id,party='PAN')=>({id,name:id,party,photoUrl:'',aspirations:[p,q]});
const fixture=()=>({version:2,name:'Prueba',profiles:[make('a'),make('b'),make('c'),make('d','MORENA')],locks:{},bench:[]});
test('confirmar mueve solo competidores de ese partido a banca y conserva exclusividad',()=>{
 const s=confirmCandidate(fixture(),'a',p);
 assert.deepEqual(s.bench,['b','c']);
 assert.equal(s.locks['gubernatura:22:PAN'],'a');
 assert.equal(available(s,q,'PAN').length,0);
 assert.equal(available(s,p,'MORENA').length,1);
 assert.equal(s.profiles.find(c=>c.id==='b').aspirations.some(a=>a.level==='gubernatura'),false);
 assert.throws(()=>confirmCandidate(s,'d',{...p,targetId:1}));
});
test('reasignar desde banca conserva la persona y rechaza destinos bloqueados',()=>{
 const s=confirmCandidate(fixture(),'a',p);
 assert.throws(()=>assignCandidate(s,'b',p),/bloqueada/);
 const next=assignCandidate(s,'b',q);
 assert.deepEqual(next.bench,['c']);
 assert.deepEqual(available(next,q,'PAN').map(c=>c.id),['b']);
 assert.equal(next.profiles.filter(c=>c.id==='b').length,1);
 assert.throws(()=>assignCandidate(next,'b',q),/banca/);
});
test('liberar no saca automáticamente a los aspirantes de banca',()=>{
 const s=confirmCandidate(fixture(),'a',p);s.locks={};
 assert.deepEqual(available(s,p,'PAN').map(c=>c.id),['a']);
 assert.deepEqual(s.bench,['b','c']);
});
test('escenario completo conserva nuevos perfiles, fotografías y banca en JSON',()=>{
 const s=confirmCandidate(fixture(),'a',p);s.profiles.push({...make('nuevo','MC'),photoUrl:'data:image/png;base64,AA=='});s.bench.push('nuevo');
 assert.deepEqual(validateScenario(JSON.parse(JSON.stringify(s))),{...s,profiles:s.profiles.map(c=>({...c,bio:''}))});
});
test('validación rechaza banca inconsistente, perfiles duplicados y territorios inválidos',()=>{
 const s=fixture();assert.throws(()=>validateScenario({...s,bench:['desconocido']}));
 assert.throws(()=>validateScenario({...s,profiles:[...s.profiles,s.profiles[0]]}));
 assert.throws(()=>validateScenario({...s,profiles:[{...make('a'),aspirations:[{...q,targetId:99}]}]}));
 const confirmed=confirmCandidate(s,'a',p);assert.throws(()=>validateScenario({...confirmed,bench:['a']}));
});
test('datos originales y escenarios v1 siguen siendo compatibles',()=>{
 const s=initialScenario();assert.equal(validateScenario(s).profiles.length,s.profiles.length);
 assert.equal(validateScenario({version:1,locks:{}}).version,2);
});
