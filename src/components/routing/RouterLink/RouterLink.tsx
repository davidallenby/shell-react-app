import { Link, type LinkProps } from 'react-router';

interface RouterLinkProps extends LinkProps {}

export function RouterLink({ children, ...props }: RouterLinkProps) {
	return <Link {...props}>{children}</Link>;
}
