import { MusicBox } from '../../components/MusicBox';
import { Slider } from '../../components/Slider';
import { TypeBar } from '../../components/TypeBar';
import { images, musics } from '../../utils/constants';
import { MusicBoxContainer } from '../Library/styles';
import { Container } from './styles';

export const HomePage = () => {
  return (
    <Container>
      <p className="title">Boa tarde, Guilherme!</p>

      <TypeBar />

      <MusicBoxContainer>
        {musics.map((music) => (
          <MusicBox music={music} key={music.text} />
        ))}
      </MusicBoxContainer>

      <p className="secondTitle">Feitos para você</p>

      <Slider data={images} />
    </Container>
  );
};
