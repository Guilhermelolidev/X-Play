import { TypeBar } from '../../components/TypeBar';
import { MusicBox } from '../../components/MusicBox';
import { Container, MusicBoxContainer } from './styles';
import { musics } from '../../utils/constants';

export const LibraryPage = () => {
  return (
    <Container>
      <p className="title">Sua Biblioteca</p>

      <TypeBar />

      <MusicBoxContainer>
        {musics.map((music) => (
          <MusicBox music={music} />
        ))}
      </MusicBoxContainer>
    </Container>
  );
};
