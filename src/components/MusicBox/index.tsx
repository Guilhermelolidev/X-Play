import { Card } from './styles';

interface MusicBoxProps {
   music: {
      image: string;
      text: string;
      tipo: string;
   };
   hasType?: boolean;
   hasChevron?: boolean;
   width?: string;
}

export const MusicBox = ({
   music,
   hasType = false,
   hasChevron = false,
   width = '196px',
}: MusicBoxProps) => {
   const { image, text, tipo } = music;
   const chevron = '>';

   return (
      <Card className="cardMusicBox" width={width}>
         <img src={image} alt={text} />

         <div className="containerInfo">
            <p className="text">{text}</p>
            {hasType && <p className="tipo">{tipo}</p>}
         </div>

         {hasChevron && <p className="chevron">{chevron}</p>}
      </Card>
   );
};
