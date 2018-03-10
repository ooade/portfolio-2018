const projects = [
	{
		title: 'Rogue-Like Game',
		link: 'https://rogue-game.surge.sh',
		stacks: ['React.js']
	},
	{
		title: 'Pinterest Clone',
		link: 'https://p1nit.herokuapp.com',
		stacks: ['React.js', 'Meteor.js', 'MongoDB']
	},
	{
		title: 'Force Directed Graph',
		link: 'https://codepen.io/ademola/full/OXgBzY',
		stacks: ['D3.js']
	},
	{
		title: 'Simon Game',
		link: 'https://codepen.io/ademola/full/KdzPdr',
		stacks: ['JQuery']
	},
	{
		title: 'Tic Tac Toe Game',
		link: 'https://codepen.io/ademola/full/pjjoVd',
		stacks: ['Angular.js']
	},
	{
		title: 'Chart the Stock Market',
		link: 'https://stockstock.herokuapp.com',
		stacks: ['Angular.js', 'Socket.io', 'Express.js']
	}
];

const renderProjects = projects.map(({ title, link, stacks }) => (
	<div className="item">
		<a href={link} target="_blank" rel="noopener noreferrer">
			{title}
		</a>
		<div>{stacks.join(', ')}</div>
	</div>
));

const Projects = ({ clearState }) => (
	<div>
		<h1>
			<a onClick={clearState}>
				<i class="fas fa-angle-left" />
			</a>{' '}
			Projects
		</h1>
		{renderProjects}
	</div>
);

export default Projects;
