import React, { useEffect, useState } from 'react';
import { CardImage } from '../CardImage';
import { Carrousel, Inner } from './styles';

interface SliderProps {
   data: {
      image: string;
      text?: string;
   }[];
}

export const Slider = ({ data }: SliderProps) => {
   const slider = React.useRef(HTMLElement.arguments);
   const [width, setWidth] = useState(0);

   useEffect(() => {
      setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth);
   }, [slider]);

   return (
      <Carrousel ref={slider} whileTap={{ cursor: 'grabbing' }}>
         <Inner drag="x" dragConstraints={{ right: 0, left: -width }}>
            {data.map((item) => (
               <CardImage image={item.image} text={item.text} key={item.text} />
            ))}
         </Inner>
      </Carrousel>
   );
};
