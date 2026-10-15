import {useState,useRef,useEffect} from 'react';
import {Map,Network,ChevronDown,ArrowUpRight,Search,Save,Download,Upload,X,LockKeyhole,Unlock,Compass,RotateCcw,Check,SlidersHorizontal,Plus,Armchair} from 'lucide-react';
import Mapa from './components/TerritorialMap';
import {Orbit,Avatar} from './components/CandidateNodes';
import {parties,levels,municipalities,position} from './data/profilesData';
import {key,type Candidate,type Level,type Position} from './data/types';
import {initialScenario,validateScenario,available,confirmCandidate,assignCandidate,type Scenario} from './data/scenario';
const storage='rumbo2027.scenario.v2',legacyStorage='rumbo2027.scenario.v1';
function initial(){try{const saved=localStorage.getItem(storage);if(saved)return validateScenario(JSON.parse(saved));const old=localStorage.getItem(legacyStorage);return old?validateScenario({version:1,locks:JSON.parse(old)}):initialScenario()}catch{return initialScenario()}}
function PartyNode({
  party,
  profiles,
  locked,
  onSelect,
  onRelease,
  onDrop,
}: {
  party: string;
  profiles: Candidate[];
  locked?: Candidate;
  onSelect: (c: Candidate) => void;
  onRelease: () => void;
  onDrop: (id: string) => void;
}) {
  const visibleProfiles = locked ? [locked] : profiles;

  return (
    <div
      className={`party-map-group free-nodes ${locked ? 'confirmed' : ''}`}
      onDragOver={e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }}
      onDrop={e => {
        e.preventDefault();
        e.stopPropagation();

        onDrop(
          e.dataTransfer.getData('application/x-rumbo-candidate') ||
          e.dataTransfer.getData('text/plain')
        );
      }}
    >
      <span
        className="map-party-label"
        style={{ color: parties[party] }}
      >
        {party}
        {locked && <LockKeyhole size={11} />}
      </span>

      <div className="free-cluster">
        {visibleProfiles.map(candidate => (
          <Avatar
            key={candidate.id}
            candidate={candidate}
            small
            onClick={() => onSelect(candidate)}
          />
        ))}

        {!visibleProfiles.length && (
          <span className="empty-party-position">
            + Posición disponible
          </span>
        )}
      </div>

      {locked && (
        <button className="release-node" onClick={onRelease}>
          Liberar
        </button>
      )}
    </div>
  ); 
 }
