import { h, Component } from 'preact';
import style from './style';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Talks from '../../components/talks';
import OpenSource from '../../components/open-source';
import Projects from '../../components/projects';
import Articles from '../../components/articles';

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
					// enter
					this.toggleItems(null, index);
					break;
				case 27:
					// escape
					this.setState({ item: false });
					break;
			}
		});
	}

	render() {
		let { index } = this.state;

		const Image = <img src="../../assets/icons/mushroom-green.png" width={25} />;

		let items = ['Talks', 'Open Source', 'Projects', 'Articles'];

		const renderItems = items.map((item, index) => (
			<div>
				{index === this.state.index && Image}{' '}
				<a data-index={index} onClick={this.toggleItems}>
					{item}
				</a>
			</div>
		));

		const renderItem = index => {
			switch (index) {
				case 0:
					return <Talks />;
				case 1:
					return <OpenSource />;
				case 2:
					return <Projects />;
				case 3:
					return <Articles />;
				default:
					return <Talks />;
			}
		};

		return (
			<div>
				{!this.state.item && <Header />}

				<div class={style.home}>
					{!this.state.item && <div className={style.items}>{renderItems}</div>}

					{this.state.item && renderItem(index)}

					{this.state.item && (
						<div className="item">
							<button onClick={this.clearState}>Go Back</button>
						</div>
					)}
				</div>
			</div>
		);
	}
}
