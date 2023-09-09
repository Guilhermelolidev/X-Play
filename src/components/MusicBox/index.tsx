import { Card } from './styles';

interface MusicBoxProps {
  music: {
    image: string;
    text: string;
  };
}

export const MusicBox = ({ music }: MusicBoxProps) => {
  const { image, text } = music;

  return (
    <Card>
      <img src={image} alt={text} />
      <p>{text}</p>
    </Card>
  );
};
