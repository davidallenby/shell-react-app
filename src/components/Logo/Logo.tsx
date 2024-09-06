import React, { FC } from 'react';
import './Logo.postcss';

interface LogoProps {}

const Logo: FC<LogoProps> = () => (
  <div className="Logo" data-testid="Logo">
    Logo Component
  </div>
);

export default Logo;
