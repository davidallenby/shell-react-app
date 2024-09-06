import { FC } from 'react';
import './Button.css';
import { ButtonProps } from './Button.interfaces';

// Themes for each type of button
const buttonThemes: { [theme: string]: string } = {
  'primary': 'border-primary bg-primary text-white hover:bg-primary/90',
  'danger': 'bg-red-500 text-white hover:bg-red-500/90',
  'secondary': 'border-slate-300 bg-white border text-primary hover:text-primary/80 hover:bg-slate-50',
  'warn': 'border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-500/90',
  'link': 'text-primary underline-offset-4 hover:underline'
}

/**
 * Set the button theme depending on what is set via props. Will add default
 * classes before selecting the button theme
 *
 * @param {string} theme
 * @return {*}  {string}
 */
const setTheme = (theme: string): string => {
  let styleClass = `inline-flex items-center justify-center whitespace-nowrap
  rounded-md text-sm font-medium transition-colors focus-visible:outline-none
  focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
  disabled:opacity-50 px-3 py-2 border`;
  styleClass += ` ${buttonThemes[theme]}`;
  return styleClass;
}

const Button: FC<ButtonProps> = ({
  children, 
  disabled,
  onClick,
  theme = 'secondary', 
  type = 'button'
}) => (
  <button type={type} 
    className={`Button ${setTheme(theme)}`}
    data-testid="Button"
    disabled={disabled}
    onClick={onClick}
  >
    { children }
  </button>
);

export default Button;
