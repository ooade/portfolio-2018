const links = [
	{
		href: 'https://facebook.com/ademola.o.adegbuyi',
		icon: 'fa-facebook',
		alt: 'facebook'
	},
	{
		href: 'https://twitter.com/_ooade',
		icon: 'fa-twitter',
		alt: 'twitter'
	},
	{
		href: 'https://linkedin.com/in/ooade',
		icon: 'fa-linkedin',
		alt: 'linkedin'
	},
	{
		href: 'https://github.com/ooade',
		icon: 'fa-github',
		alt: 'github'
	},
	{
		href: 'https://freecodecamp.com/ooade',
		icon: 'fa-free-code-camp',
		alt: 'freeCodeCamp'
	},
	{
		href: 'https://www.hackerrank.com/ooade',
		icon: 'fas fa-code',
		alt: 'Hackerrank'
	},
	{
		href: 'https://codepen.io/ademola/',
		icon: 'fa-codepen',
		alt: 'CodePen'
	},
	{
		href: 'https://stackoverflow.com/users/5040413/ademola-adegbuyi',
		icon: 'fa-stack-overflow',
		alt: 'stackOverflow'
	}
];

const renderLinks = links.map(({ alt, icon, href }) => (
	<a href={href} key={alt} target="_blank" rel="noopener noreferrer">
		<i className={`fab ${icon}`} alt={alt} title={alt} />
	</a>
));

const Footer = () => (
	<div id="footer">
		{renderLinks}
		<br />
		<br />
		<a
			href="https://codewars.com/users/ademola"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="https://www.codewars.com/users/ademola/badges/micro" />
		</a>
		<style jsx>
			{`
				#footer {
					margin-top: 7rem;
					text-align: center;
					font-size: 20px;
				}
			`}
		</style>
	</div>
);

export default Footer;
