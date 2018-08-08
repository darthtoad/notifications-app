import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Notifications App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/notifications/new">New Notifications</Link>
			<Link activeClassName={style.active} href="/notifications/all">See Notifications</Link>
		</nav>
	</header>
);

export default Header;
