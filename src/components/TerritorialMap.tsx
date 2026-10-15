import type {ReactNode,CSSProperties} from 'react';
import {useEffect,useState} from 'react';
import {MapContainer,GeoJSON,useMap} from 'react-leaflet';
import L from 'leaflet';
import {geography} from '../data/geography';
import type {Level} from '../data/types';
import {municipalities} from '../data/profilesData';
function Fit({data}:{data:any}){const map=useMap();useEffect(()=>{const fit=()=>{map.invalidateSize();map.fitBounds(L.geoJSON(data).getBounds(),{padding:[100,105],animate:false})};fit();const observer=new ResizeObserver(fit);observer.observe(map.getContainer());return()=>observer.disconnect()},[map,data]);return null}
export default function Mapa({level,selected,onSelect,nodes}:{level:Level;selected:number;onSelect:(id:number)=>void;nodes:ReactNode[]}){
 const [expanded,setExpanded]=useState(false);
 const field=level==='municipio'||level==='gubernatura'?'MUNICIPIO':level==='distrito_local'?'DISTRITO_L':'DISTRITO_F';
 const data=geography[field];
 return <div className={`territorial-stage ${expanded?'expanded':''}`}><MapContainer center={[20.85,-99.8]} zoom={8} zoomControl attributionControl={false} className="map"><Fit data={data}/><GeoJSON key={`${field}-${selected}-${level}`} data={data} style={f=>{const active=level==='gubernatura'||Number(f?.properties?.[field])===selected;return {color:active?'#a8d5c1':'#526879',weight:level==='gubernatura'?.4:active?2:1,fillColor:active?'#507565':'#1c2c38',fillOpacity:.65}}} onEachFeature={(f,l)=>{const id=Number(f.properties[field]);l.bindTooltip(level==='gubernatura'?'Querétaro':level==='municipio'?`${String(id).padStart(3,'0')} · ${municipalities[id-1]}`:`Distrito ${id}`,{sticky:true});l.on('click',()=>level!=='gubernatura'&&onSelect(id))}}/></MapContainer><div className="territory-orbits" aria-label="Aspirantes alrededor del mapa">{nodes.map((node,i)=><div className="map-party-node" key={i} style={{'--phase':`${-25+i*100/nodes.length}%`,'--x':`${50+39*Math.cos((-90+i*360/nodes.length)*Math.PI/180)}%`,'--y':`${48+36*Math.sin((-90+i*360/nodes.length)*Math.PI/180)}%`} as CSSProperties}>{node}</div>)}</div><button className="orbit-toggle" onClick={()=>setExpanded(v=>!v)}>{expanded?'Reducir mapa':'Ampliar mapa y órbitas'}</button></div>
}
