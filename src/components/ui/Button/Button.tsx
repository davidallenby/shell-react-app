import classNames from 'classnames';
import type { FC } from 'react';
import { BUTTON_BASE_STYLE, BUTTON_PADDING, BUTTON_THEMES } from './config';
import type { ButtonVariant } from './types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'submit' | 'reset' | undefined;
	variant?: ButtonVariant;
	size?: 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({
	children,
	disabled,
	onClick,
	variant = 'default',
	size = 'md',
	type = 'button',
	...props
}) => {
	const btnStyleClass = classNames(BUTTON_BASE_STYLE, BUTTON_THEMES[variant], {
		// We don't want padding for link buttons
		[BUTTON_PADDING[size]]: size && variant !== 'link'
	});

	return (
		<button type={type} className={btnStyleClass} data-testid="Button" disabled={disabled} onClick={onClick} {...props}>
			{children}
		</button>
	);
};

export default Button;
