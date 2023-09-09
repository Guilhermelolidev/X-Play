import music1 from '../assets/music1.png';
import music2 from '../assets/music2.png';
import music3 from '../assets/music3.png';
import music4 from '../assets/music4.png';
import music5 from '../assets/music5.png';
import music6 from '../assets/music6.png';
import music7 from '../assets/music7.png';
import music8 from '../assets/music8.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import home from '../assets/home.svg';
import search from '../assets/search.svg';
import library from '../assets/library.svg';
import settings from '../assets/settings.svg';
import home_active from '../assets/active_home.svg';
import search_active from '../assets/active_search.svg';
import library_active from '../assets/active_library.svg';
import settings_active from '../assets/active_settings.svg';

export interface IMusic {
   image: string;
   text: string;
   tipo: string;
}

export const musics: IMusic[] = [
   {
      image: music1,
      text: 'The wall - Pink Floyd',
      tipo: 'Música',
   },
   {
      image: music2,
      text: 'Bad Reputation',
      tipo: 'Música',
   },
   {
      image: music3,
      text: 'I love rock n roll',
      tipo: 'Música',
   },
   {
      image: music4,
      text: 'Another One Bites The Dust',
      tipo: 'Música',
   },
   {
      image: music7,
      text: 'Sargent Peppers and the Broken Heart sons',
      tipo: 'Música',
   },
   {
      image: music5,
      text: 'Who want To Live Forever',
      tipo: 'Música',
   },
   {
      image: music8,
      text: 'Bete Balanço',
      tipo: 'Música',
   },
   {
      image: music6,
      text: 'Let it be',
      tipo: 'Música',
   },
   {
      image: music1,
      text: 'RPM',
      tipo: 'Artista',
   },
   {
      image: music1,
      text: 'Os mutantes',
      tipo: 'Artista',
   },
   {
      image: music8,
      text: 'U2',
      tipo: 'Artista',
   },
];

export const optionsType = [
   {
      text: 'Músicas',
   },
   {
      text: 'Álbuns',
   },
   {
      text: 'Podcasts',
   },
   {
      text: 'Artistas',
   },
];

interface IOptions {
   src: string;
   alt: string;
   srcIsActive: string;
}

export const optionsNavigation: IOptions[] = [
   {
      src: home,
      alt: 'home',
      srcIsActive: home_active,
   },
   {
      src: search,
      alt: 'search',
      srcIsActive: search_active,
   },
   {
      src: library,
      alt: 'library',
      srcIsActive: library_active,
   },
   {
      src: settings,
      alt: 'settings',
      srcIsActive: settings_active,
   },
];

export const images = [
   {
      image: img2,
      text: 'Sextou',
   },
   {
      image: img3,
      text: 'Segundou',
   },
   {
      image: img1,
      text: 'Hora do foco no trabalho',
   },
   {
      image: img4,
      text: 'Almoçando em grande estilo',
   },
];
