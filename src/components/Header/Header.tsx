import { FC } from 'react';
import './Header.css';
import Logo from '@components/Logo/Logo';

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
    <Logo/>
  </header>
);

export default Header;
