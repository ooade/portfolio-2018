import style from './style';

const Footer = () => (
	<div id={style.footer}>
		<a
			href="https://github.com/ooade"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-github" />
		</a>
		<a
			href="https://twitter.com/_ooade"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-twitter" />
		</a>
		<a
			href="https://facebook.com/ademola.o.adegbuyi"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-facebook" />
		</a>
		<a
			href="https://linkedin.com/in/ooade"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className="fab fa-linkedin" />
		</a>
	</div>
);

export default Footer;
