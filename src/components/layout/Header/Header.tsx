import { LogoLink } from '@components/routing/LogoLink/LogoLink';
import classNames from 'classnames';
import type { FC } from 'react';

interface HeaderProps {
	sticky?: boolean;
}

const Header: FC<HeaderProps> = ({ sticky = false }) => {
	return (
		<header
			className={classNames('Header w-full bg-white p-4', {
				'sticky top-0 z-10': sticky
			})}
			data-testid="Header"
		>
			<LogoLink />
		</header>
	);
};

export default Header;
