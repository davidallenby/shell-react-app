import React, { FC } from 'react';
import './Header.css';

interface HeaderProps {
  sticky?: boolean;
}

const setClasses = (props: HeaderProps): string => {
  let styleClass = 'Header p-4 bg-white w-full';
  if (props.sticky) { styleClass += ' Header--sticky'}
  return styleClass;
}

const Header: FC<HeaderProps> = ({
  sticky = false
}) => (
  <header className={setClasses({ sticky })} 
    data-testid="Header"
  >
    Header Component
  </header>
);

export default Header;
