import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  type?: 'button'|'submit'|'reset'|undefined;
  theme?: 'primary'|'secondary'|'warn'|'danger'|'default';
  disabled?: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}