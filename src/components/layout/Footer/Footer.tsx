import type { ComponentProps } from 'react';
import './Footer.css';
import { LogoLink } from '@components/routing/LogoLink/LogoLink';
import classNames from 'classnames';

interface FooterProps extends ComponentProps<'footer'> {}

export function Footer({ children, className, ...props }: FooterProps) {
	return (
		<footer {...props} className={classNames('Footer p-4', className)}>
			<LogoLink />
			<div>{children}</div>
		</footer>
	);
}
