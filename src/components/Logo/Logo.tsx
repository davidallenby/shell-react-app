/// <reference types="vite-plugin-svgr/client" />

import LogoSVG from '@assets/svg/react.svg?react';
import type { FC } from 'react';

interface LogoProps {
	className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => <LogoSVG className={className} />;

export default Logo;
