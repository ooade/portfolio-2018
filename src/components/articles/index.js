const articles = [
	{
		link:
			'https://codeburst.io/account-linking-with-passportjs-in-3-minutes-2cb1b09d4a76',
		title: 'Account Linking with passportjs in 3 minutes'
	},
	{
		link:
			'https://medium.com/@ooade/freecodecamp-ikeja-novembers-meetup-63870dd074f7',
		title: 'Scaling through the hurdles of unemployment as a web developer'
	}
];

const renderArticles = articles.map(({ link, title }) => (
	<div className="item">
		<a href={link} target="_blank" rel="noopener noreferrer">
			{title}
		</a>
	</div>
));

const Articles = ({ clearState }) => (
	<div>
		<h1>
			<a onClick={clearState}>
				<i class="fas fa-angle-left" />
			</a>{' '}
			Articles
		</h1>
		{renderArticles}
	</div>
);

export default Articles;
