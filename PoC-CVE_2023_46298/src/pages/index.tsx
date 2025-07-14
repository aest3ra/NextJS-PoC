import Link from 'next/link';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<div>
			<h1>Next JS Bank</h1>
			<p>
				<Link href="/ssr">Check my Balance</Link>
			</p>
		</div>
	);
}

export default HomePage; 