import { FC, MouseEventHandler, ReactNode } from 'react';
import './Button.css';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'button'|'submit'|'reset'|undefined;
  theme?: 'primary'|'secondary'|'warn'|'danger'|'default';
  disabled?: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

// Themes for each type of button
const buttonThemes: { [theme: string]: string } = {
  'primary': 'border-primary bg-primary text-white hover:bg-primary/90',
  'danger': 'bg-red-500 text-white hover:bg-red-500/90',
  'secondary': 'border-slate-300 bg-white border text-primary hover:text-primary/80 hover:bg-slate-50',
  'warn': 'border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-500/90',
  'link': 'text-primary underline-offset-4 hover:underline'
}
// Base button styles
const baseStyleClass = 
`Button inline-flex items-center justify-center whitespace-nowrap
rounded-md text-sm font-medium transition-colors focus-visible:outline-none
focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
disabled:opacity-50 px-3 py-2 border`

const Button: FC<ButtonProps> = ({
  children, 
  disabled,
  onClick,
  theme = 'secondary', 
  type = 'button'
}) => {

  const btnStyleClass = classNames(
    baseStyleClass, buttonThemes[theme]
  )

  return (
    <button type={type} 
      className={btnStyleClass}
      data-testid="Button"
      disabled={disabled}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

export default Button;
