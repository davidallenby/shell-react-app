/// <reference types="vite-plugin-svgr/client" />
import { FC } from 'react';
import './Logo.css';
import LogoSVG from '@assets/svg/react.svg?react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => (
  <LogoSVG className={className} />
);

export default Logo;
