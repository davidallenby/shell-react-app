import Logo from '@components/ui/Logo/Logo';
import { RouterLink } from '../RouterLink/RouterLink';

export function LogoLink() {
	return (
		<RouterLink to="/">
			<Logo />
		</RouterLink>
	);
}
