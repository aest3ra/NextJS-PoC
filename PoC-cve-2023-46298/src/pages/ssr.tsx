import type { GetServerSideProps, NextPage } from 'next';

interface SSRPageProps {
  data: string;
}

const SSRPage: NextPage<SSRPageProps> = ({ data }) => {
	return (
		<div>
			<h1>My Balance</h1>
			<p>This is a server-side rendered page.</p>
			<p>Balance: {data}</p>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps<SSRPageProps> = async (context) => {
	return {
		props: {
			data: '$1337.00',
		},
	};
}

export default SSRPage; 