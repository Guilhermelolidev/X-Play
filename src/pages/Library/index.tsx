import { TypeBar } from '../../components/TypeBar';
import { MusicBox } from '../../components/MusicBox';
import { Container, MusicBoxContainer } from './styles';
import { musics } from '../../utils/constants';
import { useState } from 'react';

export const LibraryPage = () => {
   const [typeActive, setTypeActive] = useState<string>('Músicas');

   const onSelect = (value: string) => {
      setTypeActive(value);
   };

   return (
      <Container>
         <p className="title">Sua Biblioteca</p>

         <TypeBar typeActive={typeActive} onSelect={onSelect} />

         <MusicBoxContainer>
            {musics.slice(0, 8).map((music) => (
               <MusicBox music={music} key={music.text} />
            ))}
         </MusicBoxContainer>
      </Container>
   );
};
