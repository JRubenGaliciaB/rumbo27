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
    id: 'ulises-gomez',
    name: 'Ulises Gómez de la Rosa',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/UGR.png',
    party: 'MORENA', 
    aspirations: [
      position('distrito_federal', 6)
    ],
    bio: `Diputada Local`
  },

       {
    id: 'eli-luna',
    name: 'Eli Luna',
    photoUrl: 'https://scontent.fgua14-1.fna.fbcdn.net/v/t39.30808-6/615829190_1527070162758065_4792420168897342509_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M6pFLAZRXwMQ7kNvwFf8B_2&_nc_oc=Ado8d-eauHy2Ffue7sm3_gKd31NScO1tyji9cHoePQffY1-3Xwa4CX6lW3ZsbgDqPlHJ--oDCSMwK3hlpJDMPQ97&_nc_zt=23&_nc_ht=scontent.fgua14-1.fna&_nc_gid=dqEhbsiVT4x8zrkEg6aI4A&_nc_ss=78289&oh=00_AQOPZUnQ1N0GWvioWDJMuL4T7cnzjJCwJNVCDCzH3Mb-pw&oe=6ADD62CD',
    party: 'MORENA', 
    aspirations: [
      position('distrito_federal', 5)
    ],
    bio: `Regidora del municipio de El Marqués`
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
    bio: `Presidente Municipal de El Marqués`
  },

                                    {
    id: 'lei-ordonez',
    name: 'Lei Ordóñez',
    photoUrl: 'https://tse2.mm.bing.net/th/id/OIP.avuqzx6Iv1B91u6kxL1yOQHaHe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 10)
    ],
    bio: `Presidente Municipal de El Marqués`
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
    party: 'MORENA', 
    aspirations: [
      position('municipio', 16)
    ],
    bio: `Diputado local`
  },

                    {
    id: 'ricardo-astudillo',
    name: 'Ricardo Astudillo',
    photoUrl: 'https://tse1.explicit.bing.net/th/id/OIP.rQDFJi5JzUw8UHMiWph-IAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'MORENA', 
    aspirations: [
      position('municipio', 16)
    ],
    bio: `Diputado Federal
    Ex Diputado local`
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
    photoUrl: 'https://ciudadypoder.mx/wp-content/uploads/2024/07/Hector-Magana-4-scaled-e1721233537806.jpg',
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
  
                                {
    id: 'dulce-ventura',
    name: 'Dulce Ventura',
    photoUrl: 'https://tse1.explicit.bing.net/th/id/OIP.IcqWcg05IJUxTf1ak4G3DQHaHR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 1)
    ],
    bio: `Ex Diputada Local`
  },

    {
    id: 'chava-martinez',
    name: 'Chava Martínez',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.DEmLbSn3o79xMSa5zGMvQAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 1)
    ],
    bio: `Director Adjunto CEA
    Ex Diputado Local`
  },
 
      {
    id: 'manuel-pozo',
    name: 'Manuel Pozo Cabrera',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.DEmLbSn3o79xMSa5zGMvQAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 2)
    ],
    bio: `Regidor de Querétaro
    Ex Diputado Local`
  },

        {
    id: 'manuel-pozo',
    name: 'Manuel Pozo Cabrera',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.Dc1fknWOBbDHt2Gj0jqC1wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 2)
    ],
    bio: `Regidor de Querétaro
    Ex Diputado Local`
  },

        {
    id: 'adolfo-rios',
    name: 'Adolfo Ríos',
    photoUrl: 'https://tse2.mm.bing.net/th/id/OIP.pe2-E0H3FfionE7sZFZ4tQHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 3)
    ],
    bio: `Delegado de Felix Osores
    Ex Director CECA`
  },

          {
    id: 'laura-aguilar',
    name: 'Laura Aguilar',
    photoUrl: 'https://tse2.mm.bing.net/th/id/OIP.6f-U10FzSw3A7Wm72Eth7QHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 4)
    ],
    bio: `Coordinadora de jefatura de gabinete`
  },

            {
    id: 'juliana-hernandez',
    name: 'Juliana Hernández',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/JRHQ.png',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 5)
    ],
    bio: `Diputada Local
    Ex regidora de Querétaro`
  },

              {
    id: 'mauricio-cardenas',
    name: 'Mauricio Cárdenas Palacios',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/MCP.png',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 6)
    ],
    bio: `Diputado Local`
  },

  {
    id: 'enrique-correa',
    name: 'Enrique Correa',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/EACS.png',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 7)
    ],
    bio: `Diputado Local`
  },
    {
    id: 'irene-quintanar',
    name: 'Irene Quintanar',
    photoUrl: 'https://inqro.com.mx/wp-content/uploads/2024/08/IRENE-QUINTANAR.jpg',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 7)
    ],
    bio: `Coordinadora USEBEQ`
  },

      {
    id: 'roberto-sosa',
    name: 'Roberto Sosa',
    photoUrl: 'https://sil.gobernacion.gob.mx/Archivos/Fotos/9228353.jpg',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 8)
    ],
    bio: `Diputado Federal
    Ex Presidente Municipal de Corregidora`
  },

        {
    id: 'tono-perezc',
    name: 'Antonio Pérez Cabrera',
    photoUrl: 'https://tse2.mm.bing.net/th/id/OIP.ftANymWYxOpDC_jkjE-xSgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 10)
    ],
    bio: `Director JAPAM SJR`
  },

          {
    id: 'lili-sanmartin',
    name: 'Lili San Martín',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.j43_LWN_QCUgCIZhpq0BIQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 11)
    ],
    bio: `Secretaria del Trabajo Gobierno del Estado de Querétaro`
  },


            {
    id: 'antonio-perezm',
    name: 'Antonio Pérez Martínez',
    photoUrl: 'https://tse2.mm.bing.net/th/id/OIP.__VZBdQE4JkVSokwcMjkkwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 12)
    ],
    bio: `Coordinador UAQ Pedro Escobedo `
  },

                          {
    id: 'juancarlos-pinia',
    name: 'Juan Carlos Piña',
    photoUrl: 'https://tse4.mm.bing.net/th/id/OIP.Yy0Fh59Epj7VKaMFoml_6gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 12)
    ],
    bio: `Director de Recursos Humanos Secretaria de Salud
    Ex regidor de Pedro Escobedo`
  },

                            {
    id: 'veronica-galicia',
    name: 'Verónica Galicia',
    photoUrl: 'https://site.legislaturaqueretaro.gob.mx/CloudPLQ/Dips/LXI/fotos/AVGC.png',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 13)
    ],
    bio: `Diputada Local`
  },


        {
    id: 'lety-rubio',
    name: 'Lety Rubio',
    photoUrl: 'https://rotativo.com.mx/media-library/lety-rubio-fortalecera-desarrollo-del-semidesierto-de-queretaro-2.jpg?id=62411619&width=1245&height=700&quality=50&coordinates=0%2C0%2C0%2C1',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 14)
    ],
    bio: `Ex Diputada Local`
  },

          {
    id: 'lupita-perez',
    name: 'Lupita Pérez',
    photoUrl: 'https://vozytestimonio.com/wp-content/uploads/2021/10/Lupita-Perez-Montes.jpg',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 14)
    ],
    bio: `Ex Presidenta Municipal de Ezequiel Montes`
  },

            {
    id: 'lupita-ramirez',
    name: 'Lupita Ramírez',
    photoUrl: 'https://tse1.mm.bing.net/th/id/OIP.x3zgwIbmcTyNoKDD6SJXDAHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    party: 'PAN', 
    aspirations: [
      position('distrito_local', 15)
    ],
    bio: `Presidenta Municipal de Pinal de Amoles`
  },

];