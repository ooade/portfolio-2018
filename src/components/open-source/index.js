import React from 'react';

const API = 'https://api.github.com/users/ooade/repos?per_page=100';

class OpenSource extends React.Component {
	state = {
		projects: []
	}

	updateData = data => {
		let projects = data
			.reduce((acc, { forks_count, html_url, name, stargazers_count }) => {
				if (stargazers_count > 20) {
					acc.push({ forks_count, html_url, name, stargazers_count });
				}
				return acc;
			}, [])
			.sort((a, b) => a.stargazers_count < b.stargazers_count);

		this.setState({ projects });
	}

	async componentDidMount() {
		try {
			const res = await fetch(API);
			const data = await res.json();

			this.updateData(data);
		}
		catch (e) {
			console.error(e);
		}
	}

	render() {
		const renderProjects = this.state.projects.map(
			({ forks_count, html_url, name, stargazers_count }) => (
				<div className="item" key={name}>
					<a href={html_url}>{name}</a> <i className="fas fa-code-branch" />
					{forks_count} <i className="fas fa-star" />
					{stargazers_count}
				</div>
			)
		);

		return (
			<div>
				<h1>
					<a onClick={this.props.clearState}>
						<i className={this.state.projects.length && `fas fa-angle-left`} />
					</a>{' '}
					Top OpenSource Projects
				</h1>
				{!this.state.projects.length && 'loading....'}
				{renderProjects}
			</div>
		);
	}
}

export default OpenSource;
