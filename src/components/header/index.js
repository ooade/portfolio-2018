const Header = () => (
	<header className="header">
		<h1>Ademola Adegbuyi</h1>
		<h3>Full Stack Developer</h3>
		<style jsx>
			{`
				.header {
					padding: 0;
					z-index: 50;
				}

				.header h1 {
					margin: 4rem 0 0;
					padding: 0 15px;
					font-size: 2rem;
					line-height: 56px;
					font-weight: 400;
					color: #fff;
					text-align: center;
				}

				.header h3 {
					margin: 0;
					padding: 0 15px;
					font-size: 1.5rem;
					line-height: 56px;
					font-weight: 400;
					color: #fff;
					text-align: center;
				}
			`}
		</style>
	</header>
);

export default Header;
