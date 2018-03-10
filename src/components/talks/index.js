const talks = [
	{
		link: 'https://speakerdeck.com/ooade/super-charging-single-page-apps',
		title: 'Super Charging Single Page Apps',
		host: 'Google I/O Extended 2017 Lagos'
	},
	{
		link:
			'https://docs.google.com/presentation/d/13yTCv22Xv1gp6SkzZMVZSkvHgB8lcvkfTRizq0GdCeA/edit?usp=sharing',
		title: 'Scaling through the hurdles of unemployment as a web developer',
		host: 'Facebook Developer Circles'
	},
	{
		link:
			'https://medium.com/@ooade/freecodecamp-ikeja-novembers-meetup-63870dd074f7',
		title: 'Scaling through the hurdles of unemployment as a web developer',
		host: 'FreeCodeCamp Ikeja'
	}
];

const renderTalks = talks.map(({ link, title, host }) => (
	<div className="item">
		{host}
		<a href={link} target="_blank" rel="noopener noreferrer">
			{' '}
			[ {title} ]
		</a>
	</div>
));

const Talks = () => (
	<div>
		<h1> Talks </h1>
		{renderTalks}
	</div>
);

export default Talks;
