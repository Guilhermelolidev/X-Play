import { LogoStyled } from './styles';

interface LogoProps {
   src: string;
}

export const Logo = ({ src }: LogoProps) => {
   return <LogoStyled src={src} className="logo" alt="Logo" />;
};
