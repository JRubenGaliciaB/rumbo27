import {FEDERAL_DISTRICTS_GEOJSON} from './geoData';
import shapes from './shapes.json';
export const sectionCount=FEDERAL_DISTRICTS_GEOJSON.features.length;
export const geography=shapes as Record<string,any>;
