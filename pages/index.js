import React, { Component } from 'react';

import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Talks from '../src/components/talks';
import OpenSource from '../src/components/open-source';
import Projects from '../src/components/projects';
import Articles from '../src/components/articles';

export default class Home extends Component {
	state = {
		index: 0,
		item: false
	}

	toggleItems = (e, i) => {
		let index = i || (e ? +e.target.dataset.index : 0);

		this.setState({ item: true, index });
	}

	clearState = () => {
		this.setState({ item: false });
	}

	componentDidMount() {
		window.addEventListener('keydown', e => {
			let { index } = this.state;

			switch (e.keyCode) {
				case 38:
					// up
					this.setState({ index: index > 0 ? index - 1 : 0 });
					break;
				case 40:
					// down
					this.setState({ index: index < 3 ? index + 1 : 3 });
					break;
				case 13:
				case 39:
					// enter, arrow right
					this.toggleItems(null, index);
					break;
				case 27:
				case 37:
					// escape, arrow left
					this.setState({ item: false });
					break;
			}
		});
	}

	render() {
		let { index } = this.state;

		const Image = <img src="/static/icons/mushroom-green.png" width={25} />;

		let items = ['Talks', 'Open Source', 'Projects', 'Articles'];

		const renderItems = items.map((item, index) => (
			<div key={item}>
				{index === this.state.index && Image}{' '}
				<a data-index={index} onClick={this.toggleItems}>
					{item}
				</a>
			</div>
		));

		const renderItem = index => {
			switch (index) {
				case 0:
					return <Talks clearState={this.clearState} />;
				case 1:
					return <OpenSource clearState={this.clearState} />;
				case 2:
					return <Projects clearState={this.clearState} />;
				case 3:
					return <Articles clearState={this.clearState} />;
				default:
					return <Talks clearState={this.clearState} />;
			}
		};

		return (
			<React.Fragment>
				{!this.state.item && <Header />}

				<div className="home">
					{!this.state.item && <div className="items">{renderItems}</div>}

					{this.state.item && renderItem(index)}

					{this.state.item && (
						<div className="item">
							<button onClick={this.clearState}>Go Back</button>
						</div>
					)}
				</div>
				<style jsx>
					{`
						.home {
							min-height: 100%;
							width: 100%;
							text-align: center;
							margin-top: 5rem;
							font-size: 20px;
						}
					`}
				</style>
				<Footer />
			</React.Fragment>
		);
	}
}
