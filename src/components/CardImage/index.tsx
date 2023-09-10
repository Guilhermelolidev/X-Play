import { Container } from './styles';

interface CardImageProps {
   image: string;
   text?: string;
}

export const CardImage = ({ image, text }: CardImageProps) => {
   return (
      <Container whileTap={{ cursor: 'grabbing' }}>
         <img src={image} alt={text || ''} draggable={false} />
         <p className="titleCardImage">{text}</p>
      </Container>
   );
};
