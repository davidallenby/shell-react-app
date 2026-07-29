import { LogoLink } from '@components/routing/LogoLink/LogoLink';
import classNames from 'classnames';
import type { FC } from 'react';

interface HeaderProps {
	sticky?: boolean;
}

const Header: FC<HeaderProps> = ({ sticky = false }) => {
	const styleClass = classNames('Header p-4 bg-white w-full', {
		'sticky top-0 z-10': sticky
	});

	return (
		<header className={styleClass} data-testid="Header">
			<LogoLink />
		</header>
	);
};

export default Header;