export default function App(){
 const [scenario,setScenario]=useState<Scenario>(initial),[view,setView]=useState<'map'|'graph'>('map'),[level,setLevel]=useState<Level>('municipio'),[selected,setSelected]=useState(14),[party,setParty]=useState('Todos'),[query,setQuery]=useState(''),[modal,setModal]=useState<{c:Candidate;p:Position}|null>(null),[notice,setNotice]=useState(''),[adding,setAdding]=useState(false),[benchSelection,setBenchSelection]=useState('');
 const file=useRef<HTMLInputElement>(null),timer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined);
 const [draft,setDraft]=useState({name:'',party:'PAN',photoUrl:'',bio:'',destination:'current'});
 const [formError,setFormError]=useState('');
 const ps=party==='Todos'?Object.keys(parties):[party],ids=level==='gubernatura'?[22]:Array.from({length:level==='municipio'?18:level==='distrito_local'?15:6},(_,i)=>i+1),current=position(level,selected);
 const locked=(p:Position,pa:string)=>scenario.profiles.find(c=>c.id===scenario.locks[key(p,pa)]);
 const profiles=(p:Position,pa:string)=>available(scenario,p,pa);
 const message=(s:string)=>{setNotice(s);clearTimeout(timer.current);timer.current=setTimeout(()=>setNotice(''),4500)};
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape'){setModal(null);setAdding(false)}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
 function confirm(c:Candidate,p:Position){try{const next=confirmCandidate(scenario,c.id,p),count=next.bench.length-scenario.bench.length;setScenario(next);setModal(null);message(`Perfil confirmado.${count?` ${count} aspirante(s) trasladados a la banca.`:''}`)}catch(e){message((e as Error).message)}}
 function release(p:Position,pa:string){setScenario(s=>{const locks={...s.locks};delete locks[key(p,pa)];return {...s,locks}});message('Posición liberada. Los perfiles de la banca esperan una nueva asignación.')}
 function assign(id:string,p:Position,pa?:string){try{const c=scenario.profiles.find(c=>c.id===id);if(pa&&c?.party!==pa)throw Error(`Arrastra el perfil a una posición de ${c?.party||'su partido'}.`);setScenario(assignCandidate(scenario,id,p));setBenchSelection('');message(`Aspirante asignado a ${p.positionName}.`)}catch(e){message((e as Error).message)}}
 function save(){try{localStorage.setItem(storage,JSON.stringify(scenario));message('Escenario guardado con perfiles, banca y posiciones.')}catch{message('No fue posible guardar. Intenta reducir el tamaño de las fotografías.')}}
 function download(){const u=URL.createObjectURL(new Blob([JSON.stringify(scenario,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=u;a.download='escenario-rumbo2027.json';a.click();URL.revokeObjectURL(u)}
 const dropProps=(p:Position,pa?:string)=>({onDragOver:(e:React.DragEvent)=>{e.preventDefault();e.dataTransfer.dropEffect='move'},onDrop:(e:React.DragEvent)=>{e.preventDefault();e.stopPropagation();assign(e.dataTransfer.getData('application/x-rumbo-candidate')||e.dataTransfer.getData('text/plain'),p,pa)}});
 const card=(p:Position,pa:string)=>{const c=locked(p,pa),list=profiles(p,pa);return <div className="position-card" key={key(p,pa)} {...dropProps(p,pa)}><div className="card-top"><span style={{color:parties[pa]}}><i style={{background:parties[pa]}}/>{pa==='IND'?'Independiente':pa}</span>{c?<LockKeyhole size={13}/>:<span className="open-label">Abierta · soltar aquí</span>}</div><Orbit profiles={list} locked={c} onSelect={c=>setModal({c,p})}/><div className="card-bottom">{c?<button onClick={()=>release(p,pa)}><Unlock size={12}/> Liberar</button>:<><span>{list.length?'Selecciona un perfil para explorar':'Posición disponible'}</span>{benchSelection&&scenario.profiles.find(c=>c.id===benchSelection)?.party===pa&&<button className="assign-button" onClick={()=>assign(benchSelection,p,pa)}>Asignar perfil seleccionado</button>}</>}</div></div>};
 function addCandidate(e:React.FormEvent){e.preventDefault();setFormError('');if(draft.photoUrl&&!/^https?:\/\//i.test(draft.photoUrl)&&!/^data:image\/(png|jpeg|webp|gif);base64,/i.test(draft.photoUrl)){setFormError('Usa una URL http/https o carga una fotografía.');return}if(draft.destination==='current'&&locked(current,draft.party)){setFormError('Esta posición está bloqueada. Selecciona la banca o libera la posición.');return}const c:Candidate={id:`custom-${crypto.randomUUID()}`,name:draft.name.trim(),party:draft.party,photoUrl:draft.photoUrl.trim(),bio:draft.bio.trim(),aspirations:draft.destination==='current'?[current]:[]};if(!c.name)return;setScenario(s=>({...s,profiles:[...s.profiles,c],bench:draft.destination==='bench'?[...s.bench,c.id]:s.bench}));setAdding(false);setDraft({name:'',party:'PAN',photoUrl:'',bio:'',destination:'current'});message('Nuevo aspirante agregado al escenario.')}
 return <div className="app"><aside className="rail"><div className="brand-icon"><Compass size={25}/></div><button className={view==='map'?'active':''} onClick={()=>setView('map')} title="Mapa territorial"><Map size={21}/></button><button className={view==='graph'?'active':''} onClick={()=>setView('graph')} title="Diagrama de posiciones"><Network size={21}/></button><div className="rail-bottom">QRO<br/><span>27</span></div></aside><div className="workspace">
<header>
  <div className="wordmark">RUMBO<span>2027</span><em>QUERÉTARO</em></div>
  <div className="header-right">
    <span className="live-dot"/> Laboratorio de escenarios <span className="demo-badge">DEMO</span>
    <a href="https://i.ibb.co/vxrNNZFF/TMP-remove.png" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '12px', display: 'inline-flex', verticalAlign: 'middle' }}>
      <img src="https://i.ibb.co/vxrNNZFF/TMP-remove.png" alt="Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
    </a>
  </div>
</header>    
<div className="toolbar"><div className="view-switch"><button className={view==='map'?'selected':''} onClick={()=>setView('map')}><Map size={15}/> Mapa</button><button className={view==='graph'?'selected':''} onClick={()=>setView('graph')}><Network size={15}/> Listas</button></div><div className="tools"><button onClick={()=>{setFormError('');setAdding(true)}}><Plus size={15}/> Agregar aspirante</button><button onClick={save}><Save size={15}/> Guardar escenario</button><button onClick={download} title="Descargar JSON"><Download size={16}/></button><button onClick={()=>file.current?.click()} title="Cargar JSON"><Upload size={16}/></button><button onClick={()=>{if(window.confirm('¿Liberar todas las posiciones y devolver los aspirantes de la banca a sus posiciones originales? Los perfiles nuevos se conservarán.')){const base=initialScenario();setScenario(s=>({...s,locks:{},bench:s.bench.filter(id=>s.profiles.find(c=>c.id===id)?.aspirations.length===0&&!base.profiles.some(c=>c.id===id)),profiles:s.profiles.map(c=>base.profiles.find(b=>b.id===c.id)||c)}))}}} title="Reiniciar"><RotateCcw size={15}/></button></div></div><div className="filters"><SlidersHorizontal size={15}/><span>PARTIDOS</span><div className="party-list">{['Todos',...Object.keys(parties)].map(p=><button key={p} className={party===p?'chosen':''} onClick={()=>setParty(p)}>{p!=='Todos'&&<i style={{background:parties[p]}}/>}{p==='Todos'?'Todos los partidos':p}</button>)}</div></div><main className={view==='map'?'map-layout':'graph-layout'}><section className="canvas"><div className="canvas-heading"><div><span className="eyebrow">{view==='map'?'EXPLORACIÓN TERRITORIAL':'ARQUITECTURA DE CANDIDATURAS'}</span><h2>{levels[level]} <span> / Querétaro</span></h2></div><div className="select-wrap"><select aria-label="Nivel de elección" value={level} onChange={e=>{const l=e.target.value as Level;setLevel(l);setSelected(l==='gubernatura'?22:l==='municipio'?14:1)}}>{Object.entries(levels).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select><ChevronDown size={14}/></div></div>{view==='map'?<><div className="territory-picker"><label htmlFor="territory">Territorio</label><select id="territory" value={selected} onChange={e=>setSelected(Number(e.target.value))}>{ids.map(id=><option key={id} value={id}>{position(level,id).positionName}</option>)}</select></div><Mapa level={level} selected={selected} onSelect={setSelected} nodes={ps.map(pa=><PartyNode key={key(current,pa)} party={pa} profiles={profiles(current,pa)} locked={locked(current,pa)} onSelect={c=>setModal({c,p:current})} onRelease={()=>release(current,pa)} onDrop={id=>assign(id,current,pa)}/>)}/></>:<div className="graph-scroll">{ids.filter(id=>position(level,id).positionName.toLowerCase().includes(query.toLowerCase())).map(id=><section className="graph-section" key={id}><div className="graph-title"><span>{String(id).padStart(2,'0')}</span><h3>{position(level,id).positionName}</h3></div><div className="cards-grid">{ps.map(pa=>card(position(level,id),pa))}</div></section>)}</div>}<div className="canvas-footer"><span><i className="legend-ring"/> Aspirantes por partido</span><span><LockKeyhole size={12}/> Perfil confirmado</span></div></section>{view==='map'&&<aside className="detail"><div className="detail-heading"><span className="eyebrow">TERRITORIO SELECCIONADO</span><span className="region-code">{level==='gubernatura'?'QRO':String(selected).padStart(3,'0')}</span><h2>{level==='municipio'?municipalities[selected-1]:current.positionName}</h2><p>{levels[level]} <ArrowUpRight size={13}/></p></div><div className="detail-stats"><div><strong>{ps.reduce((n,pa)=>n+profiles(current,pa).length,0)}</strong><span>Aspirantes</span></div><div><strong>{ps.filter(pa=>locked(current,pa)).length}</strong><span>Confirmados</span></div><div><strong>{ps.length}</strong><span>Partidos</span></div></div><div className="detail-label">CONFIGURACIÓN POR PARTIDO</div><div className="detail-cards">{ps.map(pa=>card(current,pa))}</div></aside>}</main><section className="bench" aria-label="Banca de aspirantes"><div className="bench-heading"><div><Armchair size={19}/><h3>Banca de aspirantes <span>{scenario.bench.length}</span></h3></div><p>Arrastra un perfil a una posición abierta de su partido, o selecciónalo y usa «Asignar».</p></div>{scenario.bench.length?<><div className="bench-people">{scenario.bench.map(id=>{const c=scenario.profiles.find(c=>c.id===id)!;return <div key={id} className={`bench-person ${benchSelection===id?'chosen':''}`}><Avatar candidate={c} draggable onClick={()=>setBenchSelection(benchSelection===id?'':id)}/><span style={{color:parties[c.party]}}>{c.party}</span></div>})}</div>{benchSelection&&<div className="bench-actions"><label>Nueva aspiración<select aria-label="Nivel para reasignar" value={level} onChange={e=>{const l=e.target.value as Level;setLevel(l);setSelected(l==='gubernatura'?22:1)}}>{Object.entries(levels).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select><select aria-label="Posición para reasignar" value={selected} onChange={e=>setSelected(Number(e.target.value))}>{ids.map(id=><option key={id} value={id}>{position(level,id).positionName}</option>)}</select></label><button className="assign-button" onClick={()=>assign(benchSelection,current)}>Asignar a esta posición</button></div>}</>:<p className="bench-empty">Al bloquear una posición, los demás aspirantes de ese partido pasarán aquí.</p>}</section><footer><span><i/> ENTORNO DE SIMULACIÓN</span><span>Perfiles no oficiales</span><span>Querétaro, México / 2027</span></footer></div>{view==='graph'&&<label className="graph-search"><Search size={14}/><input placeholder="Buscar posición…" value={query} onChange={e=>setQuery(e.target.value)}/></label>}<input hidden ref={file} type="file" accept=".json,application/json" onChange={async e=>{try{const f=e.target.files?.[0];if(!f)return;setScenario(validateScenario(JSON.parse(await f.text())));setBenchSelection('');setModal(null);message('Escenario importado con sus perfiles y banca.')}catch(err){message(err instanceof Error?err.message:'Archivo inválido')}e.target.value=''}}/>{notice&&<div role="status" className="toast"><Check size={17}/>{notice}</div>}{modal&&<div className="modal-backdrop" onClick={()=>setModal(null)}><section className="modal" role="dialog" aria-modal="true" aria-label="Ficha de perfil" onClick={e=>e.stopPropagation()}><button className="close" aria-label="Cerrar" onClick={()=>setModal(null)}><X/></button><span className="eyebrow">FICHA DE PERFIL</span><Avatar candidate={modal.c} onClick={()=>{}}/><h2>{modal.c.name}</h2><span style={{color:parties[modal.c.party]}}>{modal.c.party}</span><p>{modal.c.bio}</p><h4>Aspiraciones registradas</h4>{modal.c.aspirations.map(p=><div className="aspiration" key={`${p.level}:${p.targetId}`}>{p.positionName}{scenario.locks[key(p,modal.c.party)]===modal.c.id&&<LockKeyhole size={13}/>}</div>)}{locked(modal.p,modal.c.party)?.id===modal.c.id?<button className="primary" onClick={()=>{release(modal.p,modal.c.party);setModal(null)}}><Unlock size={15}/> Liberar posición</button>:<><button className="primary" onClick={()=>confirm(modal.c,modal.p)}><LockKeyhole size={15}/> Confirmar y bloquear posición</button><small>Los demás aspirantes de {modal.c.party} en esta posición pasarán a la banca.</small></>}<small>{modal.p.positionName} · {modal.c.party}</small></section></div>}{adding&&<div className="modal-backdrop" onClick={()=>setAdding(false)}><form className="modal add-form" role="dialog" aria-modal="true" aria-label="Agregar aspirante" onClick={e=>e.stopPropagation()} onSubmit={addCandidate}><button type="button" className="close" aria-label="Cerrar" onClick={()=>setAdding(false)}><X/></button><span className="eyebrow">NUEVO PERFIL</span><h2>Agregar aspirante</h2><label>Nombre completo<input autoFocus required maxLength={150} value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})}/></label><label>Partido<select value={draft.party} onChange={e=>setDraft({...draft,party:e.target.value})}>{Object.keys(parties).map(p=><option key={p}>{p}</option>)}</select></label><label>Fotografía (URL opcional)<input value={draft.photoUrl} onChange={e=>setDraft({...draft,photoUrl:e.target.value})} placeholder="https://…"/></label><label>O cargar fotografía<input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={async e=>{const f=e.target.files?.[0];if(!f)return;if(!['image/png','image/jpeg','image/webp','image/gif'].includes(f.type)||f.size>2*1024*1024){setFormError('Carga una imagen PNG, JPG, WebP o GIF de hasta 2 MB.');return}const reader=new FileReader();reader.onload=()=>{setDraft(d=>({...d,photoUrl:String(reader.result)}));setFormError('')};reader.readAsDataURL(f)}}/></label><label>Reseña<textarea value={draft.bio} maxLength={5000} onChange={e=>setDraft({...draft,bio:e.target.value})}/></label><label>Ubicación inicial<select value={draft.destination} onChange={e=>setDraft({...draft,destination:e.target.value})}><option value="current">{current.positionName}</option><option value="bench">Banca de aspirantes</option></select></label>{formError&&<p role="alert" className="form-error">{formError}</p>}<button className="primary" type="submit"><Plus size={16}/> Agregar aspirante</button></form></div>}</div>
}
