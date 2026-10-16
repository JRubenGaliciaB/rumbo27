import type {Candidate,Level,Position} from './types';
export type {Candidate} from './types';
export const municipalities=['Amealco de Bonfil','Arroyo Seco','Cadereyta de Montes','Colón','Corregidora','Ezequiel Montes','Huimilpan','Jalpan de Serra','Landa de Matamoros','El Marqués','Pedro Escobedo','Peñamiller','Pinal de Amoles','Querétaro','San Joaquín','San Juan del Río','Tequisquiapan','Tolimán'];
export const parties:Record<string,string>={PAN:'#4d9aff',MORENA:'#c25578',PRI:'#f16c72',MC:'#fb9b51',PVEM:'#65c694',PT:'#e9cf68',IND:'#b596f1'};
export const levels:Record<Level,string>={gubernatura:'Gubernatura',distrito_federal:'Distritos federales',distrito_local:'Distritos locales',municipio:'Municipios'};
export const position=(level:Level,id:number):Position=>({level,targetId:id,positionName:level==='gubernatura'?'Gubernatura de Querétaro':level==='municipio'?`${municipalities[id-1]}`:`Diputación ${level==='distrito_local'?'local':'federal'} · Distrito ${id}`});
// DATOS perfiles.

export const candidates: Candidate[] = [
  {
    id: 'felifer-macias',
    name: 'Felipe Fernando "Felifer" Macías',
    photoUrl: 'https://pbs.twimg.com/profile_images/2033575436093931522/3cYj4j-E_400x400.jpg',
    party: 'PAN', // Reemplaza por la clave exacta correspondiente en tu objeto 'parties'
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Presidente Municipal de Querétaro 2024-2027
Ex Diputado Federal y Ex regidor de Querétaro`
  },
    {
    id: 'santiago-nieto',
    name: 'Santiago Nieto Castillo',
    photoUrl: 'https://pbs.twimg.com/profile_images/2078169601448321024/IfkvOu_l_400x400.jpg',
    party: 'MORENA', 
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Ex Director del Instituto Mexicano de la Propiedad Industrial
    Ex Director de la Unidad de Inteligencia Financiera (UIF)`
  },
      {
    id: 'abigail-arredondo',
    name: 'Abigail Arredondo',
    photoUrl: 'https://pbs.twimg.com/profile_images/2108176276364161024/ZsJ6HtPj_400x400.jpg',
    party: 'PRI', 
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Presidenta Estatal del PRI en Querétaro
    Diputada Federal y Ex Diputada Local`
  },
  {
    id: 'manuel-montes',
    name: 'Manuel Montes',
    photoUrl: 'https://aldialogo.sfo2.cdn.digitaloceanspaces.com/uploads/2024/02/Manuel-Montes-oficializa-su-registro-como-aspirante-a-la-alcaldia-de-Colon.jpg',
    party: 'PRI', 
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Dirigente CNOP del PRI en Querétaro
    Ex Presidente Municipal de Colón`
  },
    {
    id: 'rene-mejia',
    name: 'René Mejía',
    photoUrl: 'https://vozimparcial.com.mx/wp-content/uploads/2024/01/Screenshot_20240129-003726_Google.jpg',
    party: 'PRI', 
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Ex Presidente Municipal de Amealco`
  },
      {
    id: 'paul-ospital',
    name: 'Paul Ospital',
    photoUrl: 'https://pbs.twimg.com/profile_images/2055816027141763072/U0yYOdbl_400x400.jpg',
    party: 'MC', 
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Diputado Local
    Ex Presidente del PRI en Querétaro`
  },
        {
    id: 'laura-ballesteros',
    name: 'Laura Ballesteros',
    photoUrl: 'https://pbs.twimg.com/profile_images/2077180419582136320/kVJQCRZf_400x400.jpg',
    party: 'MC', 
    aspirations: [
      position('gubernatura', 22)
    ],
    bio: `Diputada Federal
    Ex Presidente del PRI en Querétaro`
  },
          {
    id: 'ivan-resendiz',
    name: 'Iván Reséndiz',
    photoUrl: 'https://scontent.fqro3-1.fna.fbcdn.net/v/t39.99422-6/838645738_1102442305910446_7125524395298320142_n.png?stp=dst-jpg_tt6&cstp=mx1500x1999&ctp=s1500x1999&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qs2ZAbiDwXgQ7kNvwGDMggQ&_nc_oc=AdpRNpIguL8QmAy6RoVqouLUV8VjP0f5PgOr5cutdSEOf7Zh8YLUwUV4x9CinJEW5qwvmNfdQnr72zjCQlnoK7UE&_nc_zt=14&_nc_ht=scontent.fqro3-1.fna&_nc_gid=F_nL-fvMqSk70LMex5pYqw&_nc_ss=78289&oh=00_AQMn1TcHnDrUw_rYi4UrFTkL20V198lSDtRF7UgzpbWong&oe=6AD656BF',
    party: 'MORENA', 
    aspirations: [
      position('distrito_federal', 1)
    ],
    bio: `Presidente Municipal de Ezequiel Montes`
  },
            {
    id: 'sonia-rocha',
    name: 'Sonia Rocha',
    photoUrl: 'https://pbs.twimg.com/media/HTLcp7WW4AEUb4b?format=jpg&name=large',
    party: 'PAN', 
    aspirations: [
      position('distrito_federal', 1)
    ],
    bio: `Secretaria de las Muejeres Gobierno del Estado de Querétaro
    Ex Diputada Federal y Ex Diputada Local`
  },
              {
    id: 'agustin-dorantes',
    name: 'Agustín Dorantes',
    photoUrl: 'https://pbs.twimg.com/profile_images/2094801320167219200/z9pfw72z_400x400.jpg',
    party: 'PAN', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Senador de la República
    Ex Secretario de Desarrollo Social
    Ex Diputada Local`
  },
                {
    id: 'mauricio-ruiz',
    name: 'Mauricio Ruiz Olaes',
    photoUrl: 'https://pbs.twimg.com/profile_images/2081785521336893440/uNssvIfB_400x400.jpg',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Ex Delegado de la SEP en Querétaro
    Ex Diputada Local`
  },

                    {
    id: 'claudia-diaz',
    name: 'Claudia Díaz Gayou',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/CDG.png',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Diputada Local`
  },
                      {
    id: 'andrea-tovar',
    name: 'Andrea Tovar',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/LATS.png',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Diputada Local`
  },
                        {
    id: 'fernando-flores',
    name: 'Fernando Flores AVSE',
    photoUrl: 'https://storage.googleapis.com/munqro-storage/archivos/457bc3bce5ad4376397938bee9275659_b1b23b25fbd17bc6f41102f0717d842500adcba01d747d2288eac4d7f5c6badf.jpeg',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Regidor del municipio de Querétaro`
  },
  
                          {
    id: 'cesar-gutierrez',
    name: 'César Gutiérrez GUTI',
    photoUrl: 'https://pbs.twimg.com/media/HDGWT1paMAQbJXC?format=jpg&name=large',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Ex coordinador del corredor industrial de Querétaro`
  },
                          {
    id: 'arturo-maximiliano',
    name: 'Arturo Maximiliano',
    photoUrl: 'https://pbs.twimg.com/profile_images/1839435943088111616/YHeMPpcT_400x400.jpg',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: `Diputado local 
    Ex candidato a la presidencia municipal de Querétaro`
  },

                            {
    id: 'chema-tapia',
    name: 'Chema Tapia',
    photoUrl: 'https://pbs.twimg.com/media/HLyWeGnWYAAhe8j?format=jpg&name=medium',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: ` Ex candidato a la presidencia municipal de Querétaro`
  },
                          {
    id: 'armando-rivera',
    name: 'Armando Rivera',
    photoUrl: 'https://pbs.twimg.com/profile_images/2083711219647582208/cTpiQkG__400x400.jpg',
    party: 'MC', 
    aspirations: [
      position('municipio', 14)
    ],
    bio: ` Ex Presdiente municipal de Querétaro`
  },
                              {
    id: 'josue-guerrero',
    name: 'Josué Chepe Guerrero',
    photoUrl: 'https://pbs.twimg.com/profile_images/2097203041921597441/ySee3k8c_400x400.jpg',
    party: 'PAN', 
    aspirations: [
      position('municipio', 5)
    ],
    bio: `Presidente Municipal de Corregidora`
  },

                                {
    id: 'mireya-fernandez',
    name: 'Mireya Fernández',
    photoUrl: 'https://pbs.twimg.com/profile_images/1797821575754039296/dOTQblVj_400x400.jpg',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 5)
    ],
    bio: `Regidora de Corregidora
    Ex canidata a la presidencia municipal de Corregidora`
  },

                                  {
    id: 'rodrigo-monsalvo',
    name: 'Rodrigo Monsalvo',
    photoUrl: 'https://pbs.twimg.com/profile_images/2106245840624910336/TPd93R0j_400x400.jpg',
    party: 'PAN', 
    aspirations: [
      position('municipio', 10)
    ],
    bio: `Regidora de Corregidora
    Ex canidata a la presidencia municipal de Corregidora`
  },
              {
    id: 'gina-guzman',
    name: 'Gina Guzmán',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MGGA.png',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 7)
    ],
    bio: `Diputada Local`
  },

                {
    id: 'tania-ruiz',
    name: 'Tania Ruiz',
    photoUrl: 'https://pbs.twimg.com/profile_images/2074592013194764288/5aZWqTTX_400x400.jpg',
    party: 'PAN', 
    aspirations: [
      position('municipio', 16)
    ],
    bio: `Coordinadora de proyectos Gobierno del Estado de Querétaro
    Ex candidata a diputada federal`
  },

                  {
    id: 'edgar-inzunza',
    name: 'Edgar Guero Inzunza',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/EIB.png',
    party: 'PAN', 
    aspirations: [
      position('municipio', 16)
    ],
    bio: `Diputado local`
  },
                    {
    id: 'beto-nava',
    name: 'Beto Nava',
    photoUrl: 'https://tse3.mm.bing.net/th/id/OIP.uCx1o9wV3h6EwxhLQwgWUAHaGC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 11)
    ],
    bio: `Presidente Municipal de Pedro Escobedo`
  },

                      {
    id: 'sully-sixtos',
    name: 'Sully Sixtos',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/SYMS.png',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 11)
    ],
    bio: `Diputada Local`
  },
  
                      {
    id: 'esau-sigala',
    name: 'Esau Sigala',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.Vh5bDY5BLWr-NqcLDHOqiQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'IND', 
    aspirations: [
      position('municipio', 11)
    ],
    bio: ``
  },

                        {
    id: 'juancarlos-pinia',
    name: 'Juan Carlos Piña',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.Yy0Fh59Epj7VKaMFoml_6gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('municipio', 11)
    ],
    bio: `Director de Recursos Humanos Secretaria de Salud
    Ex regidor de Pedro Escobedo`
  },

                          {
    id: 'hector-magania',
    name: 'Héctor Magaña',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.Yy0Fh59Epj7VKaMFoml_6gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 17)
    ],
    bio: `Presidente Municipal de Tequisquiapan
    Ex Diputado Local`
  },

                            {
    id: 'karla-pinera',
    name: 'Karla Piñera',
    photoUrl: 'https://tse1.explicit.bing.net/th/id/OIP.ikJckt1QDuo5Yhgju3nLlgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 17)
    ],
    bio: ``
  },

                              {
    id: 'jario-morales',
    name: 'Jario Morales',
    photoUrl: 'https://tse1.mm.bing.net/th/id/OIP.f4moQd2w_Ayre-5SXdAtpQHaGe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('municipio', 7)
    ],
    bio: `Presidente Municipal de Huimilpan`
  },
  
];