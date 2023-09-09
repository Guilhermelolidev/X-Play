import React, { useEffect, useState } from 'react';
import { MusicBox } from '../../components/MusicBox';
import { SearchBar } from '../../components/SearchBar';
import { TypeBar } from '../../components/TypeBar';
import { IMusic, musics } from '../../utils/constants';
import { Container } from './styles';

export const SearchPage = () => {
   const [typeActive, setTypeActive] = useState<string>('Músicas');
   const [searchInput, setSearchInput] = useState<string>('');
   const [filteredMusics, setFilteredMusics] = useState<IMusic[]>([]);

   const onSelect = (value: string) => {
      setTypeActive(value);
   };

   useEffect(() => {
      const filteredMusic = musics.filter(
         (music) =>
            music.text
               .toLocaleLowerCase()
               .includes(searchInput.toLowerCase()) ||
            music.tipo.toLocaleLowerCase().includes(searchInput.toLowerCase())
      );

      setFilteredMusics(filteredMusic);
   }, [searchInput]);

   return (
      <Container>
         <SearchBar
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClear={() => setSearchInput('')}
         />

         <TypeBar typeActive={typeActive} onSelect={onSelect} />

         <div className="containerMusicBox">
            {filteredMusics.map((music) => (
               <MusicBox
                  music={music}
                  hasType
                  hasChevron
                  width="400px"
                  key={music.text}
               />
            ))}
         </div>
      </Container>
   );
};
