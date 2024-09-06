import React, { FC, ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  type: 'button'|'submit'|'reset'|undefined;
  theme: 'primary'|'secondary'|'warn'|'danger';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type, children, theme
}) => (
  <button type={type} 
    className={`Button Button--${theme}`}
    data-testid="Button"
  >
    { children }
  </button>
);

export default Button;
